import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiSearch, HiArrowRight } from 'react-icons/hi';

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${searchQuery}`);
    }
  };

  const handleTagClick = (tagCategory) => {
    navigate(`/services?category=${tagCategory}`);
  };

  const popularTags = [
    { name: "Website Development", category: "web-dev" },
    { name: "Architecture & Interior Design", category: "architecture" },
    { name: "UGC Videos", category: "video-ads" },
    { name: "Video Editing", category: "video-editing" },
    { name: "Book Publishing", category: "writing" }
  ];

  return (
    <div className="relative w-full min-h-[500px] bg-[#1b4332] flex flex-col items-center justify-center px-4 py-20 text-white mt-[65px]">
      {/* Content */}
      <div className="max-w-[1200px] w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
          Find the perfect <span className="font-serif italic font-normal">service</span> for your business
        </h1>

        {/* Search Bar Refined */}
        <form onSubmit={handleSearch} className="flex items-center bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-[1000px] mx-auto mb-10 h-[56px] p-1">
          <input
            type="text"
            placeholder="Search for any service..."
            className="flex-1 px-6 text-[#404145] outline-none text-[16px] placeholder:text-gray-400 font-medium h-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#222325] text-white w-[50px] h-full flex items-center justify-center rounded-md hover:bg-[#333] transition-colors flex-shrink-0"
          >
            <HiSearch size={22} className="stroke-[1.5]" />
          </button>
        </form>

        {/* Popular Tags Refined */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[14px] font-semibold">
         
          {popularTags.map((tag) => (
            <button
              key={tag.category}
              onClick={() => handleTagClick(tag.category)}
              className="group flex items-center gap-2 border border-white/80 px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-white font-bold cursor-pointer"
            >
              {tag.name}
              <HiArrowRight className="text-white transition-transform group-hover:translate-x-0.5" size={14} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
