import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../store/api/authApi';
import { setCredentials } from '../store/authSlice';
import AuthCard from '../components/auth/AuthCard';
import InputField from '../components/auth/InputField';
import { HiEnvelope, HiLockClosed, HiEye, HiEyeSlash, HiArrowRight } from 'react-icons/hi2';
import { FaGoogle, FaApple, FaHexagonNodes } from 'react-icons/fa6';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
    rememberMe: false
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleShowPassword = () => {
    setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    try {
      const result = await loginUser({
        email: formData.email,
        password: formData.password
      }).unwrap();

      // Dispatch user credentials to auth store
      dispatch(setCredentials({ user: result.user, token: result.token }));

      // Redirect depending on role and profile completion
    if (result.user.role === 'provider') {
    navigate(result.user.isProfileComplete ? '/dashboard/provider' : '/provider/setup');
  } else if (result.user.role === 'customer') {
    navigate('/'); // ✅ customer → home
  } else if (result.user.role === 'admin') {
    navigate('/dashboard/admin');
  }
    } catch (err) {
      console.error(err);
      setFormError(err.data?.message || 'Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center p-4">
      <div className="mb-8 flex flex-col items-center">
        <div className="w-16 h-16 bg-[#1DBF73] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#1DBF73]/20">
          <FaHexagonNodes className="text-3xl text-white" />
        </div>
        <h1 className="text-3xl font-bold text-[#404145] mb-1">ServiceHub</h1>
        <p className="text-[15px] text-gray-500">Welcome back to the marketplace</p>
      </div>

      <AuthCard>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            icon={<HiEnvelope className="text-lg" />}
            required
          />
          
          <div className="relative group">
            <div className="flex justify-between items-center mb-1.5">
                <label className="text-[14px] font-semibold text-[#404145]">Password</label>
                <button type="button" className="text-[13px] text-[#1DBF73] font-semibold hover:underline">
                    Forgot password?
                </button>
            </div>
            <InputField
              type={formData.showPassword ? 'text' : 'password'}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              icon={<HiLockClosed className="text-lg" />}
              rightIcon={
                <div onClick={toggleShowPassword}>
                  {formData.showPassword ? <HiEyeSlash className="text-lg" /> : <HiEye className="text-lg" />}
                </div>
              }
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded border-[#dadbdd] text-[#1DBF73] focus:ring-[#1DBF73]"
            />
            <label htmlFor="rememberMe" className="text-[14px] text-[#404145] font-medium">
              Remember me for 30 days
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
            className={`w-full h-12 bg-[#1DBF73] text-white font-bold rounded-lg hover:bg-[#19a463] transition-all duration-200 shadow-lg shadow-[#1DBF73]/20 flex items-center justify-center gap-2 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
            <HiArrowRight className="text-lg stroke-[1.5]" />
          </button>

        

       

        </form>

        <div className="text-center mt-8">
          <p className="text-[14px] text-[#404145]">
            Don't have account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-[#1DBF73] font-bold hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </AuthCard>
    </div>
  );
};

export default Login;
