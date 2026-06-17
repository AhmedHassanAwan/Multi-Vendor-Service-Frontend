import React from 'react';

const InputField = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon, 
  rightIcon, 
  error,
  required = false
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-[14px] font-semibold text-[#404145]">
            {label}
          </label>
        </div>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da0a5] group-focus-within:text-[#1DBF73] transition-colors">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            w-full h-12 rounded-lg border text-[15px] transition-all duration-200 outline-none
            ${icon ? 'pl-10' : 'pl-4'}
            ${rightIcon ? 'pr-10' : 'pr-4'}
            ${error 
              ? 'border-red-500 focus:border-red-500 bg-red-50/10' 
              : 'border-[#dadbdd] focus:border-[#1DBF73] focus:ring-1 focus:ring-[#1DBF73]/20'
            }
            placeholder:text-[#9da0a5] text-[#404145] font-medium
          `}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#9da0a5] hover:text-[#404145] transition-colors">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <span className="text-[12px] text-red-500 mt-0.5">{error}</span>
      )}
    </div>
  );
};

export default InputField;
