import React from 'react';
import { useNavigate } from 'react-router-dom';
import freelancersImg from '../assets/images/banner-section-freelancers.png';

/* ─── Shield SVG icon ─── */
const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const bulletPoints = [
  'Work with experts who will source, interview, and vet freelancers for you',
  'Get a report with clear recommendations',
  'Hire vetted freelance talent with confidence',
];

const ProBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#1b4332] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* ── Left: Text content ── */}
        <div className="flex-1 max-w-[560px]">
          {/* Brand */}
          <div className="flex items-center gap-1.5 mb-5">
            <span className="text-white font-black text-[22px] tracking-tight">ServiceHub.</span>
           
          </div>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-6">
            Let experts find the right<br className="hidden sm:block" /> freelancer for you
          </h2>

          {/* Bullet list */}
          <ul className="flex flex-col gap-3 mb-8">
            {bulletPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-white/85 text-[15px]">
                <span className="mt-1 text-white/60 flex-shrink-0">•</span>
                {point}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center px-6 py-3 bg-white text-[#1b4332] font-bold text-[15px] rounded-lg border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200"
          >
            Discover expert sourcing
          </button>

          {/* Money-back guarantee */}
          <div className="flex items-center gap-2 mt-5 text-white/70 text-[13px]">
            <ShieldIcon />
            <span>100% money-back guarantee</span>
          </div>
        </div>

        {/* ── Right: Freelancer image ── */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
          <div className="relative w-[300px] sm:w-[360px] md:w-[400px] lg:w-[460px]">
            {/* Three-dot menu */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 z-10">
              <span className="w-2 h-2 rounded-full bg-white/60" />
              <span className="w-2 h-2 rounded-full bg-white/60" />
              <span className="w-2 h-2 rounded-full bg-white/60" />
            </div>

            {/* Image */}
            <img
              src={freelancersImg}
              alt="Expert freelancers"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              style={{ maxHeight: '320px', objectPosition: 'top center' }}
            />

            {/* Name badge overlay */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2">
              <div className="w-7 h-7 rounded-full bg-[#1DBF73] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                L
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[13px] leading-tight">Lillian</span>
                <span className="text-white/70 text-[11px]">Website developer</span>
              </div>
            </div>

            {/* Play button */}
            <div className="absolute bottom-4 right-4 w-11 h-11 bg-[#1DBF73] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#17a660] transition-colors">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                <path d="M2 1.5l12 7.5-12 7.5V1.5z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProBanner;
