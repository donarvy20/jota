
// This component is defined but not actively used in this version as icons are directly embedded in constants.tsx
// Kept for potential future use or refactoring.
import React from 'react';

interface IconProps {
  path: string; // SVG path data
  className?: string;
  viewBox?: string;
}

const Icon: React.FC<IconProps> = ({ path, className = "h-6 w-6", viewBox = "0 0 24 24" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox={viewBox} 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
};

export default Icon;
