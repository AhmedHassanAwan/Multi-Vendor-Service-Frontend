// import React, { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { HiStar, HiHeart, HiFilter, HiChevronDown } from 'react-icons/hi';

// /* ─── Mock data per category ─── */
// const MOCK_DATA = {
//   'logo-design': [
//     { _id: 'ld1', title: 'I will do professional, modern business logo design and redesign', provider: { name: 'Abid Studio', level: "Fiverr's Choice", avatar: null, initials: 'AS' }, rating: 4.9, reviews: 137, price: 19, badge: "Fiverr's Choice", badgeColor: '#2d6a4f' },
//     { _id: 'ld2', title: 'I will design a modern minimalist custom business logo and complete brand identity', provider: { name: 'Arslan', level: 'Level 2 ⭐⭐', avatar: null, initials: 'AR' }, rating: 4.9, reviews: 265, price: 14, badge: null },
//     { _id: 'ld3', title: 'I will do modern minimalist business logo design and redesign', provider: { name: 'Muhammad Shazad', level: 'Level 2 ⭐⭐', avatar: null, initials: 'MS' }, rating: 5.0, reviews: 57, price: 5, badge: null },
//     { _id: 'ld4', title: 'I will create elegant minimalist logo design for your brand', provider: { name: 'Imesha M', level: 'Level 2 ⭐⭐', avatar: null, initials: 'IM' }, rating: 4.9, reviews: 303, price: 5, badge: null },
//     { _id: 'ld5', title: 'I will design a creative minimalist logo', provider: { name: 'Alpa', level: 'Vetted Pro', avatar: null, initials: 'AL' }, rating: 4.9, reviews: 1200, price: 100, badge: 'Vetted Pro', badgeColor: '#5b21b6' },
//     { _id: 'ld6', title: 'I will do custom business logo design with copyrights', provider: { name: 'Allie', level: 'Level 2 ⭐⭐', avatar: null, initials: 'AL' }, rating: 4.9, reviews: 84, price: 37, badge: null },
//     { _id: 'ld7', title: 'I will do modern, minimalist logo design and branding kit', provider: { name: 'Makkin Sol', level: 'Top Rated ⭐⭐⭐', avatar: null, initials: 'MK' }, rating: 4.8, reviews: 401, price: 37, badge: 'Top Rated', badgeColor: '#b45309' },
//     { _id: 'ld8', title: 'I will do unique modern minimalist luxury business logo design', provider: { name: 'Alex', level: 'Level 2 ⭐⭐', avatar: null, initials: 'AX' }, rating: 4.9, reviews: 1500, price: 23, badge: null },
//   ],
//   'web-dev': [
//     { _id: 'wd1', title: 'I will build a professional React or Next.js website from scratch', provider: { name: 'CodeCraft Studio', level: 'Top Rated ⭐⭐⭐', avatar: null, initials: 'CC' }, rating: 5.0, reviews: 312, price: 49, badge: 'Top Rated', badgeColor: '#b45309' },
//     { _id: 'wd2', title: 'I will develop a full-stack MERN web application with admin panel', provider: { name: 'DevMaster Pro', level: 'Level 2 ⭐⭐', avatar: null, initials: 'DM' }, rating: 4.9, reviews: 184, price: 89, badge: null },
//     { _id: 'wd3', title: 'I will create a responsive WordPress website with custom design', provider: { name: 'WebWizard', level: "Fiverr's Choice", avatar: null, initials: 'WW' }, rating: 4.8, reviews: 520, price: 25, badge: "Fiverr's Choice", badgeColor: '#2d6a4f' },
//     { _id: 'wd4', title: 'I will fix bugs and improve your existing website', provider: { name: 'BugSlayer99', level: 'Level 1 ⭐', avatar: null, initials: 'BS' }, rating: 4.7, reviews: 93, price: 15, badge: null },
//     { _id: 'wd5', title: 'I will convert Figma or Adobe XD design to pixel-perfect HTML/CSS', provider: { name: 'PixelPerfect Dev', level: 'Level 2 ⭐⭐', avatar: null, initials: 'PP' }, rating: 4.9, reviews: 267, price: 30, badge: null },
//     { _id: 'wd6', title: 'I will build a landing page that converts visitors into customers', provider: { name: 'ConversionKing', level: 'Top Rated ⭐⭐⭐', avatar: null, initials: 'CK' }, rating: 5.0, reviews: 198, price: 60, badge: 'Top Rated', badgeColor: '#b45309' },
//     { _id: 'wd7', title: 'I will develop an e-commerce store with Shopify or WooCommerce', provider: { name: 'ShopBuilder Elite', level: 'Vetted Pro', avatar: null, initials: 'SB' }, rating: 4.9, reviews: 750, price: 120, badge: 'Vetted Pro', badgeColor: '#5b21b6' },
//     { _id: 'wd8', title: 'I will create a mobile-first responsive web design with animations', provider: { name: 'MotionWeb Labs', level: 'Level 2 ⭐⭐', avatar: null, initials: 'MW' }, rating: 4.8, reviews: 141, price: 40, badge: null },
//   ],
//   'content-writing': [
//     { _id: 'cw1', title: 'I will write SEO-optimized blog posts and articles that rank on Google', provider: { name: 'ContentQueen', level: 'Top Rated ⭐⭐⭐', avatar: null, initials: 'CQ' }, rating: 5.0, reviews: 892, price: 20, badge: 'Top Rated', badgeColor: '#b45309' },
//     { _id: 'cw2', title: 'I will write compelling website copy and landing page content', provider: { name: 'CopyMaster Pro', level: "Fiverr's Choice", avatar: null, initials: 'CM' }, rating: 4.9, reviews: 345, price: 35, badge: "Fiverr's Choice", badgeColor: '#2d6a4f' },
//     { _id: 'cw3', title: 'I will create product descriptions that drive sales on Amazon or Shopify', provider: { name: 'SalesWordsmith', level: 'Level 2 ⭐⭐', avatar: null, initials: 'SW' }, rating: 4.8, reviews: 210, price: 10, badge: null },
//     { _id: 'cw4', title: 'I will write a professional press release for your brand or event', provider: { name: 'PRWriter Elite', level: 'Level 1 ⭐', avatar: null, initials: 'PR' }, rating: 4.7, reviews: 67, price: 15, badge: null },
//     { _id: 'cw5', title: 'I will ghostwrite a high-quality eBook or long-form content piece', provider: { name: 'GhostPen Studios', level: 'Vetted Pro', avatar: null, initials: 'GP' }, rating: 4.9, reviews: 430, price: 75, badge: 'Vetted Pro', badgeColor: '#5b21b6' },
//     { _id: 'cw6', title: 'I will write engaging social media captions for Instagram and LinkedIn', provider: { name: 'CaptionCrafter', level: 'Level 2 ⭐⭐', avatar: null, initials: 'CC' }, rating: 4.9, reviews: 183, price: 12, badge: null },
//     { _id: 'cw7', title: 'I will create email newsletters that boost open rates and conversions', provider: { name: 'EmailAlchemist', level: 'Level 2 ⭐⭐', avatar: null, initials: 'EA' }, rating: 5.0, reviews: 99, price: 28, badge: null },
//     { _id: 'cw8', title: 'I will write technical documentation or developer guides', provider: { name: 'TechDocs Pro', level: 'Top Rated ⭐⭐⭐', avatar: null, initials: 'TD' }, rating: 4.8, reviews: 152, price: 45, badge: 'Top Rated', badgeColor: '#b45309' },
//   ],
//   'social-media': [
//     { _id: 'sm1', title: 'I will manage your Instagram, TikTok and Facebook pages professionally', provider: { name: 'SocialSurge Agency', level: 'Top Rated ⭐⭐⭐', avatar: null, initials: 'SS' }, rating: 5.0, reviews: 621, price: 55, badge: 'Top Rated', badgeColor: '#b45309' },
//     { _id: 'sm2', title: 'I will create a 30-day social media content calendar and strategy', provider: { name: 'StrategyQueen', level: "Fiverr's Choice", avatar: null, initials: 'SQ' }, rating: 4.9, reviews: 278, price: 29, badge: "Fiverr's Choice", badgeColor: '#2d6a4f' },
//     { _id: 'sm3', title: 'I will design eye-catching social media graphics and posts in Canva', provider: { name: 'DesignBurst', level: 'Level 2 ⭐⭐', avatar: null, initials: 'DB' }, rating: 4.8, reviews: 390, price: 15, badge: null },
//     { _id: 'sm4', title: 'I will run Facebook and Instagram paid ad campaigns that convert', provider: { name: 'AdRocketeer', level: 'Vetted Pro', avatar: null, initials: 'AR' }, rating: 4.9, reviews: 512, price: 80, badge: 'Vetted Pro', badgeColor: '#5b21b6' },
//     { _id: 'sm5', title: 'I will grow your TikTok account organically with viral content', provider: { name: 'TikTokGrowthHack', level: 'Level 2 ⭐⭐', avatar: null, initials: 'TG' }, rating: 4.7, reviews: 143, price: 20, badge: null },
//     { _id: 'sm6', title: 'I will create and edit professional short-form video reels for Instagram', provider: { name: 'Reel Maestro', level: 'Level 2 ⭐⭐', avatar: null, initials: 'RM' }, rating: 4.9, reviews: 205, price: 35, badge: null },
//     { _id: 'sm7', title: 'I will write compelling LinkedIn posts to grow your personal brand', provider: { name: 'LinkedInLeverage', level: 'Top Rated ⭐⭐⭐', avatar: null, initials: 'LL' }, rating: 5.0, reviews: 87, price: 18, badge: 'Top Rated', badgeColor: '#b45309' },
//     { _id: 'sm8', title: 'I will audit your social media accounts and create a growth roadmap', provider: { name: 'AuditMind Pro', level: 'Level 1 ⭐', avatar: null, initials: 'AM' }, rating: 4.8, reviews: 62, price: 25, badge: null },
//   ],
//   all: [],
// };

// /* Build 'all' from all categories */
// MOCK_DATA.all = [
//   ...MOCK_DATA['web-dev'].slice(0, 2),
//   ...MOCK_DATA['logo-design'].slice(0, 2),
//   ...MOCK_DATA['content-writing'].slice(0, 2),
//   ...MOCK_DATA['social-media'].slice(0, 2),
// ];

// /* ─── Gradient backgrounds per card (cycling) ─── */
// const CARD_GRADIENTS = [
//   'linear-gradient(135deg, #1a2d20 0%, #0d1f16 100%)',
//   'linear-gradient(135deg, #1a1040 0%, #0d0820 100%)',
//   'linear-gradient(135deg, #2d1b10 0%, #1a0d0d 100%)',
//   'linear-gradient(135deg, #10202d 0%, #081520 100%)',
//   'linear-gradient(135deg, #2a1a30 0%, #180d20 100%)',
//   'linear-gradient(135deg, #1a2a10 0%, #0d1a08 100%)',
//   'linear-gradient(135deg, #2d2010 0%, #1a1008 100%)',
//   'linear-gradient(135deg, #101a30 0%, #080d1a 100%)',
// ];

// const CATEGORY_LABELS = {
//   'all': 'All Services',
//   'web-dev': 'Web Development',
//   'logo-design': 'Logo Design',
//   'content-writing': 'Content Writing',
//   'social-media': 'Social Media',
// };

// /* ─── Mini Service Card ─── */
// const MiniServiceCard = ({ service, index }) => {
//   const navigate = useNavigate();
//   const [liked, setLiked] = useState(false);

//   const bg = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

//   return (
//     <div
//       onClick={() => navigate(`/services/${service._id}`)}
//       className="group bg-white border border-[#e4e5e7] rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
//     >
//       {/* Image area */}
//       <div className="relative w-full h-[180px]" style={{ background: bg }}>
//         {/* Provider avatar & name overlay */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex items-center gap-2">
//           <div className="w-7 h-7 rounded-full flex-shrink-0 bg-[#1DBF73] flex items-center justify-center text-white text-[11px] font-bold">
//             {service.provider.initials}
//           </div>
//           <span className="text-white text-[13px] font-semibold truncate">{service.provider.name}</span>
//           {service.provider.level && (
//             <span className="ml-auto text-[10px] text-white/70 hidden sm:block">{service.provider.level}</span>
//           )}
//         </div>
//         {/* Like button */}
//         <button
//           onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
//           className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm transition-all hover:bg-white"
//         >
//           <HiHeart size={17} className={liked ? 'text-red-500' : 'text-gray-400'} />
//         </button>
//         {/* Badge */}
//         {service.badge && (
//           <div
//             className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold text-white"
//             style={{ backgroundColor: service.badgeColor || '#2d6a4f' }}
//           >
//             {service.badge}
//           </div>
//         )}
//         {/* Decorative pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="w-full h-full" style={{
//             backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(29,191,115,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15) 0%, transparent 50%)'
//           }} />
//         </div>
//       </div>

//       {/* Card body */}
//       <div className="p-4 flex flex-col gap-2 flex-1">
//         <h3 className="text-[14px] text-[#404145] font-medium leading-snug line-clamp-2 min-h-[42px] group-hover:text-[#1DBF73] transition-colors">
//           {service.title}
//         </h3>

//         {/* Rating */}
//         <div className="flex items-center gap-1 mt-auto">
//           <HiStar className="text-yellow-400" size={15} />
//           <span className="text-[13px] font-bold text-[#404145]">{service.rating.toFixed(1)}</span>
//           <span className="text-[13px] text-gray-400">({service.reviews >= 1000 ? (service.reviews / 1000).toFixed(1) + 'k' : service.reviews})</span>
//         </div>

//         {/* Price */}
//         <div className="pt-2.5 border-t border-[#efeff0] flex justify-between items-center">
//           <span className="text-gray-400 text-[11px] uppercase font-bold tracking-wider">From</span>
//           <span className="text-[17px] font-bold text-[#404145]">€{service.price}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─── Main Page ─── */
// const ServicesPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [sortBy, setSortBy] = useState('newest');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [showFilters, setShowFilters] = useState(false);

//   const category = searchParams.get('category') || 'all';
//   const search = searchParams.get('search') || '';

//   const categories = [
//     { label: 'All', value: 'all' },
//     { label: 'Web Development', value: 'web-dev' },
//     { label: 'Logo Design', value: 'logo-design' },
//     { label: 'Content Writing', value: 'content-writing' },
//     { label: 'Social Media', value: 'social-media' },
//   ];

//   /* ─── Get & filter services ─── */
//   const rawServices = MOCK_DATA[category] || MOCK_DATA['all'];

//   const filtered = rawServices.filter((s) => {
//     const matchSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.provider.name.toLowerCase().includes(search.toLowerCase());
//     const matchMin = !minPrice || s.price >= Number(minPrice);
//     const matchMax = !maxPrice || s.price <= Number(maxPrice);
//     return matchSearch && matchMin && matchMax;
//   });

//   const sorted = [...filtered].sort((a, b) => {
//     if (sortBy === 'price-low') return a.price - b.price;
//     if (sortBy === 'price-high') return b.price - a.price;
//     if (sortBy === 'top-rated') return b.rating - a.rating;
//     return 0;
//   });

//   return (
//     <div className="min-h-screen flex flex-col bg-[#fafafa]">
//       <Navbar />

//       {/* Category header banner */}
//       <div className="bg-white border-b border-[#e4e5e7] mt-[65px]">
//         <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
//           <h1 className="text-[28px] md:text-[34px] font-extrabold text-[#404145]">
//             {CATEGORY_LABELS[category] || category}
//           </h1>
//           <p className="text-gray-500 mt-1 text-[15px]">
//             {sorted.length} services available
//             {search && <span className="ml-1">for "<strong>{search}</strong>"</span>}
//           </p>
//         </div>

//         {/* Category tabs */}
//         <div className="max-w-[1400px] mx-auto px-4 md:px-12">
//           <div className="flex gap-1 overflow-x-auto pb-0 no-scrollbar">
//             {categories.map((cat) => (
//               <button
//                 key={cat.value}
//                 onClick={() => setSearchParams({ category: cat.value })}
//                 className={`flex-shrink-0 px-4 py-2.5 text-[14px] font-semibold border-b-2 transition-colors ${
//                   category === cat.value
//                     ? 'border-[#404145] text-[#404145]'
//                     : 'border-transparent text-gray-500 hover:text-[#404145]'
//                 }`}
//               >
//                 {cat.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex-1 max-w-[1400px] mx-auto px-4 md:px-12 py-8 w-full">
//         {/* Toolbar */}
//         <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center gap-2 px-4 py-2 border border-[#e4e5e7] rounded-lg text-[14px] font-semibold text-[#404145] hover:border-[#404145] transition-colors"
//             >
//               <HiFilter size={16} /> Filters
//             </button>
//             {(minPrice || maxPrice) && (
//               <button
//                 onClick={() => { setMinPrice(''); setMaxPrice(''); }}
//                 className="text-[13px] text-red-400 hover:text-red-600 font-semibold"
//               >
//                 Clear filters ✕
//               </button>
//             )}
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="text-[14px] text-gray-500 font-medium">Sort by:</span>
//             <div className="relative">
//               <select
//                 className="appearance-none border border-[#e4e5e7] rounded-lg pl-3 pr-8 py-2 text-[14px] font-semibold text-[#404145] outline-none focus:border-[#1DBF73] cursor-pointer bg-white"
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//               >
//                 <option value="newest">Best Match</option>
//                 <option value="top-rated">Top Rated</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//               </select>
//               <HiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
//             </div>
//           </div>
//         </div>

//         {/* Filter panel */}
//         {showFilters && (
//           <div className="bg-white border border-[#e4e5e7] rounded-xl p-6 mb-6 flex flex-wrap gap-6 items-end">
//             <div>
//               <label className="block text-[13px] font-bold text-[#404145] mb-2">Min Price (€)</label>
//               <input
//                 type="number"
//                 placeholder="Any"
//                 className="w-[120px] border border-gray-300 rounded-lg p-2.5 text-[14px] outline-none focus:border-[#1DBF73]"
//                 value={minPrice}
//                 onChange={(e) => setMinPrice(e.target.value)}
//               />
//             </div>
//             <div>
//               <label className="block text-[13px] font-bold text-[#404145] mb-2">Max Price (€)</label>
//               <input
//                 type="number"
//                 placeholder="Any"
//                 className="w-[120px] border border-gray-300 rounded-lg p-2.5 text-[14px] outline-none focus:border-[#1DBF73]"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(e.target.value)}
//               />
//             </div>
//             <button
//               className="px-6 py-2.5 bg-[#1DBF73] text-white font-bold rounded-lg hover:bg-[#19a463] transition-colors text-[14px]"
//               onClick={() => setShowFilters(false)}
//             >
//               Apply
//             </button>
//           </div>
//         )}

//         {/* Results Grid */}
//         {sorted.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//             {sorted.map((service, i) => (
//               <MiniServiceCard key={service._id} service={service} index={i} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-24 bg-white rounded-2xl border border-[#e4e5e7]">
//             <div className="text-[48px] mb-4">🔍</div>
//             <p className="text-xl text-gray-400 font-medium">No services match your filters.</p>
//             <button
//               onClick={() => { setMinPrice(''); setMaxPrice(''); setSearchParams({ category }); }}
//               className="mt-4 text-[#1DBF73] font-bold hover:underline"
//             >
//               Clear all filters
//             </button>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ServicesPage;



import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiStar, HiHeart, HiFilter, HiChevronDown } from 'react-icons/hi';
import { useGetAllServicesQuery } from '../store/api/serviceApi';

/* ─── Constants ─── */
const CARD_GRADIENTS = [
  'linear-gradient(135deg, #1a2d20 0%, #0d1f16 100%)',
  'linear-gradient(135deg, #1a1040 0%, #0d0820 100%)',
  'linear-gradient(135deg, #2d1b10 0%, #1a0d0d 100%)',
  'linear-gradient(135deg, #10202d 0%, #081520 100%)',
  'linear-gradient(135deg, #2a1a30 0%, #180d20 100%)',
  'linear-gradient(135deg, #1a2a10 0%, #0d1a08 100%)',
  'linear-gradient(135deg, #2d2010 0%, #1a1008 100%)',
  'linear-gradient(135deg, #101a30 0%, #080d1a 100%)',
];

const CATEGORY_LABELS = {
  all: 'All Services',
  'web-dev': 'Web Development',
  'logo-design': 'Logo Design',
  'content-writing': 'Content Writing',
  'social-media': 'Social Media',
};

/* ─── Helper: initials ─── */
const getInitials = (name = '') =>
  name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

/* ─── Skeleton Card ─── */
const SkeletonCard = () => (
  <div className="animate-pulse bg-white border border-[#e4e5e7] rounded-xl overflow-hidden">
    <div className="h-[180px] bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-3 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-1/3 mt-4" />
    </div>
  </div>
);

/* ─── Real Service Card ─── */
const MiniServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const bg = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  return (
    <div
      onClick={() => navigate(`/services/${service._id}`)}
      className="group bg-white border border-[#e4e5e7] rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Image area */}
      <div className="relative w-full h-[180px]" style={{ background: bg }}>
        {service.serviceImage ? (
          <img
            src={service.serviceImage}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/30 font-bold text-xl">ServiceHub</span>
          </div>
        )}

        {/* Provider overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex-shrink-0 overflow-hidden bg-[#1DBF73] flex items-center justify-center text-white text-[11px] font-bold">
            {service.provider?.profilePicture ? (
              <img
                src={service.provider.profilePicture}
                alt={service.provider.name}
                className="w-full h-full object-cover"
              />
            ) : (
              getInitials(service.provider?.name)
            )}
          </div>
          <span className="text-white text-[13px] font-semibold truncate">
            {service.provider?.name}
          </span>
        </div>

        {/* Like button */}
        <button
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm transition-all hover:bg-white"
        >
          <HiHeart size={17} className={liked ? 'text-red-500' : 'text-gray-400'} />
        </button>

        {/* Top Rated badge */}
        {service.averageRating >= 4.5 && service.totalReviews > 0 && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold text-white bg-[#b45309]">
            Top Rated
          </div>
        )}

        {/* Decorative overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(29,191,115,0.4) 0%, transparent 60%)'
          }} />
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-[14px] text-[#404145] font-medium leading-snug line-clamp-2 min-h-[42px] group-hover:text-[#1DBF73] transition-colors">
          {service.title}
        </h3>

        {/* Rating */}
        {service.totalReviews > 0 ? (
          <div className="flex items-center gap-1 mt-auto">
            <HiStar className="text-yellow-400" size={15} />
            <span className="text-[13px] font-bold text-[#404145]">
              {service.averageRating?.toFixed(1)}
            </span>
            <span className="text-[13px] text-gray-400">
              ({service.totalReviews >= 1000
                ? (service.totalReviews / 1000).toFixed(1) + 'k'
                : service.totalReviews})
            </span>
          </div>
        ) : (
          <div className="text-[12px] text-gray-400 mt-auto">No reviews yet</div>
        )}

        {/* Price */}
        <div className="pt-2.5 border-t border-[#efeff0] flex justify-between items-center">
          <span className="text-gray-400 text-[11px] uppercase font-bold tracking-wider">From</span>
          <span className="text-[17px] font-bold text-[#404145]">
            Rs. {service.price?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Page ─── */
const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('newest');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const category = searchParams.get('category') || 'all';
  const search = searchParams.get('search') || '';

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Web Development', value: 'web-dev' },
    { label: 'Logo Design', value: 'logo-design' },
    { label: 'Content Writing', value: 'content-writing' },
    { label: 'Social Media', value: 'social-media' },
  ];

  /* ─── Real API Call ─── */
  const { data, isLoading, isError } = useGetAllServicesQuery({
    category: category === 'all' ? '' : category,
    search,
  });

  /* ─── Client-side filter + sort ─── */
  const services = data?.services || [];

  const filtered = services.filter((s) => {
    const matchMin = !minPrice || s.price >= Number(minPrice);
    const matchMax = !maxPrice || s.price <= Number(maxPrice);
    return matchMin && matchMax;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'top-rated') return b.averageRating - a.averageRating;
    return 0; // newest — API already returns newest first
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar />

      {/* Category header */}
      <div className="bg-white border-b border-[#e4e5e7] mt-[65px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6">
          <h1 className="text-[28px] md:text-[34px] font-extrabold text-[#404145]">
            {CATEGORY_LABELS[category] || 'All Services'}
          </h1>
          <p className="text-gray-500 mt-1 text-[15px]">
            {isLoading ? 'Loading...' : `${sorted.length} services available`}
            {search && (
              <span className="ml-1">for "<strong>{search}</strong>"</span>
            )}
          </p>
        </div>

        {/* Category tabs */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="flex gap-1 overflow-x-auto pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSearchParams(
                  cat.value === 'all' ? {} : { category: cat.value }
                )}
                className={`flex-shrink-0 px-4 py-2.5 text-[14px] font-semibold border-b-2 transition-colors
                  ${category === cat.value
                    ? 'border-[#404145] text-[#404145]'
                    : 'border-transparent text-gray-500 hover:text-[#404145]'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[1400px] mx-auto px-4 md:px-12 py-8 w-full">

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-[#e4e5e7] rounded-lg text-[14px] font-semibold text-[#404145] hover:border-[#404145] transition-colors"
            >
              <HiFilter size={16} /> Filters
            </button>
            {(minPrice || maxPrice) && (
              <button
                onClick={() => { setMinPrice(''); setMaxPrice(''); }}
                className="text-[13px] text-red-400 hover:text-red-600 font-semibold"
              >
                Clear filters ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[14px] text-gray-500 font-medium">Sort by:</span>
            <div className="relative">
              <select
                className="appearance-none border border-[#e4e5e7] rounded-lg pl-3 pr-8 py-2 text-[14px] font-semibold text-[#404145] outline-none focus:border-[#1DBF73] cursor-pointer bg-white"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Best Match</option>
                <option value="top-rated">Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <HiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="bg-white border border-[#e4e5e7] rounded-xl p-6 mb-6 flex flex-wrap gap-6 items-end">
            <div>
              <label className="block text-[13px] font-bold text-[#404145] mb-2">
                Min Price (Rs.)
              </label>
              <input
                type="number"
                placeholder="Any"
                className="w-[120px] border border-gray-300 rounded-lg p-2.5 text-[14px] outline-none focus:border-[#1DBF73]"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-[#404145] mb-2">
                Max Price (Rs.)
              </label>
              <input
                type="number"
                placeholder="Any"
                className="w-[120px] border border-gray-300 rounded-lg p-2.5 text-[14px] outline-none focus:border-[#1DBF73]"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <button
              className="px-6 py-2.5 bg-[#1DBF73] text-white font-bold rounded-lg hover:bg-[#19a463] transition-colors text-[14px]"
              onClick={() => setShowFilters(false)}
            >
              Apply
            </button>
          </div>
        )}

        {/* Loading skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[1,2,3,4,5,6,7,8].map((n) => <SkeletonCard key={n} />)}
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">⚠️</div>
            <p className="text-lg font-semibold text-gray-600">
              Could not load services
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Please check your connection and try again
            </p>
          </div>
        )}

        {/* Results */}
        {!isLoading && !isError && (
          sorted.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {sorted.map((service, i) => (
                <MiniServiceCard key={service._id} service={service} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-2xl border border-[#e4e5e7]">
              <div className="text-[48px] mb-4">🔍</div>
              <p className="text-xl text-gray-400 font-medium">
                No services found
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {search
                  ? `No results for "${search}"`
                  : `No services in ${CATEGORY_LABELS[category]} yet`}
              </p>
              <button
                onClick={() => {
                  setMinPrice('')
                  setMaxPrice('')
                  setSearchParams({})
                }}
                className="mt-4 text-[#1DBF73] font-bold hover:underline"
              >
                View all services
              </button>
            </div>
          )
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;