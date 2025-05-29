
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, className, icon }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 mb-6 border border-slate-200 ${className}`}>
      {title && (
        <h2 className="text-2xl font-semibold text-sky-700 mb-4 flex items-center">
          {icon && <span className="mr-2 text-sky-600">{icon}</span>}
          {title}
        </h2>
      )}
      <div className="text-slate-700 space-y-3 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Card;
