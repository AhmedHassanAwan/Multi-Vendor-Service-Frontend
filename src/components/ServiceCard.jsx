import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiStar, HiHeart } from 'react-icons/hi';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const {
    _id,
    title,
    price,
    serviceImage,
    averageRating,
    totalReviews,
    provider
  } = service;

  return (
    <div 
      onClick={() => navigate(`/services/${_id}`)}
      className="group bg-white border border-[#e4e5e7] rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      {/* Top: Image */}
      <div className="relative w-full h-[180px]">
        {serviceImage ? (
          <img 
            src={serviceImage} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1DBF73]/20 to-[#1DBF73]/40 flex items-center justify-center">
             <span className="text-[#1DBF73] font-bold text-[20px]">ServiceHub</span>
          </div>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-all shadow-sm">
          <HiHeart size={18} />
        </button>
      </div>

      {/* Bottom section */}
      <div className="p-4 flex flex-col gap-3">
        {/* Provider info */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            {provider?.avatar ? (
              <img src={provider.avatar} alt={provider.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-300 text-[10px] font-bold text-gray-600">
                {provider?.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#404145] hover:underline">
              {provider?.name || 'Professional Seller'}
            </span>
            {provider?.isTopRated && (
              <span className="text-[11px] text-[#1DBF73] font-bold">Top Rated Seller</span>
            )}
          </div>
        </div>

        {/* Service title */}
        <h3 className="text-[15px] text-[#404145] font-medium leading-snug line-clamp-2 min-h-[44px] group-hover:text-[#1DBF73] transition-colors">
          {title || 'I will provide professional services for your project'}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <HiStar className="text-yellow-400" size={16} />
          <span className="text-[14px] font-bold text-[#404145]">{averageRating || '5.0'}</span>
          <span className="text-[14px] text-gray-400">({totalReviews || '0'})</span>
        </div>

        {/* Price */}
        <div className="pt-3 border-t border-[#efeff0] flex justify-between items-center">
          <span className="text-gray-400 text-[12px] uppercase font-bold tracking-wider">From</span>
          <span className="text-[18px] font-bold text-[#404145]">
            Rs. {price?.toLocaleString() || '5,000'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
