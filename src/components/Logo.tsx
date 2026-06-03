import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      src="/logo-small.svg"
      alt="Connect Grid Logo"
      className={`h-20 md:h-22 lg:h-24 w-auto ${className || ''}`}
    />
  );
};