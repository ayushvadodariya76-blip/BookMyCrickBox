import React from 'react';
import { Target, Eye, ShieldCheck, MapPin, Award, Heart } from 'lucide-react';
import Card from '../components/ui/Card';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function AboutUs() {
  useDocumentMetadata(
    'About Us - Our Story & Mission',
    'Learn how BookMyCricBox is digitizing sports infrastructure in India. Read about our journey, mission, vision, and future expansion plans.'
  );

  return (
    <div className="space-y-24 py-16">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/20">
          Our Journey
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Redefining Amateur Cricket in India
        </h1>
        <p className="text-base text-slate-655 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          BookMyCricBox was founded with a single focus: to make box cricket and turf bookings simple, accessible, and structured for players and owners alike.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Our Story</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              In late 2024, a group of amateur cricket players in Surat, Gujarat, found themselves calling multiple ground managers every weekend trying to book an hour slot. Some numbers were busy, some slots were double-booked, and pricing was inconsistent. We realized that while sports infrastructure in India was growing exponentially, the administrative layer remained entirely offline.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              This gave birth to **BookMyCricBox**. We started by onboarding local box cricket turfs in Surat. Our goal was to create a centralized, real-time slot booking engine that resolves scheduling overlap issues and automates payment splits. 
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Today, BookMyCricBox has developed into a comprehensive platform offering verified ground discovery, slot scheduling, and owner analytics tools, enabling turf administrators to maximize bookings and focus on customer service.
            </p>
          </div>

          {/* Graphical Representation of Timeline */}
          <div className="space-y-6 bg-slate-100/50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 text-left">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-4">Milestones & Timeline</h3>
            <div className="space-y-6 relative border-l border-emerald-500/20 pl-6 ml-2">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-50 dark:border-slate-900" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Late 2024 - Conceptualization</h4>
                <p className="text-xs text-slate-500">Identified booking double-overlaps and manual settlement struggles in Surat box cricket matches.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-50 dark:border-slate-900" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mid 2025 - Initial Onboarding</h4>
                <p className="text-xs text-slate-500">Onboarded 25+ box turfs and grounds across primary Surat areas like Adajan and Pal.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-50 dark:border-slate-900" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">2026 - Platform Expansion</h4>
                <p className="text-xs text-slate-500">Launched our unified web portal and finalized integration specifications with Razorpay and Play Store.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-slate-100/50 dark:bg-slate-900/20 py-20 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="text-left p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-655 dark:text-slate-400 leading-relaxed">
                To connect players with premium cricket box infrastructure through transparent scheduling, secure checkouts, and seamless social features like split payments. We strive to reduce ground coordination barriers so teams can spend more time playing.
              </p>
            </Card>

            <Card className="text-left p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-655 dark:text-slate-400 leading-relaxed">
                To become India\'s leading sports infrastructure booking network. We envision an ecosystem where scheduling, tournament organization, player profile logging, and turf administration reside under a single, unified, digital sports environment.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* Why Choose Us & Future Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Our Core Commitments</h2>
          <p className="text-base text-slate-655 dark:text-slate-400">
            We structure our operations around verified listings, reliable transactions, and local sports community values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Card hoverable={false} className="text-center p-8 space-y-4 border border-slate-200/60 dark:border-slate-800/60">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">100% Verification</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We check every ground listing ourselves to guarantee that the box measurements, lighting poles, and pitch quality match user expectations.
            </p>
          </Card>

          <Card hoverable={false} className="text-center p-8 space-y-4 border border-slate-200/60 dark:border-slate-800/60">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Amateur Cricket Focus</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our tools are tailored to amateur teams. Features like 'Split Bill' and detailed underlight filters are designed specifically for your weekend games.
            </p>
          </Card>

          <Card hoverable={false} className="text-center p-8 space-y-4 border border-slate-200/60 dark:border-slate-800/60">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Local Turf Partnerships</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We help local box administrators grow their businesses. By digitizing slot scheduling and walk-ins, we help improve turf asset utilization.
            </p>
          </Card>

        </div>
      </section>

      {/* Future Expansion Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">Roadmap 2026 - 2027</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Scaling Beyond Gujarat</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              After securing a high density of turf partnerships in Surat, Ahmedabad, and Vadodara, we plan to scale BookMyCricBox services to neighboring states. Our product roadmap also includes automated bracket tournaments, league tables coordination, and team-matching lobbies for players.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center lg:justify-end">
            <div className="flex space-x-3 bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Current Focus Cities</p>
                <p className="text-[10px] text-slate-500">Surat • Ahmedabad • Vadodara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
