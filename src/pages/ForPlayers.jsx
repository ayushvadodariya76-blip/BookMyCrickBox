import React, { useState } from 'react';
import { 
  Search, Calendar, Shield, MapPin, 
  Smartphone, Building, BookOpen, Globe, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function ForPlayers() {
  useDocumentMetadata(
    'For Players - Upcoming App Features',
    'Explore the upcoming features of the BookMyCricBox players app. Learn how you will find nearby turfs, check live slot availability, split bills, and scan QR gate passes.'
  );

  const [activeTab, setActiveTab] = useState(0);

  const screenshots = [
    {
      id: 0,
      title: "Discover Nearby Cricket Turfs",
      desc: "Find nearby verified cricket turfs, explore available venues, and browse your next match location through a clean and intuitive mobile experience.",
      image: "/screenshot-1.jpg"
    },
    {
      id: 1,
      title: "View Turf Details & Availability",
      desc: "Check turf information, pricing, available slots, facilities, photos, and booking details before continuing with your reservation.",
      image: "/screenshot-2.jpg"
    },
    {
      id: 2,
      title: "Manage Your Bookings",
      desc: "Track upcoming bookings, booking history, completed matches, cancelled bookings, and booking status directly from the BookMyCricBox mobile application.",
      image: "/screenshot-3.jpg"
    }
  ];

  const playerFeatures = [
    {
      icon: <Search className="w-6 h-6 text-emerald-500" />,
      title: "Find Nearby Turfs",
      desc: "Locate box cricket grounds near you based on live GPS tracking. Filter by distance, reviews, and dimensions inside the upcoming Android app."
    },
    {
      icon: <Building className="w-6 h-6 text-emerald-500" />,
      title: "Explore Available Grounds",
      desc: "Browse a catalog of verified turf box wickets in Surat, Ahmedabad, and Vadodara with pitch dimensions, ground rules, and available equipment."
    },
    {
      icon: <Calendar className="w-6 h-6 text-emerald-500" />,
      title: "Live Slot Availability",
      desc: "View real-time slot schedules. Avoid calling coordinators—check open green slots instantly on our live calendar tracker."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Secure Payments",
      desc: "All transactions are secured via Razorpay, UPI, cards, or net banking with instant digital receipts generated in your player app."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
      title: "Booking History",
      desc: "Keep a complete history of your team's matches, slot schedules, invoices, and payment receipts directly in your profile."
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-500" />,
      title: "Interactive Maps",
      desc: "Integrated navigation coordinates will direct you and your teammates straight to the turf's physical gates."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Multi-language Support",
      desc: "Operate the upcoming mobile application in your preferred regional language (English, Hindi, and Gujarati)."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
      title: "Easy Booking Experience",
      desc: "Enjoy a responsive, clean player interface designed for rapid navigation, quick booking checks, and simple QR check-ins."
    }
  ];

  return (
    <div className="space-y-24 py-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-455 border border-emerald-500/20">
          Android App Coming Soon
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Designed for Passionate Cricket Players
        </h1>
        <p className="text-base text-slate-655 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          BookMyCricBox is building a state-of-the-art mobile application that makes discovering box cricket fields, checking slot times, and splitting expenses with your team completely frictionless.
        </p>
      </section>

      {/* App Preview Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: List of Tabs/Screenshots Descriptions */}
          <div className="lg:col-span-6 text-left space-y-6">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Mobile App Preview
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Experience Our Actual Application Interface
            </h2>
            <p className="text-slate-655 dark:text-slate-400 text-sm leading-relaxed">
              Take a tour of our active player mobile application screenshots. Select a tab below to switch the view inside the smartphone frame.
            </p>
            
            <div className="flex flex-col space-y-4 pt-2">
              {screenshots.map((screen, index) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveTab(index)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-305 flex items-start space-x-4 cursor-pointer ${
                    activeTab === index
                      ? 'border-emerald-500 bg-emerald-500/5 shadow-md shadow-emerald-500/5'
                      : 'border-slate-100 dark:border-slate-800/60 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/35'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border mt-0.5 ${
                    activeTab === index
                      ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm shadow-emerald-500/10'
                      : 'bg-slate-100 dark:bg-slate-850 border-slate-200 dark:border-slate-805 text-slate-600 dark:text-slate-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className={`font-bold text-sm transition-colors ${
                      activeTab === index ? 'text-emerald-600 dark:text-emerald-450' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {screen.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed">
                      {screen.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Smartphone Container showing screenshot with transition */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            {/* Ambient background glow */}
            <div className="absolute w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl -z-10 animate-pulse-slow" />
            
            {/* Phone Frame shell */}
            <div className="relative w-[285px] h-[585px] rounded-[48px] border-[12px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden ring-4 ring-slate-800/40">
              
              {/* Inner Screen */}
              <div className="w-full h-full bg-slate-950 rounded-[36px] overflow-hidden relative">
                {/* Image loop with transition */}
                {screenshots.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                      activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-fill select-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots for mobile/visual feedback */}
            <div className="flex space-x-2 mt-6 z-20">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTab === index ? 'bg-emerald-500 w-6' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="bg-slate-100/50 dark:bg-slate-900/20 py-20 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Features Overview</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Upcoming Player App Features</h2>
            <p className="text-base text-slate-655 dark:text-slate-400">
              When launched on Android, our mobile application will support complete coordination, search, and payment tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {playerFeatures.map((feat, i) => (
              <Card key={i} className="flex flex-col text-left space-y-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{feat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Ready for a Better Way to Book?</h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            BookMyCricBox application is currently in final testing. We will be launching soon on the Google Play Store.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="font-bold flex items-center space-x-2">
                <span>Inquire About Early Access</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
