import React from 'react';
import darkLogoUrl from '../assets/LumiSTEM_logo_dark.svg';
import lightLogoUrl from '../assets/LumiSTEM_logo_light.svg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'dark' }) => {
  const heightClass = size === 'xl' ? 'h-16 sm:h-18' : size === 'sm' ? 'h-7' : size === 'lg' ? 'h-11' : 'h-8 sm:h-9';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={variant === 'light' ? lightLogoUrl : darkLogoUrl}
        alt="LumiSTEM"
        className={`${heightClass} w-auto object-contain transition-transform duration-200 hover:scale-105`}
      />
    </div>
  );
};
