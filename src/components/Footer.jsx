import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialYoutube } from 'react-icons/ti';

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-4 md:px-12 mt-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#1b4332]">ServiceHub</h2>
          <p className="text-gray-400 text-[14px] leading-relaxed">
            The world's largest marketplace for professional services. 
            Find the perfect talent for your business today.
          </p>
          <div className="flex gap-4 items-center mt-2">
            <TiSocialFacebook size={24} className="text-gray-400 hover:text-[#1DBF73] cursor-pointer transition-colors" />
            <TiSocialTwitter size={24} className="text-gray-400 hover:text-[#1DBF73] cursor-pointer transition-colors" />
            <TiSocialLinkedin size={24} className="text-gray-400 hover:text-[#1DBF73] cursor-pointer transition-colors" />
            <TiSocialYoutube size={24} className="text-gray-400 hover:text-[#1DBF73] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Columns */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[#1b4332]">Company</h3>
          <Link to="/about" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">About Us</Link>
          <Link to="/careers" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">Careers</Link>
          <Link to="/press" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">Press & News</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[#1b4332]">Support</h3>
          <Link to="/help" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">Help Center</Link>
          <Link to="/contact" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">Contact Support</Link>
          <Link to="/trust" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">Trust & Safety</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[#1b4332]">Popular Categories</h3>
          <Link to="/services?category=web-dev" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">Web Development</Link>
          <Link to="/services?category=logo-design" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">Logo Design</Link>
          <Link to="/services?category=content-writing" className="text-gray-400 hover:text-[#1DBF73] text-[14px]">Content Writing</Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-[14px]">© 2026 ServiceHub. All rights reserved.</p>
        <div className="flex gap-6 text-[14px] text-gray-400">
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
