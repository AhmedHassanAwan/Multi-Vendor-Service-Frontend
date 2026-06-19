import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/guideimage1.webp';
import img2 from '../assets/images/guideimage2.webp';
import img3 from '../assets/images/guideimage3.webp';

const guides = [
  {
    id: 1,
    image: img2,
    title: 'Start a side business',
    bg: null,
  },
  {
    id: 2,
    image: img1,
    title: 'Ecommerce business ideas',
    bg: '#d4f0e0',
  },
  {
    id: 3,
    image: img3,
    title: 'Start an online business and work from home',
    bg: null,
  },
];

const GuidesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#404145]">
            Guides to help you grow
          </h2>
          <button
            onClick={() => navigate('/services')}
            className="text-[14px] text-[#404145] font-semibold hover:underline whitespace-nowrap"
          >
            See more guides
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {guides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => navigate('/services')}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image box */}
              <div
                className="w-full h-[220px] md:h-[250px] rounded-2xl overflow-hidden"
                style={{ backgroundColor: guide.bg || '#f0f0f0' }}
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title below */}
              <p className="mt-4 text-[15px] font-medium text-[#404145] group-hover:text-[#1b4332] transition-colors leading-snug">
                {guide.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GuidesSection;
