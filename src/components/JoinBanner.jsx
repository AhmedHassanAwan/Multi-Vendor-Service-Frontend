import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../store/authSlice';
import { HiOutlineUserGroup, HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineCheckCircle } from 'react-icons/hi';

const JoinBanner = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const features = [
    {
      icon: <HiOutlineUserGroup size={40} className="text-[#404145]" />,
      text: "Access a pool of top talent across 700 categories"
    },
    {
      icon: <HiOutlineSparkles size={40} className="text-[#404145]" />,
      text: "Enjoy a simple, easy-to-use matching experience"
    },
    {
      icon: <HiOutlineLightningBolt size={40} className="text-[#404145]" />,
      text: "Get quality work done quickly and within budget"
    },
    {
      icon: <HiOutlineCheckCircle size={40} className="text-[#404145]" />,
      text: "Only pay when you're happy"
    }
  ];

  return (
    <section className="py-14 px-2 md:px-12 bg-[#F5F5F5] border-t border-b border-[#e4e5e7]">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#404145]">
            Make it all happen with freelancers
          </h2>
          
          {!isLoggedIn && (
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-3 bg-[#222325] text-white font-bold rounded-lg hover:bg-[#333] transition-all text-[16px]"
            >
              Join now
            </button>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 max-w-[280px]">
              <div className="mb-2">
                {feature.icon}
              </div>
              <p className="text-[18px] text-[#404145] leading-relaxed font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinBanner;
