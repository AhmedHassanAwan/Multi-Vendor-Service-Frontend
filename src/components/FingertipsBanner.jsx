import React from 'react';
import { useNavigate } from 'react-router-dom';

const FingertipsBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-12 py-6 bg-white">
      <div
        className="max-w-[1400px] mx-auto rounded-2xl flex flex-col items-center justify-center py-14 px-6 text-center"
        style={{ backgroundColor: '#3b0a28' }}
      >
        {/* Heading */}
        <h2 className="text-[28px] md:text-[38px] font-bold text-white leading-tight">
          Freelance services at your{' '}
          <span style={{ color: '#e8896a' }}>fingertips</span>
        </h2>

        {/* Button */}
        <button
          onClick={() => navigate('/login')}
          className="mt-6 px-7 py-2.5 bg-white text-[#3b0a28] font-bold text-[15px] rounded-lg border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200"
        >
          Join ServiceHub
        </button>
      </div>
    </section>
  );
};

export default FingertipsBanner;
