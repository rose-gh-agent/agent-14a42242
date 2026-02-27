"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const membershipTiers = [
  { value: "adult-boxing-muaythai", label: "Adult Boxing / Muay Thai — $120/mo" },
  { value: "adult-mma", label: "Adult MMA — $150/mo" },
  { value: "kids", label: "Kids — $99/mo" },
  { value: "family", label: "Family — $200/mo" },
];

export default function MembershipsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-center mb-4">
        Membership Sign Up
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Join George Prevalsky&apos;s Boxing &amp; Muay Thai Boxing Club
      </p>

      {/* Pricing tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {membershipTiers.map((tier) => (
          <div
            key={tier.value}
            className="bg-white/5 border border-white/10 p-6 text-center hover:border-red/50 transition-colors"
          >
            <p className="font-bold uppercase">{tier.label}</p>
          </div>
        ))}
      </div>

      {/* Form */}
      {submitted ? (
        <div className="bg-white/5 border border-white/10 p-12 text-center">
          <p className="text-red text-2xl font-bold uppercase mb-2">
            Thank You!
          </p>
          <p className="text-gray-400">
            We&apos;ll be in touch to finalize your membership.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 p-8 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm uppercase text-gray-400 mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm uppercase text-gray-400 mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="memberEmail"
              className="block text-sm uppercase text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              id="memberEmail"
              name="email"
              type="email"
              required
              className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm uppercase text-gray-400 mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block text-sm uppercase text-gray-400 mb-2"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="membership"
              className="block text-sm uppercase text-gray-400 mb-2"
            >
              Membership Type
            </label>
            <select
              id="membership"
              name="membership"
              required
              className="w-full bg-dark border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
            >
              <option value="">Select a membership</option>
              {membershipTiers.map((tier) => (
                <option key={tier.value} value={tier.value}>
                  {tier.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="emergencyName"
                className="block text-sm uppercase text-gray-400 mb-2"
              >
                Emergency Contact Name
              </label>
              <input
                id="emergencyName"
                name="emergencyName"
                type="text"
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="emergencyPhone"
                className="block text-sm uppercase text-gray-400 mb-2"
              >
                Emergency Contact Phone
              </label>
              <input
                id="emergencyPhone"
                name="emergencyPhone"
                type="tel"
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="hearAbout"
              className="block text-sm uppercase text-gray-400 mb-2"
            >
              How Did You Hear About Us?
            </label>
            <input
              id="hearAbout"
              name="hearAbout"
              type="text"
              className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
            />
          </div>

          <div className="bg-red/10 border border-red/30 p-4 text-sm text-gray-300">
            Please remember to sign our{" "}
            <a
              href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBjQU-M_6fRkNOaoyvIyhsC6ZvRq5_5jKzYqHWYMrtyFnJ-mqNyl0eSqeo-dGOTqmU*"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red hover:underline font-semibold"
            >
              waiver
            </a>{" "}
            before your first session.
          </div>

          <button
            type="submit"
            className="w-full bg-red hover:bg-red-dark text-white font-bold uppercase py-4 tracking-wider transition-colors text-lg"
          >
            Submit Membership Application
          </button>
        </form>
      )}
    </div>
  );
}
