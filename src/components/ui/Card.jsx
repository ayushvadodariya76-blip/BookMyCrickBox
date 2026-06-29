import React from 'react';

export default function Card({
  children,
  className = '',
  glass = false,
  hoverable = true,
  ...props
}) {
  return (
    <div
      className={`
        rounded-2xl overflow-hidden p-6
        ${glass 
          ? 'bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/40 shadow-sm' 
          : 'bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 shadow-sm'
        }
        ${hoverable ? 'hover:shadow-md hover:-translate-y-0.5 transition-all duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
