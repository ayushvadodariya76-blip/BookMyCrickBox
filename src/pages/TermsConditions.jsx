import React from 'react';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function TermsConditions() {
  useDocumentMetadata(
    'Terms & Conditions - BookMyCricBox Platform Rules',
    'Review the official terms of service, slot cancellation agreements, payment compliance, turf approval workflows, and liability terms for BookMyCricBox.'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Terms & Conditions</h1>
        <p className="text-xs text-slate-500 mt-2">Last Updated: June 28, 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-8">
        <p>
          Welcome to <strong>BookMyCricBox</strong>. These Terms & Conditions define the rules and regulations governing your usage of the BookMyCricBox player mobile app, turf owner admin portal, and official website.
        </p>

        <p>
          By creating an account, booking turf slots, or listing your sports facility, you agree to comply with these terms in full. If you do not agree, please discontinue use of the platform.
        </p>

        <hr className="border-slate-200 dark:border-slate-800 my-8" />

        {/* 1. Account Profile Information */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Profile Information & Security</h2>
          <p>
            Users must complete registration to request bookings or configure turf details.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You agree to provide accurate registration logs including your name, verified phone number, and business details if acting as a turf owner.</li>
            <li>You are responsible for keeping your Firebase Authentication credentials confidential.</li>
            <li>Accounts linked to fake numbers, fraudulent details, or incorrect addresses will be suspended immediately.</li>
          </ul>
        </section>

        {/* 2. Turf Approval Process */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Owner Listings & Turf Approval Process</h2>
          <p>
            Before a ground is listed for online slot search, it must undergo our verification checklist:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Owners submit coordinates, dimensions, lighting status, and standard pricing templates.</li>
            <li>Our administrative panel reviews the submission in the "Pending Approval" queue to crosscheck coordinates and pitch details.</li>
            <li>BookMyCricBox reserves the right to approve, reject, or request changes to any listing.</li>
          </ul>
        </section>

        {/* 3. Owner & Player Responsibilities */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Platform Responsibilities</h2>
          <p>
            To maintain a smooth booking ecosystem:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Owner Content & Facility Responsibility:</strong> Owners must keep pitches in playable conditions, ensure functional underlights, and provide listed amenities. They must update the scheduler immediately for offline cash walk-ins to prevent double booking.
            </li>
            <li>
              <strong>Player Responsibilities & Conduct:</strong> Players must follow ground rules, wear appropriate turf shoes (no spikes), and check in at the turf gate 15 minutes early by presenting their digital QR code ticket.
            </li>
          </ul>
        </section>

        {/* 4. Booking, Holds & Confirmation */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Slot Reservation & Payment Rules</h2>
          <p>
            Slot reservations require active validation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Hold Duration:</strong> When checking out, slots are held for up to 10 minutes to allow payment processing. If checkout fails, the hold is released.
            </li>
            <li>
              <strong>Booking Confirmation:</strong> A booking is officially confirmed and locked in Firestore only when the Razorpay gateway completes the transaction and generates a valid QR code ticket.
            </li>
          </ul>
        </section>

        {/* 5. Cancellation & Refunds */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Cancellation & Refund Guidelines</h2>
          <p>
            Cancellations are subject to structural rules:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cancellations made more than 24 hours prior to the slot hour qualify for a full refund.</li>
            <li>Cancellations requested less than 2 hours before the game are not eligible for a refund.</li>
            <li>In case of rain, storm, or underlight outages, turf owners can cancel slots from their dashboard, triggering an automatic full refund to the player's bank account.</li>
          </ul>
        </section>

        {/* 6. Fraud Prevention & Platform Misuse */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Fraud Prevention & Account Suspension</h2>
          <p>
            Strict measures are enforced to maintain platform integrity:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any user attempting to bypass Razorpay transactions, fabricate reviews, or upload false ground images will be suspended.</li>
            <li>Turf owners who double-book slots or refuse platform-confirmed players will face suspension from the platform.</li>
          </ul>
        </section>

        {/* 7. Liability & Policy Updates */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">7. Limitation of Liability & Updates</h2>
          <p>
            Legal boundaries for platform usage:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>BookMyCricBox acts solely as an online slot facilitator. We are not responsible for physical injuries, team disputes, or property damage occurring on turf grounds.</li>
            <li>We reserve the right to modify these Terms & Conditions. Users will be notified of changes via push alerts or email.</li>
          </ul>
        </section>

        {/* 8. Contact Desk */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">8. Contact Information</h2>
          <p>
            For questions or legal clarifications, contact our support team:
          </p>
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 font-medium">
            <p className="text-slate-900 dark:text-white">BookMyCricBox Legal Department</p>
            <p>Email: <a href="mailto:supportbookmycrickbox@gmail.com" className="text-emerald-500 hover:underline">supportbookmycrickbox@gmail.com</a></p>
            <p>Location: Surat, Gujarat, India</p>
          </div>
        </section>
      </div>
    </div>
  );
}
