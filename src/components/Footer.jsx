import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">

          {/* Logo & Company Description */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-900 shadow-md">
                <Calendar className="w-5 h-5 font-bold" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                BookMy<span className="text-emerald-500">CricBox</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400">
              India's upcoming online turf slot booking and management platform, currently under final development. Bridging the gap between passion for cricket and slot availability.
            </p>
            {/* Social Links (Mock) */}
            <div className="flex space-x-3">
              <a href="#instagram" aria-label="Instagram" className="p-2 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 rounded-xl transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/players" className="hover:text-emerald-400 transition-colors">For Players</Link>
              </li>
              <li>
                <Link to="/owners" className="hover:text-emerald-400 transition-colors">For Turf Owners</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4 text-xs">
              <li>
                <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-4 text-xs">
              <li className="text-slate-500">
                FAQ <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono ml-1">Coming Soon</span>
              </li>
              <li className="text-slate-500">
                Help Center <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono ml-1">Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Business</h3>
            <ul className="space-y-4 text-xs">
              <li className="text-slate-400 font-medium">
                Android App
                <div className="mt-1">
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded font-mono">Coming Soon</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[11px] text-slate-500 space-y-4 md:space-y-0">
          <p>© {currentYear} BookMyCricBox Platform. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
