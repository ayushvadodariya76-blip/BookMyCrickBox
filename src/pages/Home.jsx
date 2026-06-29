import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, Users, CheckCircle, Smartphone, Calendar, MapPin, 
  ArrowRight, Play, Star, Plus, Minus, HelpCircle, User, Activity,
  LayoutDashboard, Building, Globe, Zap, Clock
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Accordion from '../components/ui/Accordion';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function Home() {
  useDocumentMetadata(
    'Cricket Turf Platform (Coming Soon)',
    'India\'s upcoming cricket turf slot booking and management platform. Discover local grounds, view real-time slot availability, and learn more about our upcoming mobile app.'
  );

  const [activeStepTab, setActiveStepTab] = useState('players');
  


  const features = [
    {
      icon: <Search className="w-6 h-6 text-emerald-500" />,
      title: "Nearby Turf Discovery",
      desc: "Find premium cricket boxes and turfs near your current location with detailed amenities, reviews, and distance indicators."
    },
    {
      icon: <Calendar className="w-6 h-6 text-emerald-500" />,
      title: "Live Slot Availability",
      desc: "No more calling turf owners. View hourly slot schedules with real-time green/red booking indicators."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-500" />,
      title: "Split Bill Seamlessly",
      desc: "Book a slot and split the booking fee directly with your teammates inside the app. No manual ledger needed."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Secure Payment Gateway",
      desc: "Pay securely via Razorpay, UPI, cards, or net banking. Transactions are protected and refunds processed instantly."
    }
  ];


  const faqItems = [
    {
      title: "How will I be able to book a cricket turf slot once the app is launched?",
      content: "Once the mobile app is launched, you will be able to download the Android application, enter your location, select your preferred turf, choose an available slot, and confirm. Web booking features are not supported on this informational business site."
    },
    {
      title: "Will slot cancellations and refunds be supported?",
      content: "Yes, cancellation policies will depend on the individual turf owner. Most turfs will allow free cancellations up to 24 hours before the slot time, and the refund will be credited directly to the player's bank account."
    },
    {
      title: "How will the Split Bill feature work in the upcoming app?",
      content: "When checking out in the upcoming Android app, you can toggle the 'Split Bill' option, add your teammates' contact details or UPI IDs, and the app will generate split payment requests. Once paid, the booking is locked."
    },
    {
      title: "How will turf owners list their grounds?",
      content: "Turf owners can read about features on our 'For Turf Owners' page. Once the platform launches, listing will be managed directly within the upcoming Partner App. Currently, you can contact us via our Contact page for early registration inquiries."
    },
    {
      title: "Will there be a turf onboarding or registration fee for owners?",
      content: "Listing your turf on BookMyCricBox is free. We will only charge a small platform facilitation fee on successful bookings once the platform launches, aligning our interests with yours."
    },
    {
      title: "Will owners be able to manage multiple turfs under a single account?",
      content: "Yes. The upcoming Turf Owner partner app will allow you to register and manage multiple locations, individual boxes, different slot configurations, and view consolidated analytics."
    },
    {
      title: "How will booking payments be settled to turf owners?",
      content: "Payouts will be processed daily. All earnings from bookings completed on a given day will be credited to the registered bank account on the next business day."
    },
    {
      title: "How will the owner verification process work?",
      content: "After submitting details through the partner program, our onboarding desk will perform verification checks (typically under 24 hours) before the ground listing goes live on the search feeds."
    },
    {
      title: "Will offline and cash bookings be supported?",
      content: "Yes, turf administrators will be able to manually block slots for cash or walk-in customers on their admin calendar to prevent double-booking conflicts."
    },
    {
      title: "What will happen in case of rain or bad weather?",
      content: "If bad weather prevents playing, turf administrators can cancel the slot, which will automatically trigger refunds or rescheduling choices for the players."
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-left animate-fade-in-up">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-slow" />
                <span>Unified Sports Turf Network</span>
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
                Book Cricket Turfs. <br className="hidden sm:inline" />
                Manage Your <span className="text-emerald-500">Turf Business.</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl font-medium leading-relaxed">
                Connect teams, discover available slots, and coordinate matches. BookMyCricBox provides modern mobile apps for players and a robust partner panel for turf owners.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/players">
                  <Button variant="primary" size="lg" className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5" />
                    <span>For Cricket Players</span>
                  </Button>
                </Link>
                <Link to="/owners">
                  <Button variant="outline" size="lg" className="flex items-center space-x-2 bg-white/5 border-white/10 text-white hover:bg-white/15">
                    <LayoutDashboard className="w-5 h-5 text-emerald-400" />
                    <span>For Turf Owners</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Ambient Glow */}
              <div className="absolute w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl -z-10 animate-pulse-slow" />
              
              {/* Platform Collage Container */}
              <div className="relative w-full max-w-md aspect-[16/11] bg-slate-800/25 border border-slate-700/40 rounded-3xl p-5 backdrop-blur-md shadow-2xl hover:border-slate-600/50 transition-all duration-500">
                
                {/* Simulated Owner Dashboard interface */}
                <div className="w-full h-full flex flex-col justify-between space-y-4">
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">CricBox Partner Panel</span>
                    </div>
                    <span className="text-[9px] bg-slate-800 text-slate-350 px-2 py-0.5 rounded border border-slate-700">Surat Central</span>
                  </div>
                  
                  {/* Dashboard Stats */}
                  <div className="grid grid-cols-12 gap-3 flex-grow">
                    {/* Left: Slots management */}
                    <div className="col-span-7 space-y-2">
                      <p className="text-[9px] font-bold text-slate-450 uppercase text-left">Live Slot Tracker</p>
                      <div className="space-y-1.5 text-left text-[10px]">
                        <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                          <span className="font-semibold text-slate-300">06:00 PM</span>
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 font-bold uppercase scale-90">Booked</span>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                          <span className="font-semibold text-slate-300">07:00 PM</span>
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-455 border border-emerald-500/20 font-bold uppercase scale-90">Available</span>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                          <span className="font-semibold text-slate-300">08:00 PM</span>
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-455 border border-emerald-500/20 font-bold uppercase scale-90">Available</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Business Summary */}
                    <div className="col-span-5 space-y-2">
                      <p className="text-[9px] font-bold text-slate-450 uppercase text-left">Business Summary</p>
                      <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2 text-left">
                        <div>
                          <p className="text-[8px] text-slate-450">Today's Settlements</p>
                          <p className="text-sm font-black text-white">₹8,400</p>
                        </div>
                        <div className="border-t border-slate-800 pt-1.5">
                          <p className="text-[8px] text-slate-450">Slot Occupancy</p>
                          <p className="text-[10px] font-bold text-emerald-400">92% (High)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Element 1: Verified Badge */}
                <div className="absolute -top-3.5 -right-3.5 bg-slate-900/95 border border-slate-700/80 px-3 py-1.5 rounded-xl flex items-center space-x-1.5 shadow-xl backdrop-blur-sm transform hover:scale-105 transition-transform z-20">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[9px] font-bold text-white tracking-wide">Verified Ground</span>
                </div>

                {/* Floating Element 2: Payout Notification */}
                <div className="absolute bottom-4 left-4 bg-slate-900/95 border border-emerald-500/20 px-3.5 py-2.5 rounded-xl flex items-center space-x-2.5 shadow-2xl backdrop-blur-sm z-20 hover:border-emerald-500/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[8px] text-slate-450 uppercase font-bold tracking-wider">Active Booking</p>
                    <p className="text-[10px] font-bold text-slate-200 font-sans">Rahul K. booked Box 2</p>
                  </div>
                </div>

                {/* Floating Element 3: Mini Smartphone Preview */}
                <div className="absolute bottom-[-40px] right-[-52px] sm:right-[-76px] w-[110px] sm:w-[118px] aspect-[9/18.5] bg-slate-950 rounded-[20px] border-[4px] border-slate-800 p-1.5 shadow-2xl hidden sm:block z-10 hover:translate-y-[-6px] transition-transform duration-300 overflow-hidden">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] overflow-hidden p-2.5 flex flex-col justify-between text-[8px] text-slate-100 font-sans">
                    {/* Status bar */}
                    <div className="flex justify-between items-center border-b border-slate-800/80 pb-1.5">
                      <span className="font-bold text-[7px] text-slate-450">Surat, IND</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    {/* Mini card */}
                    <div className="space-y-1.5 my-auto text-left">
                      <div className="h-14 bg-gradient-to-tr from-emerald-500/20 to-emerald-400/5 rounded border border-emerald-500/25 flex items-center justify-center relative overflow-hidden">
                        <span className="text-[6px] font-bold uppercase tracking-widest text-emerald-450">CricBox Pitch</span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-black text-[9px] text-slate-100 truncate">CricBox VIP Arena</p>
                        <p className="text-[7px] text-slate-400">Pal, Surat • 4.8★</p>
                        <p className="text-[8px] font-extrabold text-emerald-400 mt-0.5">₹1,200/hr</p>
                      </div>
                    </div>
                    {/* Book Button */}
                    <div className="bg-emerald-500 text-slate-950 font-black text-center py-1.5 rounded text-[8px] shadow-md shadow-emerald-500/10 tracking-wide uppercase">
                      Book Now
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why BookMyCricBox Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Say Goodbye to Booking Hurdles
          </h2>
          <p className="text-base text-slate-650 dark:text-slate-400">
            Traditional methods cost time and effort. BookMyCricBox is built to offer the absolute finest online experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Struggle */}
          <div className="bg-slate-100 dark:bg-slate-900/40 rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/40 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">The Struggle</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Manual Coordination</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-lg font-bold shrink-0">✕</span>
                  <span>Dialing 4 different turf managers to check slot timings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-lg font-bold shrink-0">✕</span>
                  <span>Double booking conflicts resulting in last-minute cancellations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-lg font-bold shrink-0">✕</span>
                  <span>Chasing down friends via UPI links to split the match fee.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-lg font-bold shrink-0">✕</span>
                  <span>Zero visibility into ground quality, reviews, or amenities.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* BookMyCricBox Solution */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 text-left flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-6 relative">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">The Solution</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Seamless Digitize Platform</h3>
              <ul className="space-y-4 text-slate-700 dark:text-slate-350">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 text-lg font-bold shrink-0">✓</span>
                  <span>Instant slot lookup on our real-time interactive calendar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 text-lg font-bold shrink-0">✓</span>
                  <span>100% verified grounds, pricing, and underlight policies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 text-lg font-bold shrink-0">✓</span>
                  <span>Built-in group bills split directly at check out.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 text-lg font-bold shrink-0">✓</span>
                  <span>Automated notifications and WhatsApp booking receipts.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-100/50 dark:bg-slate-900/20 py-20 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Features Showcase</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Everything You Need To Play</h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              We design simple yet effective tools to streamline booking and managing sport infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="flex flex-col text-left space-y-4 border border-slate-200/60 dark:border-slate-800/60">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Timeline Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">How It Works</h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A frictionless flow optimized separately for teammates and box turf administrators.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center">
          <div className="bg-slate-200/60 dark:bg-slate-900/60 p-1.5 rounded-2xl flex border border-slate-200/30 dark:border-slate-800/30 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveStepTab('players')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeStepTab === 'players'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-655 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              For Cricket Players
            </button>
            <button
              onClick={() => setActiveStepTab('owners')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeStepTab === 'owners'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-655 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              For Turf Owners
            </button>
            <button
              onClick={() => setActiveStepTab('admins')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeStepTab === 'admins'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-655 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              For Administrators
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-6">
          {activeStepTab === 'players' ? (
            <>
              {/* Step 1 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Discover & Select</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Enter your locality in Surat or let GPS find turfs. Check turf reviews, pitch length, and equipment details.
                </p>
              </div>
              {/* Step 2 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Choose Live Slot</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Select your hourly time slot. View pricing details which update instantly for day vs underlight matches.
                </p>
              </div>
              {/* Step 3 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Play & Enjoy</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Check out securely using UPI or split bill. Access your digital gate-pass on the mobile app, and hit the pitch.
                </p>
              </div>
            </>
          ) : activeStepTab === 'owners' ? (
            <>
              {/* Owner Step 1 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">List Your Ground</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Register on the dashboard. Add details regarding box size, wicket type, lighting conditions, and standard hourly prices.
                </p>
              </div>
              {/* Owner Step 2 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Verify Details</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Our verification executives call to crosscheck ownership logs and listing data. Approved grounds are live within 24 hours.
                </p>
              </div>
              {/* Owner Step 3 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Earn and Automate</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Accept automated payments, view detailed visitor statistics, track sales charts, and receive daily bank settlements.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Admin Step 1 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Verify Turf Queue</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Check registering turf coordinates and boundary sizes on interactive map views, then approve them to search feeds.
                </p>
              </div>
              {/* Admin Step 2 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Monitor Razorpay</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Track automated transaction statuses, handle billing escrows, and process manual refund reviews if matches cancel.
                </p>
              </div>
              {/* Admin Step 3 */}
              <div className="space-y-4 bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/40">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center border border-emerald-500/20 text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Track Global Analytics</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Monitor active match requests, review player/owner support queries, and optimize Surat turf scheduling density.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Platform Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-455 uppercase tracking-wider">Platform Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">BookMyCricBox Highlights</h2>
          <p className="text-base text-slate-655 dark:text-slate-400">
            A comprehensive overview of features implemented in our player and owner mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Nearby Turf Discovery</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Find box cricket grounds near you based on live GPS tracking. Filter by distance and ratings.
            </p>
          </Card>

          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live Slot Availability</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              View real-time slot schedules. Avoid calling coordinators—book open green slots instantly.
            </p>
          </Card>

          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Real-Time Booking</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Secure your box wicket instantly. Confirm booking and receive digital gate-pass tickets automatically.
            </p>
          </Card>

          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Easy Ground Management</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Turf owners can add, edit, configure pricing templates, and manage multi-wicket setups in one app.
            </p>
          </Card>

          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Admin Queue & Dashboard</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Centralized platform queue to verify registered turf coordinates, monitor Razorpay payouts, and review slot transactions.
            </p>
          </Card>

          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Multi-Language Support</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Operate the application in your preferred regional language (English, Hindi, and Gujarati).
            </p>
          </Card>

          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Interactive Maps</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Integrated navigation coordinates direct team members straight to the pitch gates.
            </p>
          </Card>

          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fast Booking Experience</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              A responsive mobile application designed for quick loading times and one-tap checkout.
            </p>
          </Card>

          <Card className="text-left p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Secure Payments</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              All transactions are secured via Razorpay, UPI, cards, or net banking with automated payouts.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="text-center space-y-4">
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex justify-center items-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Support Helpdesk</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Have questions about booking turfs, refunds, or dashboard registration? Find quick answers here.
          </p>
        </div>

        <Accordion items={faqItems} className="max-w-3xl mx-auto" />
      </section>

      {/* Download CTA Section (Coming Soon) */}
      <section id="download" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 to-emerald-950 text-white rounded-3xl p-12 sm:p-20 relative overflow-hidden border border-emerald-500/20 text-center space-y-8 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
              <span>Mobile App Launch</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
              Play Box Cricket Anytime. Anywhere.
            </h2>
            <p className="text-slate-350 text-base max-w-2xl mx-auto leading-relaxed">
              We are working diligently to launch our official mobile application on the Google Play Store. Stay tuned to unlock exclusive slot discounts and easy split bill features.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-slate-950 border border-slate-800 rounded-2xl px-6 py-3 shadow-md">
                <Smartphone className="w-6 h-6 text-emerald-400" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">GET IT ON</p>
                  <p className="text-sm font-extrabold text-white">Google Play Store</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-3">
                <div className="text-left">
                  <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest">STATUS</p>
                  <p className="text-sm font-extrabold text-slate-300">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
