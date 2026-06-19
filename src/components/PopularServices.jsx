import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import webdev from "../assets/images/website-development.webp";
import logodesign from "../assets/images/logo.webp";
import softwaredev from "../assets/images/software-development.webp";
import vibecoding from "../assets/images/vibe_coding.webp";
import websitedesign from "../assets/images/webdesign.webp";
import socialmedia from "../assets/images/social media.webp";

const categories = [
  { name: "Vibe Coding",slug: "vibe-coding",image: vibecoding },
  { name: "Web Development",slug: "web-dev",image: webdev },
  { name: "Software Development",slug: "software-dev",image: softwaredev },
  { name: "Website Design",slug: "websitedesign",image: websitedesign },
  { name: "Logo Design",slug: "logo-design",image: logodesign },
  {name : "Social Media Marketing",slug: "social-media",image: socialmedia},
  
];

const PopularServices = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white max-w-[1400px] mx-auto">

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-[#1DBF73] uppercase tracking-widest mb-1">
          Explore Categories
        </p>
        <h2 className="text-[36px] font-extrabold text-[#404145]">
          Popular services
        </h2>
      </div>

      {/* Slider Wrapper */}
      <div className="relative">

        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition"
        >
          ‹
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => navigate(`/services?category=${cat.slug}`)}
              className="flex-shrink-0 w-[220px] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200"
              style={{ backgroundColor: '#1a3a2a' }}
            >
              {/* Title */}
              <div className="px-5 pt-5 pb-3">
                <h3 className="text-white font-bold text-[18px] leading-snug">
                  {cat.name}
                </h3>
              </div>

              {/* Image */}
              <div className="mx-3 mb-3 rounded-xl overflow-hidden h-[160px]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition"
        >
          ›
        </button>

      </div>

      {/* Browse all */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/services?category=all')}
          className="text-[#1DBF73] font-bold text-[15px] hover:underline"
        >
          Browse all categories →
        </button>
      </div>
    </section>
  );
};

export default PopularServices;