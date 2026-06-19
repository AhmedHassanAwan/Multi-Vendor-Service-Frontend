// // Pehle imports add karo — top mein
// import React, { useState } from 'react';
// import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { updateUser } from '../store/authSlice'
// import {useSetupProfileMutation,useUploadProfilePictureMutation,useUploadPortfolioMutation,} from '../store/api/providerApi'
// // ─────────────────────────────────────────
// // StepBar Component
// // ─────────────────────────────────────────
// const steps = [
//   { num: 1, label: 'Basic Info' },
//   { num: 2, label: 'Skills' },
//   { num: 3, label: 'Portfolio' },
// ];

// const StepBar = ({ currentStep }) => (
//   <div className="flex items-center justify-center mb-8 px-4">
//     {steps.map((step, idx) => {
//       const isCompleted = currentStep > step.num;
//       const isActive = currentStep === step.num;
//       return (
//         <React.Fragment key={step.num}>
//           <div className="flex flex-col items-center">
//             <div
//               className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all
//                 ${isCompleted || isActive
//                   ? 'bg-[#1a3c2e] border-[#1a3c2e] text-white'
//                   : 'bg-white border-gray-300 text-gray-400'}`}
//             >
//               {isCompleted ? '✓' : step.num}
//             </div>
//             <span className={`text-xs mt-1 font-semibold ${isActive || isCompleted ? 'text-[#1a3c2e]' : 'text-gray-400'}`}>
//               {step.label}
//             </span>
//           </div>
//           {idx < steps.length - 1 && (
//             <div className={`flex-1 h-[2px] mx-2 mb-4 transition-all ${currentStep > step.num ? 'bg-[#1a3c2e]' : 'bg-gray-200'}`} />
//           )}
//         </React.Fragment>
//       );
//     })}
//   </div>
// );

// // ─────────────────────────────────────────
// // Step 1 — Basic Info
// // ─────────────────────────────────────────
// const Step1_BasicInfo = ({ data, onChange, onNext, errors }) => {
//   const { profilePhoto, experience, bio } = data;
//   const photoInputRef = useRef(null);

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) onChange('profilePhoto', file);
//   };

//   return (
//     <>
//       <h2 className="text-2xl font-extrabold text-gray-800 mb-1">
//         Set Up Your Professional Profile
//       </h2>
//       <p className="text-gray-500 text-sm mb-6 leading-relaxed">
//         Introduce yourself to the ServiceHub marketplace. This information helps clients
//         understand your expertise and professional background.
//       </p>

//       {/* Profile Photo */}
//       <div className="flex items-start gap-5 mb-6">
//         <div className="relative flex-shrink-0">
//           <input type="file" accept="image/*" ref={photoInputRef} onChange={handlePhotoChange} className="hidden" />
//           <div
//             onClick={() => photoInputRef.current.click()}
//             className="w-[110px] h-[110px] rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#1DBF73] transition-colors overflow-hidden"
//           >
//             {profilePhoto ? (
//               <img src={URL.createObjectURL(profilePhoto)} alt="preview" className="w-full h-full object-cover" />
//             ) : (
//               <>
//                 <svg className="w-7 h-7 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
//                     d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <span className="text-[10px] text-gray-400 font-semibold tracking-widest">UPLOAD</span>
//               </>
//             )}
//           </div>
//           <button
//             type="button"
//             onClick={() => photoInputRef.current.click()}
//             className="absolute bottom-0 right-1 w-6 h-6 bg-[#1DBF73] rounded-full text-white text-lg flex items-center justify-center leading-none"
//           >+</button>
//         </div>
//         <div>
//           <p className="font-bold text-gray-800 text-sm mb-1">Profile Photo</p>
//           <p className="text-gray-500 text-xs leading-relaxed">
//             Must be a clear headshot of yourself. Professional backgrounds work best. Min 400×400px.
//           </p>
//         </div>
//       </div>

//       {/* Experience */}
//       <div className="mb-5">
//         <label className="block text-sm font-semibold text-gray-700 mb-1.5">Years of Experience</label>
//         <div className="relative">
//           <input
//             type="number" min="0" placeholder="e.g. 5" value={experience}
//             onChange={(e) => onChange('experience', e.target.value)}
//             className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-16 text-sm outline-none focus:border-[#1DBF73] transition-colors"
//           />
//           <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Years</span>
//         </div>
//         {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
//       </div>

//       {/* Bio */}
//       <div className="mb-6">
//         <label className="block text-sm font-semibold text-gray-700 mb-1.5">Professional Bio</label>
//         <textarea
//           rows={5}
//           placeholder="Describe your background, achievements, and what makes your service unique..."
//           value={bio}
//           onChange={(e) => onChange('bio', e.target.value.slice(0, 800))}
//           className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1DBF73] transition-colors resize-none"
//         />
//         <div className="flex justify-between mt-1">
//           <span className="text-xs text-gray-400">Min. 150 characters</span>
//           <span className="text-xs text-gray-400">{bio.length}/800</span>
//         </div>
//         {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between">
//         <button type="button" className="border border-gray-300 text-gray-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
//           Save Draft
//         </button>
//         <button type="button" onClick={onNext} className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
//           Next Step →
//         </button>
//       </div>
//     </>
//   );
// };

// // ─────────────────────────────────────────
// // Step 2 — Skills
// // ─────────────────────────────────────────
// const experienceLevels = [
//   { value: 'beginner', label: 'Beginner', sub: '0–1 years' },
//   { value: 'intermediate', label: 'Intermediate', sub: '1–3 years' },
//   { value: 'expert', label: 'Expert', sub: '3+ years' },
// ];

// const Step2_Skills = ({ data, onChange, onNext, onBack, errors }) => {
//   const { skills, skillInput, experienceLevel, startingPrice } = data;

//   const addSkill = () => {
//     const trimmed = skillInput.trim();
//     if (trimmed && !skills.includes(trimmed)) {
//       onChange('skills', [...skills, trimmed]);
//       onChange('skillInput', '');
//     }
//   };

//   const removeSkill = (skill) => onChange('skills', skills.filter((s) => s !== skill));

//   return (
//     <>
//       <h2 className="text-2xl font-extrabold text-gray-800 mb-1">Your Skills & Expertise</h2>
//       <p className="text-gray-500 text-sm mb-6 leading-relaxed">
//         Add skills that showcase your expertise to potential clients.
//       </p>

//       {/* Skills Input */}
//       <div className="mb-5">
//         <label className="block text-sm font-semibold text-gray-700 mb-1.5">Add Your Skills</label>
//         <div className="flex gap-2">
//           <input
//             type="text" placeholder="e.g. React.js, Logo Design..." value={skillInput}
//             onChange={(e) => onChange('skillInput', e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && addSkill()}
//             className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1DBF73] transition-colors"
//           />
//           <button type="button" onClick={addSkill} className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors">
//             Add Skill
//           </button>
//         </div>
//         {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
//         {skills.length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-3">
//             {skills.map((skill) => (
//               <span key={skill} className="bg-[#1DBF73] text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
//                 {skill}
//                 <button type="button" onClick={() => removeSkill(skill)} className="hover:opacity-70 text-base leading-none">×</button>
//               </span>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Experience Level */}
//       <div className="mb-5">
//         <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level</label>
//         <div className="flex flex-col gap-2">
//           {experienceLevels.map((lvl) => (
//             <div
//               key={lvl.value}
//               onClick={() => onChange('experienceLevel', lvl.value)}
//               className={`flex items-center justify-between border-2 rounded-lg px-4 py-3 cursor-pointer transition-all
//                 ${experienceLevel === lvl.value ? 'border-[#1DBF73] bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}
//             >
//               <div>
//                 <p className="text-sm font-semibold text-gray-800">{lvl.label}</p>
//                 <p className="text-xs text-gray-400">{lvl.sub}</p>
//               </div>
//               <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${experienceLevel === lvl.value ? 'border-[#1DBF73]' : 'border-gray-300'}`}>
//                 {experienceLevel === lvl.value && <div className="w-2 h-2 rounded-full bg-[#1DBF73]" />}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Starting Price */}
//       <div className="mb-6">
//         <label className="block text-sm font-semibold text-gray-700 mb-1.5">Starting Price (Rs.)</label>
//         <input
//           type="number" placeholder="e.g. 5000" value={startingPrice}
//           onChange={(e) => onChange('startingPrice', e.target.value)}
//           className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1DBF73] transition-colors"
//         />
//         {errors.startingPrice && <p className="text-red-500 text-xs mt-1">{errors.startingPrice}</p>}
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between">
//         <button type="button" onClick={onBack} className="border border-gray-300 text-gray-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
//           ← Back
//         </button>
//         <button type="button" onClick={onNext} className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
//           Next Step →
//         </button>
//       </div>
//     </>
//   );
// };

// // ─────────────────────────────────────────
// // Step 3 — Portfolio
// // ─────────────────────────────────────────
// const Step3_Portfolio = ({ data, onChange, onBack, onComplete }) => {
//   const { portfolioImages } = data;
//   const portfolioInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     const combined = [...portfolioImages, ...files].slice(0, 5);
//     onChange('portfolioImages', combined);
//   };

//   const removeImage = (idx) => onChange('portfolioImages', portfolioImages.filter((_, i) => i !== idx));

//   return (
//     <>
//       <h2 className="text-2xl font-extrabold text-gray-800 mb-1">Showcase Your Work</h2>
//       <p className="text-gray-500 text-sm mb-6 leading-relaxed">
//         Upload samples of your best work to attract more clients.
//       </p>

//       {/* Upload Area */}
//       <input type="file" accept="image/*" multiple ref={portfolioInputRef} onChange={handleFileChange} className="hidden" />
//       <div
//         onClick={() => portfolioImages.length < 5 && portfolioInputRef.current.click()}
//         className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#1DBF73] transition-colors mb-4"
//       >
//         <svg className="w-10 h-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
//             d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//         </svg>
//         <p className="text-gray-500 text-sm font-medium mb-1">Drag & drop your work samples here</p>
//         <p className="text-gray-400 text-xs mb-3">or</p>
//         <button
//           type="button"
//           onClick={(e) => { e.stopPropagation(); portfolioInputRef.current.click(); }}
//           className="border border-[#1DBF73] text-[#1DBF73] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
//         >
//           Browse Files
//         </button>
//         <p className="text-gray-400 text-xs mt-3">PNG, JPG up to 10MB · Max 5 files ({portfolioImages.length}/5 added)</p>
//       </div>

//       {/* Preview Grid */}
//       {portfolioImages.length > 0 && (
//         <div className="grid grid-cols-2 gap-3 mb-5">
//           {portfolioImages.map((file, idx) => (
//             <div key={idx} className="relative rounded-xl overflow-hidden h-[130px]">
//               <img src={URL.createObjectURL(file)} alt={`portfolio-${idx}`} className="w-full h-full object-cover" />
//               <button
//                 type="button" onClick={() => removeImage(idx)}
//                 className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-red-600"
//               >×</button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Tips */}
//       <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
//         <p className="text-sm font-bold text-blue-700 mb-2">💡 Portfolio Tips</p>
//         <ul className="text-xs text-blue-600 space-y-1 list-disc list-inside">
//           <li>Show your best and most recent work</li>
//           <li>Include variety of projects</li>
//           <li>High quality images perform better</li>
//         </ul>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between">
//         <button type="button" onClick={onBack} className="border border-gray-300 text-gray-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
//           ← Back
//         </button>
//          <button
//     type="button"
//     onClick={onComplete}
//     disabled={isLoading}
//     className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm disabled:opacity-60"
//   >
//     {isLoading ? 'Saving...' : 'Complete Setup ✓'}
//   </button>
//       </div>
//     </>
//   );
// };

// // ─────────────────────────────────────────
// // Main Page
// // ─────────────────────────────────────────
// const ProviderSetup = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // RTK Query hooks
//   const [setupProfile] = useSetupProfileMutation()
//   const [uploadProfilePicture] = useUploadProfilePictureMutation()
//   const [uploadPortfolio] = useUploadPortfolioMutation()

//   const [currentStep, setCurrentStep] = useState(1)
//   const [errors, setErrors] = useState({})
//   const [isLoading, setIsLoading] = useState(false)  // ← add karo
//   const [serverError, setServerError] = useState('')  // ← add karo

//   const [formData, setFormData] = useState({
//     profilePhoto: null,
//     experience: '',
//     bio: '',
//     skills: [],
//     skillInput: '',
//     experienceLevel: '',
//     startingPrice: '',
//     portfolioImages: [],
//   })


//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const validate = () => {
//     const newErrors = {}
//     if (currentStep === 1) {
//       if (!formData.experience || Number(formData.experience) < 1)
//         newErrors.experience = 'Please enter at least 1 year of experience.'
//       if (!formData.bio || formData.bio.length < 20)
//         newErrors.bio = `Bio must be at least 20 characters. (${formData.bio.length}/20)`
//     }
//     if (currentStep === 2) {
//       if (formData.skills.length === 0)
//         newErrors.skills = 'Please add at least one skill.'
//       if (!formData.startingPrice)
//         newErrors.startingPrice = 'Please enter your starting price.'
//     }
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//    const nextStep = () => {
//     if (validate()) {
//       setErrors({})
//       setCurrentStep((p) => p + 1)
//       window.scrollTo(0, 0)
//     }
//   }

//   const prevStep = () => {
//     setErrors({});
//     setCurrentStep((p) => p - 1);
//     window.scrollTo(0, 0);
//   };

// const handleComplete = async () => {
//     setIsLoading(true)
//     setServerError('')

//     try {
//       // API 1 — Profile setup
//       await setupProfile({
//         bio: formData.bio,
//         skills: formData.skills,
//         experience: `${formData.experience} years - ${formData.experienceLevel || 'intermediate'}`,
//       }).unwrap()

//       // API 2 — Profile picture (agar select ki hai)
//       if (formData.profilePhoto) {
//         const photoForm = new FormData()
//         photoForm.append('profilePicture', formData.profilePhoto)
//         await uploadProfilePicture(photoForm).unwrap()
//       }

//       // API 3 — Portfolio (agar images hain)
//       if (formData.portfolioImages.length > 0) {
//         const portfolioForm = new FormData()
//         formData.portfolioImages.forEach((file) => {
//           portfolioForm.append('portfolio', file)
//         })
//         await uploadPortfolio(portfolioForm).unwrap()
//       }

//       // Redux update
//       dispatch(updateUser({
//         isProfileComplete: true,
//         bio: formData.bio,
//         skills: formData.skills,
//       }))

//       // Dashboard pe jao
//       navigate('/dashboard/provider')

//     } catch (err) {
//       setServerError(
//         err?.data?.message || 'Something went wrong. Please try again.'
//       )
//     } finally {
//       setIsLoading(false)
//     }
//   }



//   return (
//     <div className="min-h-screen bg-[#F5F5F5] py-10 px-4">
//       <div className="max-w-[600px] mx-auto">
//         <StepBar currentStep={currentStep} />
//         <div className="bg-white rounded-2xl shadow-sm p-8">
//           {currentStep === 1 && (
//             <Step1_BasicInfo data={formData} onChange={handleChange} onNext={nextStep} errors={errors} />
//           )}
//           {currentStep === 2 && (
//             <Step2_Skills data={formData} onChange={handleChange} onNext={nextStep} onBack={prevStep} errors={errors} />
//           )}
//           {currentStep === 3 && (
//             <Step3_Portfolio data={formData} onChange={handleChange} onBack={prevStep} onComplete={handleComplete} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProviderSetup;


// 1. Saare imports top par clean kar diye hain
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/authSlice';
import {
  useSetupProfileMutation,
  useUploadProfilePictureMutation,
  useUploadPortfolioMutation,
} from '../store/api/providerApi';

// ─────────────────────────────────────────
// StepBar Component
// ─────────────────────────────────────────
const steps = [
  { num: 1, label: 'Basic Info' },
  { num: 2, label: 'Skills' },
  { num: 3, label: 'Portfolio' },
];

const StepBar = ({ currentStep }) => (
  <div className="flex items-center justify-center mb-8 px-4">
    {steps.map((step, idx) => {
      const isCompleted = currentStep > step.num;
      const isActive = currentStep === step.num;
      return (
        <React.Fragment key={step.num}>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all
                ${isCompleted || isActive
                  ? 'bg-[#1a3c2e] border-[#1a3c2e] text-white'
                  : 'bg-white border-gray-300 text-gray-400'}`}
            >
              {isCompleted ? '✓' : step.num}
            </div>
            <span className={`text-xs mt-1 font-semibold ${isActive || isCompleted ? 'text-[#1a3c2e]' : 'text-gray-400'}`}>
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div className={`flex-1 h-[2px] mx-2 mb-4 transition-all ${currentStep > step.num ? 'bg-[#1a3c2e]' : 'bg-gray-200'}`} />
          )}
        </React.Fragment>
      );
    })}
  </div>
);

// ─────────────────────────────────────────
// Step 1 — Basic Info
// ─────────────────────────────────────────
const Step1_BasicInfo = ({ data, onChange, onNext, errors }) => {
  const { profilePhoto, experience, bio } = data;
  const photoInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) onChange('profilePhoto', file);
  };

  return (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-1">
        Set Up Your Professional Profile
      </h2>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Introduce yourself to the ServiceHub marketplace. This information helps clients
        understand your expertise and professional background.
      </p>

      {/* Profile Photo */}
      <div className="flex items-start gap-5 mb-6">
        <div className="relative flex-shrink-0">
          <input type="file" accept="image/*" ref={photoInputRef} onChange={handlePhotoChange} className="hidden" />
          <div
            onClick={() => photoInputRef.current.click()}
            className="w-[110px] h-[110px] rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#1DBF73] transition-colors overflow-hidden"
          >
            {profilePhoto ? (
              <img src={URL.createObjectURL(profilePhoto)} alt="preview" className="w-full h-full object-cover" />
            ) : (
              <>
                <svg className="w-7 h-7 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[10px] text-gray-400 font-semibold tracking-widest">UPLOAD</span>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={() => photoInputRef.current.click()}
            className="absolute bottom-0 right-1 w-6 h-6 bg-[#1DBF73] rounded-full text-white text-lg flex items-center justify-center leading-none"
          >+</button>
        </div>
        <div>
          <p className="font-bold text-gray-800 text-sm mb-1">Profile Photo</p>
          <p className="text-gray-500 text-xs leading-relaxed">
            Must be a clear headshot of yourself. Professional backgrounds work best. Min 400×400px.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Years of Experience</label>
        <div className="relative">
          <input
            type="number" min="0" placeholder="e.g. 5" value={experience}
            onChange={(e) => onChange('experience', e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-16 text-sm outline-none focus:border-[#1DBF73] transition-colors"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Years</span>
        </div>
        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
      </div>

      {/* Bio */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Professional Bio</label>
        <textarea
          rows={5}
          placeholder="Describe your background, achievements, and what makes your service unique..."
          value={bio}
          onChange={(e) => onChange('bio', e.target.value.slice(0, 800))}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1DBF73] transition-colors resize-none"
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-400">Min. 20 characters</span>
          <span className="text-xs text-gray-400">{bio.length}/800</span>
        </div>
        {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button type="button" className="border border-gray-300 text-gray-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
          Save Draft
        </button>
        <button type="button" onClick={onNext} className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
          Next Step →
        </button>
      </div>
    </>
  );
};

// ─────────────────────────────────────────
// Step 2 — Skills
// ─────────────────────────────────────────
const experienceLevels = [
  { value: 'beginner', label: 'Beginner', sub: '0–1 years' },
  { value: 'intermediate', label: 'Intermediate', sub: '1–3 years' },
  { value: 'expert', label: 'Expert', sub: '3+ years' },
];

const Step2_Skills = ({ data, onChange, onNext, onBack, errors }) => {
  const { skills, skillInput, experienceLevel, startingPrice } = data;

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onChange('skills', [...skills, trimmed]);
      onChange('skillInput', '');
    }
  };

  const removeSkill = (skill) => onChange('skills', skills.filter((s) => s !== skill));

  return (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-1">Your Skills & Expertise</h2>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Add skills that showcase your expertise to potential clients.
      </p>

      {/* Skills Input */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Add Your Skills</label>
        <div className="flex gap-2">
          <input
            type="text" placeholder="e.g. React.js, Logo Design..." value={skillInput}
            onChange={(e) => onChange('skillInput', e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1DBF73] transition-colors"
          />
          <button type="button" onClick={addSkill} className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors">
            Add Skill
          </button>
        </div>
        {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill) => (
              <span key={skill} className="bg-[#1DBF73] text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                {skill}
                <button type="button" onClick={() => removeSkill(skill)} className="hover:opacity-70 text-base leading-none">×</button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Experience Level */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level</label>
        <div className="flex flex-col gap-2">
          {experienceLevels.map((lvl) => (
            <div
              key={lvl.value}
              onClick={() => onChange('experienceLevel', lvl.value)}
              className={`flex items-center justify-between border-2 rounded-lg px-4 py-3 cursor-pointer transition-all
                ${experienceLevel === lvl.value ? 'border-[#1DBF73] bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div>
                <p className="text-sm font-semibold text-gray-800">{lvl.label}</p>
                <p className="text-xs text-gray-400">{lvl.sub}</p>
              </div>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${experienceLevel === lvl.value ? 'border-[#1DBF73]' : 'border-gray-300'}`}>
                {experienceLevel === lvl.value && <div className="w-2 h-2 rounded-full bg-[#1DBF73]" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Starting Price */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Starting Price (Rs.)</label>
        <input
          type="number" placeholder="e.g. 5000" value={startingPrice}
          onChange={(e) => onChange('startingPrice', e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1DBF73] transition-colors"
        />
        {errors.startingPrice && <p className="text-red-500 text-xs mt-1">{errors.startingPrice}</p>}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="border border-gray-300 text-gray-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
          ← Back
        </button>
        <button type="button" onClick={onNext} className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
          Next Step →
        </button>
      </div>
    </>
  );
};

// ─────────────────────────────────────────
// Step 3 — Portfolio
// ─────────────────────────────────────────
// FIX: Yahan isLoading ko props mein receive kiya hai
const Step3_Portfolio = ({ data, onChange, onBack, onComplete, isLoading }) => {
  const { portfolioImages } = data;
  const portfolioInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const combined = [...portfolioImages, ...files].slice(0, 5);
    onChange('portfolioImages', combined);
  };

  const removeImage = (idx) => onChange('portfolioImages', portfolioImages.filter((_, i) => i !== idx));

  return (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-1">Showcase Your Work</h2>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Upload samples of your best work to attract more clients.
      </p>

      {/* Upload Area */}
      <input type="file" accept="image/*" multiple ref={portfolioInputRef} onChange={handleFileChange} className="hidden" />
      <div
        onClick={() => portfolioImages.length < 5 && portfolioInputRef.current.click()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#1DBF73] transition-colors mb-4"
      >
        <svg className="w-10 h-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-500 text-sm font-medium mb-1">Drag & drop your work samples here</p>
        <p className="text-gray-400 text-xs mb-3">or</p>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); portfolioInputRef.current.click(); }}
          className="border border-[#1DBF73] text-[#1DBF73] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
        >
          Browse Files
        </button>
        <p className="text-gray-400 text-xs mt-3">PNG, JPG up to 10MB · Max 5 files ({portfolioImages.length}/5 added)</p>
      </div>

      {/* Preview Grid */}
      {portfolioImages.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-5">
          {portfolioImages.map((file, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden h-[130px]">
              <img src={URL.createObjectURL(file)} alt={`portfolio-${idx}`} className="w-full h-full object-cover" />
              <button
                type="button" onClick={() => removeImage(idx)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-red-600"
              >×</button>
            </div>
          ))}
        </div>
      )}

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
        <p className="text-sm font-bold text-blue-700 mb-2">💡 Portfolio Tips</p>
        <ul className="text-xs text-blue-600 space-y-1 list-disc list-inside">
          <li>Show your best and most recent work</li>
          <li>Include variety of projects</li>
          <li>High quality images perform better</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="border border-gray-300 text-gray-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm">
          ← Back
        </button>
        <button
          type="button"
          onClick={onComplete}
          disabled={isLoading}
          className="bg-[#1DBF73] hover:bg-[#19a463] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm disabled:opacity-60"
        >
          {isLoading ? 'Saving...' : 'Complete Setup ✓'}
        </button>
      </div>
    </>
  );
};

// ─────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────
const ProviderSetup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // RTK Query hooks
  const [setupProfile] = useSetupProfileMutation();
  const [uploadProfilePicture] = useUploadProfilePictureMutation();
  const [uploadPortfolio] = useUploadPortfolioMutation();

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const [formData, setFormData] = useState({
    profilePhoto: null,
    experience: '',
    bio: '',
    skills: [],
    skillInput: '',
    experienceLevel: '',
    startingPrice: '',
    portfolioImages: [],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.experience || Number(formData.experience) < 1)
        newErrors.experience = 'Please enter at least 1 year of experience.';
      if (!formData.bio || formData.bio.length < 20)
        newErrors.bio = `Bio must be at least 20 characters. (${formData.bio.length}/20)`;
    }
    if (currentStep === 2) {
      if (formData.skills.length === 0)
        newErrors.skills = 'Please add at least one skill.';
      if (!formData.startingPrice)
        newErrors.startingPrice = 'Please enter your starting price.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validate()) {
      setErrors({});
      setCurrentStep((p) => p + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setErrors({});
    setCurrentStep((p) => p - 1);
    window.scrollTo(0, 0);
  };

  const handleComplete = async () => {
    setIsLoading(true);
    setServerError('');

    try {
      // API 1 — Profile setup
      await setupProfile({
        bio: formData.bio,
        skills: formData.skills,
        experience: `${formData.experience} years - ${formData.experienceLevel || 'intermediate'}`,
      }).unwrap();

      // API 2 — Profile picture (agar select ki hai)
      if (formData.profilePhoto) {
        const photoForm = new FormData();
        photoForm.append('profilePicture', formData.profilePhoto);
        await uploadProfilePicture(photoForm).unwrap();
      }

      // API 3 — Portfolio (agar images hain)
      if (formData.portfolioImages.length > 0) {
        const portfolioForm = new FormData();
        formData.portfolioImages.forEach((file) => {
          portfolioForm.append('portfolio', file);
        });
        await uploadPortfolio(portfolioForm).unwrap();
      }

      // Redux update
      dispatch(updateUser({
        isProfileComplete: true,
        bio: formData.bio,
        skills: formData.skills,
      }));

      // Dashboard pe jao
      navigate('/dashboard/provider');

    } catch (err) {
      setServerError(
        err?.data?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-10 px-4">
      <div className="max-w-[600px] mx-auto">
        <StepBar currentStep={currentStep} />
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Server error show karne ke liye alert block */}
          {serverError && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 mb-4 text-sm font-semibold">
              {serverError}
            </div>
          )}

          {currentStep === 1 && (
            <Step1_BasicInfo data={formData} onChange={handleChange} onNext={nextStep} errors={errors} />
          )}
          {currentStep === 2 && (
            <Step2_Skills data={formData} onChange={handleChange} onNext={nextStep} onBack={prevStep} errors={errors} />
          )}
          {currentStep === 3 && (
            // FIX: Yahan isLoading ko prop pass kiya hai
            <Step3_Portfolio data={formData} onChange={handleChange} onBack={prevStep} onComplete={handleComplete} isLoading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderSetup;