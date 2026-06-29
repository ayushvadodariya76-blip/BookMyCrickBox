import React from 'react';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function PrivacyPolicy() {
  useDocumentMetadata(
    'Privacy Policy - BookMyCricBox Platform Data & Security',
    'Review the official Privacy Policy of BookMyCricBox. Understand how we collect, secure, and manage your account, location, payment, and storage data.'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-500 mt-2">Last Updated: June 28, 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-8">
        <p>
          At <strong>BookMyCricBox</strong>, we take the privacy of our players, turf owners, and platform administrators seriously. This policy documents the exact types of data we collect, how it is processed using cloud databases, and how we protect your personal and business records.
        </p>

        <hr className="border-slate-200 dark:border-slate-800 my-8" />

        {/* 1. Authentication & Profile Creation */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Account Registration & Authentication</h2>
          <p>
            To use BookMyCricBox, users must register and log in to a personalized account.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Firebase Authentication:</strong> We utilize Google Firebase Auth to securely manage user accounts, authenticate logins, and handle password resets.
            </li>
            <li>
              <strong>User Profile Data (Players):</strong> We collect your full name, email address, phone number, and a link to your profile avatar.
            </li>
            <li>
              <strong>Owner Profile Data (Turf Owners):</strong> We collect business contact details, owner name, business registration name, phone number, email address, and official office coordinates.
            </li>
          </ul>
        </section>

        {/* 2. Turf & Booking Records */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Turf and Booking Information</h2>
          <p>
            Our core service maps turf availability and matches slot reservations. To do so, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Turf Information:</strong> Wicket types, boundary dimensions, pricing guidelines, and amenities (e.g., parking, underlights, water).
            </li>
            <li>
              <strong>Booking Information & History:</strong> Ground IDs, timestamps, slot hours (day vs. underlights), checkout logs, player invitations (for split billing), and a complete log of your historical reservations.
            </li>
          </ul>
        </section>

        {/* 3. Location, Maps & GPS Usage */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. GPS Location & Interactive Maps</h2>
          <p>
            To make nearby turf discovery quick and intuitive, we request location access:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Location Permission:</strong> The mobile application requests device-level GPS coordinates to track nearby box cricket venues.
            </li>
            <li>
              <strong>Maps Integration:</strong> We use the Google Maps SDK, Google Places API (for address autocomplete), and Google Directions API to route teammates straight to the turf's physical wickets.
            </li>
          </ul>
        </section>

        {/* 4. Storage & Media Uploads */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Uploaded Images & Storage</h2>
          <p>
            We use secure cloud storage to manage platform visual content:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Supabase Storage:</strong> We host and serve owner-uploaded turf photos and player profile avatars in secure Supabase Buckets.
            </li>
            <li>
              <strong>Firestore Storage:</strong> All schema collections, ratings, user reviews, match requests, and notifications are structured and queried using Firebase Firestore databases.
            </li>
          </ul>
        </section>

        {/* 5. Payments & Razorpay Gateway */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Payment Information & Gateway</h2>
          <p>
            All checkout payments are processed through verified pathways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Razorpay Integration:</strong> Slot rentals and platform convenience fees are processed via Razorpay. We save transaction IDs, payer UIDs, amounts, and settlement statuses in our payment collection. We do not store raw card numbers, net banking passwords, or UPI PINs.
            </li>
          </ul>
        </section>

        {/* 6. Notifications & Third-Party Integrations */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Notifications & Communications</h2>
          <p>
            To keep you updated on active slot status:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Push Alerts & Reminders:</strong> Firebase Cloud Messaging and SMS gateways dispatch WhatsApp receipts, confirmation codes, split payment request notifications, and weather-related cancellations.
            </li>
          </ul>
        </section>

        {/* 7. Security Rules & Data Rights */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">7. Data Security & User Rights</h2>
          <p>
            We enforce robust data security practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Database Security:</strong> We deploy strict Firestore Security Rules that limit access to authenticated profiles. Only turf owners can adjust slot statuses, and only admins can verify ground details.
            </li>
            <li>
              <strong>User Rights:</strong> You can access your profile information, edit listings, and retrieve past booking receipts at any time.
            </li>
            <li>
              <strong>Account Deletion:</strong> You can initiate a complete profile deletion from the settings menu. This action permanently clears your Firebase Auth UID and related profile fields from our databases.
            </li>
          </ul>
        </section>

        {/* 8. Contact Details */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">8. Contact Details</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data updates, please contact us:
          </p>
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 font-medium">
            <p className="text-slate-900 dark:text-white">BookMyCricBox Platform Support Desk</p>
            <p>Email: <a href="mailto:supportbookmycrickbox@gmail.com" className="text-emerald-500 hover:underline">supportbookmycrickbox@gmail.com</a></p>
            <p>Location: Surat, Gujarat, India</p>
          </div>
        </section>
      </div>
    </div>
  );
}
