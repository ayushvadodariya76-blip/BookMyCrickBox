import React from 'react';
import { Mail } from 'lucide-react';
import Card from '../components/ui/Card';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function ContactUs() {
  useDocumentMetadata(
    'Contact Us - Support & Inquiries',
    'Reach out to BookMyCricBox support. Contact us via email or follow us on Instagram for upcoming launch updates.'
  );

  return (
    <div className="space-y-24 py-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/20">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          How Can We Help You?
        </h1>
        <p className="text-base text-slate-655 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Have questions about our upcoming platform, turf registration process, or partner features? Contact our team.
        </p>
      </section>

      {/* Centered Contact Information Card */}
      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border border-slate-200 dark:border-slate-800 p-8 md:p-10 bg-white dark:bg-slate-900/60 shadow-xl space-y-8 text-center">
          
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Contact Information</h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
            We look forward to partnering with sport center managers and assisting cricket teams. Drop us an email or connect on Instagram, and our team will reply as soon as possible.
          </p>

          <div className="space-y-6 pt-4 flex flex-col items-center">
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Support Email</p>
                <a href="mailto:supportbookmycrickbox@gmail.com" className="text-base font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors block mt-1">
                  supportbookmycrickbox@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Social Links */}
          <div className="space-y-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connect on Socials</p>
            <div className="flex justify-center">
              <a href="#instagram" aria-label="Instagram" className="p-3.5 bg-slate-100 hover:bg-emerald-500 hover:text-slate-950 dark:bg-slate-950 rounded-xl transition-all duration-200 text-slate-600 dark:text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </Card>
      </section>

    </div>
  );
}
