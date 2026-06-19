import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineCode, HiOutlinePencil, HiOutlineDocumentText, HiOutlineShare } from 'react-icons/hi';

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Web Development", slug: "web-dev", icon: <HiOutlineCode size={40} /> },
    { name: "Logo Design", slug: "logo-design", icon: <HiOutlinePencil size={40} /> },
    { name: "Content Writing", slug: "content-writing", icon: <HiOutlineDocumentText size={40} /> },
    { name: "Social Media", slug: "social-media", icon: <HiOutlineShare size={40} /> }
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-white max-w-[1400px] mx-auto">
      <h2 className="text-3xl font-bold text-[#404145] mb-10">Popular Categories</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            onClick={() => navigate(`/services?category=${cat.slug}`)}
            className="group flex flex-col items-center justify-center p-8 border border-[#e4e5e7] rounded-xl cursor-pointer hover:shadow-xl hover:border-[#1DBF73] hover:scale-[1.02] transition-all duration-300"
          >
            <div className="text-[#1DBF73] mb-4 transition-transform duration-300 group-hover:scale-110">
              {cat.icon}
            </div>
            <h3 className="text-[18px] font-bold text-[#404145] group-hover:text-[#1DBF73] transition-colors text-center">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
