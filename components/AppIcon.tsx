import React from 'react';

interface AppIconProps {
  className?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ears and Horns Base */}
      <path d="M20 35 Q10 25 20 15 Q35 20 40 28 L60 28 Q65 20 80 15 Q90 25 80 35 L85 50 Q95 60 85 75 L75 88 Q50 98 25 88 L15 75 Q5 60 15 50 Z" />
      
      {/* Snout Details (Subtle transparent overlay) */}
      <path d="M35 70 Q50 78 65 70" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.2" fill="none" />
      <circle cx="35" cy="50" r="5" fill="white" fillOpacity="0.2"/>
      <circle cx="65" cy="50" r="5" fill="white" fillOpacity="0.2"/>
    </svg>
  );
};

export default AppIcon;