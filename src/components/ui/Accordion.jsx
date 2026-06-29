import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-emerald-500' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/40">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
