import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, CalendarRange, CheckCircle, Upload, IndianRupee, QrCode, 
  LayoutDashboard, Bell, ArrowRight, ShieldCheck, Clock, BookOpen, Smartphone
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function ForOwners() {
  useDocumentMetadata(
    'For Turf Owners - Partner Application Features',
    'Explore the BookMyCricBox Turf Owner app features. Learn about turf registration, slot management, dynamic pricing configurations, and automatic payouts.'
  );

  const onboardingSteps = [
    {
      step: "01",
      title: "Inquire & Pre-register",
      desc: "Reach out via our Contact page to express interest. Our team will record your ground's location coordinates and wicket specifications."
    },
    {
      step: "02",
      title: "Verification Checklist",
      desc: "Once the partner network launches, our verification desk conducts a quick review of location documents and light facilities."
    },
    {
      step: "03",
      title: "Activate Owner App",
      desc: "Download the Turf Owner partner app to configure your hourly slots, view analytics, and manage walk-in schedules automatically."
    }
  ];

  const ownerAppFeatures = [
    {
      icon: <Building className="w-6 h-6 text-emerald-500" />,
      title: "Register Your Turf",
      desc: "Download the upcoming partner application, fill out your cricket box specifications, set location coordinates, and list amenities."
    },
    {
      icon: <CalendarRange className="w-6 h-6 text-emerald-500" />,
      title: "Manage Slots",
      desc: "Configure working hours, define custom slot durations, and manually block slots for walk-in cash customers to prevent duplicate online bookings."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
      title: "Manage Bookings",
      desc: "Track schedule calendars, review upcoming team check-ins, view player profiles, and handle slot cancellation requests directly from the app."
    },
    {
      icon: <Upload className="w-6 h-6 text-emerald-500" />,
      title: "Upload Photos",
      desc: "Add multiple high-resolution photos of your box cricket pitches, bowling machine setups, and player waiting lobbies to attract players."
    },
    {
      icon: <IndianRupee className="w-6 h-6 text-emerald-500" />,
      title: "Configure Pricing",
      desc: "Set hourly rates dynamically, define special holiday surcharges, and adjust pricing automatically for day vs. late-night underlight matches."
    },
    {
      icon: <QrCode className="w-6 h-6 text-emerald-500" />,
      title: "Payment Setup",
      desc: "Connect your business UPI ID or bank account details to enable daily direct settlements from online slot bookings."
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-emerald-500" />,
      title: "Dashboard",
      desc: "Review daily visitor numbers, upcoming time slots, gross sales charts, and pending payout statistics on a consolidated dashboard."
    },
    {
      icon: <Bell className="w-6 h-6 text-emerald-500" />,
      title: "Notifications",
      desc: "Receive instant push alerts and SMS reminders for confirmed bookings, cancellation updates, payouts, and player queries."
    }
  ];

  const dashboardFeaturesList = [
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, title: "Manage Multiple Locations", desc: "Configure and track multiple box cricket turfs or nets setups under a single administrator account." },
    { icon: <IndianRupee className="w-5 h-5 text-emerald-500" />, title: "Underlight Surcharges", desc: "Apply hourly price rules automatically for late-night slots utilizing stadium lighting." },
    { icon: <Clock className="w-5 h-5 text-emerald-500" />, title: "Upcoming Booking Feeds", desc: "Keep track of daily slot schedules and anticipate player check-ins easily." },
    { icon: <BookOpen className="w-5 h-5 text-emerald-500" />, title: "Historical Archives", desc: "Search and filter historical match bookings, bank settlements, and past cancellations." },
    { icon: <Smartphone className="w-5 h-5 text-emerald-500" />, title: "Mobile Optimized Panel", desc: "Track slots, update walk-in blockers, and configure rates from your phone or tablet on the go." }
  ];

  return (
    <div className="space-y-24 py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/20">
          Partner App Coming Soon
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Powering Turf Management for Cricket Box Owners
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          List your box cricket facility, configure slots, manage schedules, and track bank payouts. The BookMyCricBox partner app is currently under final development.
        </p>
        <div className="flex justify-center pt-2">
          <Link to="/contact">
            <Button variant="primary" size="lg" className="font-bold flex items-center space-x-2">
              <span>Inquire About Partner App</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Owner App Core Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Application Features</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Turf Owner App Functionality</h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A comprehensive set of administrative tools designed specifically for box cricket ground operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ownerAppFeatures.map((feat, i) => (
            <Card key={i} className="flex flex-col text-left space-y-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feat.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{feat.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Onboarding Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Onboarding Guide</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Turf Approval & Launch Workflow</h2>
          <p className="text-base text-slate-655 dark:text-slate-400">
            Get listed on the player search feed in three simple steps when our application goes live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {onboardingSteps.map((step, idx) => (
            <Card key={idx} className="text-left p-8 space-y-6 relative border border-slate-200 dark:border-slate-800">
              <span className="text-4xl font-black text-emerald-500/20 absolute right-6 top-6">{step.step}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white pt-4">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Owner Dashboard Feature Showcase */}
      <section className="bg-slate-100/50 dark:bg-slate-900/20 py-20 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Admin Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Advanced Dashboard Features</h2>
            <p className="text-base text-slate-650 dark:text-slate-400">
              Additional platform capabilities designed to improve daily slot booking operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardFeaturesList.map((feat, i) => (
              <Card key={i} className="flex flex-col text-left space-y-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{feat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 bg-gradient-to-tr from-slate-950 to-slate-900 text-white rounded-3xl p-12 sm:p-16 border border-slate-800 shadow-2xl relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_50%)] pointer-events-none" />
          <h2 className="text-3xl font-extrabold text-white">Join BookMyCricBox Partner Network</h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Ready to list your ground? Contact our onboarding desk in Surat, Gujarat. We will help you understand timing slots, pricing parameters, and banking payouts for our upcoming launch.
          </p>
          <div className="flex justify-center pt-2">
            <Link to="/contact">
              <Button variant="primary" size="lg" className="font-bold flex items-center space-x-2">
                <span>Inquire About Partner App</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
