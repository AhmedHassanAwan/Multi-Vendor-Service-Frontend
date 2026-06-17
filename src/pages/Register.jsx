import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/auth/AuthCard';
import InputField from '../components/auth/InputField';
import { FaHexagonNodes } from 'react-icons/fa6';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer', // 'customer' for Buyer, 'provider' for Seller
    agreeToTerms: false
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = formData;
    console.log({ name, email, password, role });
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

          <button
            type="submit"
            className="w-full h-12 bg-[#1DBF73] text-white font-bold rounded-lg hover:bg-[#19a463] transition-colors shadow-md mt-2"
          >
            Create Account
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
