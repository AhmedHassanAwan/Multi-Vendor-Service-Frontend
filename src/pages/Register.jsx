import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from '../store/api/authApi';
import { setCredentials } from '../store/authSlice';
import AuthCard from '../components/auth/AuthCard';
import InputField from '../components/auth/InputField';
import { FaHexagonNodes } from 'react-icons/fa6';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, { isLoading }] = useRegisterMutation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer', // 'customer' for Buyer, 'provider' for Seller
    agreeToTerms: false
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRoleChange = (role) => {
    setFormData(prev => ({ ...prev, role }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    try {
      const result = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role
      }).unwrap();

      
      dispatch(setCredentials({ user: result.user, token: result.token }));

      // Redirect depending on role
      if (result.user.role === 'provider') {
  navigate('/provider-setup'); // ya '/provider/setup' — jo App.jsx mein hai
} else if (result.user.role === 'customer') {
  navigate('/login'); // ✅ customer → login page
}
    } catch (err) {
      console.error(err);
      // Format validation errors or regular errors from backend
      if (err.data && err.data.errors) {
        setFormError(err.data.errors.map(e => e.message).join(', '));
      } else {
        setFormError(err.data?.message || 'Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center p-4">
      <div className="mb-6 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-1">
          <FaHexagonNodes className="text-4xl text-[#1DBF73]" />
          <h1 className="text-2xl font-bold text-[#404145]">ServiceHub</h1>
        </div>
        <p className="text-[14px] text-[#404145] font-medium">Join the professional marketplace</p>
      </div>

      <AuthCard>
        {/* Role Toggle */}
        <div className="flex p-1 bg-[#F5F5F5] rounded-lg mb-6 border border-[#dadbdd]">
          <button
            type="button"
            onClick={() => handleRoleChange('customer')}
            className={`flex-1 py-2.5 text-[14px] font-semibold rounded-md transition-all duration-200 ${
              formData.role === 'customer'
                ? 'bg-[#1DBF73] text-white shadow-sm'
                : 'text-[#404145] hover:bg-[#eaeaea]'
            }`}
          >
            I'm a Buyer
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange('provider')}
            className={`flex-1 py-2.5 text-[14px] font-semibold rounded-md transition-all duration-200 ${
              formData.role === 'provider'
                ? 'bg-[#1DBF73] text-white shadow-sm'
                : 'text-[#404145] hover:bg-[#eaeaea]'
            }`}
          >
            I'm a Seller
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputField
            label="Full Name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="agreeToTerms"
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 rounded border-[#dadbdd] text-[#1DBF73] focus:ring-[#1DBF73]"
              required
            />
            <label htmlFor="agreeToTerms" className="text-[13px] text-[#404145]">
              I agree to the <span className="text-[#1DBF73] font-semibold cursor-pointer">Terms of Service</span> and <span className="text-[#1DBF73] font-semibold cursor-pointer">Privacy Policy</span>.
            </label>
          </div>

          {formError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-[13px] font-semibold text-center">
              {formError}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 bg-[#1DBF73] text-white font-bold rounded-lg hover:bg-[#19a463] transition-colors shadow-md mt-2 flex items-center justify-center gap-2 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#dadbdd]"></div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[14px] text-[#404145]">
            Already have account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-[#1DBF73] font-bold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </AuthCard>
    </div>
  );
};

export default Register;
