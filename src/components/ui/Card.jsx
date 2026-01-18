import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-slate-900/90 
        rounded-2xl 
        p-6 
        shadow-md 
        hover:shadow-xl 
        border border-transparent 
        hover:border-red-600 
        transition-all 
        duration-300 
        backdrop-blur-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
