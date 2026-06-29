import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Calendar, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import Button from './ui/Button';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'For Players', path: '/players' },
    { name: 'For Turf Owners', path: '/owners' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const allLinks = [
    ...navLinks,
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  return (
    <nav className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-all duration-200">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                BookMy<span className="text-emerald-500">CricBox</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
                Play, Book, Manage
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 relative
                  ${isActive 
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                  }
                `}
              >
                {link.name}
              </NavLink>
            ))}

            {/* More Dropdown for Legal pages */}
            <div 
              className="relative"
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                onMouseEnter={() => setIsMoreOpen(true)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/30 inline-flex items-center space-x-1 cursor-pointer"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMoreOpen && (
                <div className="absolute right-0 mt-1 w-48 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 p-2 shadow-xl z-50 flex flex-col space-y-1">
                  <Link
                    to="/privacy"
                    onClick={() => setIsMoreOpen(false)}
                    className="px-4 py-2 rounded-lg text-sm text-left text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800/45 hover:text-slate-955 dark:hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms"
                    onClick={() => setIsMoreOpen(false)}
                    className="px-4 py-2 rounded-lg text-sm text-left text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800/45 hover:text-slate-955 dark:hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/owners">
              <Button variant="primary" size="sm" className="rounded-xl font-semibold">
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-72 bg-white dark:bg-slate-900 border-l border-slate-100 dark:border-slate-800/60 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">
                BookMy<span className="text-emerald-500">CricBox</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {allLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    px-4 py-2.5 rounded-xl text-base font-medium transition-colors
                    ${isActive 
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20' 
                      : 'text-slate-600 dark:text-slate-355 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="mt-auto space-y-4">
            <Link to="/owners" onClick={() => setIsOpen(false)} className="block w-full">
              <Button variant="primary" className="w-full py-3 font-semibold rounded-xl">
                Explore Features
              </Button>
            </Link>
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-medium">
              © {new Date().getFullYear()} BookMyCricBox
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
