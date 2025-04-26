import React from 'react';

export function Spinner({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary ${className}`} 
      {...props}
    />
  );
}