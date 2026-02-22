
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'auto' }) => {
  // Logic to determine brightness filter
  // light variant: white logo
  // dark variant: black logo
  const filterClass = variant === 'light' 
    ? 'brightness-[100] invert-0' 
    : variant === 'dark' 
      ? 'brightness-0' 
      : 'dark:brightness-100 brightness-0';

  return (
    <div className={`flex items-center justify-center transition-all duration-1000 ${className}`}>
      <img 
        src="https://lh3.googleusercontent.com/d/1helNCc_XmgXuNsn7GbgkAISWJbswter1" 
        alt="SCULPT" 
        className={`h-full w-auto object-contain pointer-events-none select-none transition-all duration-700 ${filterClass}`}
        loading="eager"
      />
    </div>
  );
};

export default Logo;
