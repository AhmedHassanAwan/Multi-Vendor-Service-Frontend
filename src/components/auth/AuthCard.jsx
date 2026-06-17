import React from 'react';

const AuthCard = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[420px] transition-all duration-300">
      {children}
    </div>
  );
};

export default AuthCard;
