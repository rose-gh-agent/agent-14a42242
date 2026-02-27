"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-center mb-4">
        Contact Us
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Get in touch — we&apos;d love to hear from you
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold uppercase text-red mb-4">
              Location
            </h2>
            <p className="text-gray-300">612 Valley Ranch Pkwy S</p>
            <p className="text-gray-300">Irving, Texas 75063</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold uppercase text-red mb-4">Phone</h2>
            <p className="text-gray-300">
              Main:{" "}
              <a
                href="tel:972-977-5605"
                className="hover:text-red transition-colors"
              >
                972-977-5605
              </a>
            </p>
            <p className="text-gray-300">
              Billing/Membership:{" "}
              <a
                href="tel:888-277-4408"
                className="hover:text-red transition-colors"
              >
                888-277-4408
              </a>
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold uppercase text-red mb-4">Email</h2>
            <a
              href="mailto:georgeprevalsky@gmail.com"
              className="text-gray-300 hover:text-red transition-colors"
            >
              georgeprevalsky@gmail.com
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-6">
            <h2 className="text-xl font-bold uppercase text-red mb-4">Hours</h2>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <span className="text-gray-400">Mon / Wed</span>
              <span className="text-gray-300">5:30 - 9:15 PM</span>
              <span className="text-gray-400">Tue / Thu</span>
              <span className="text-gray-300">
                11:30 AM - 1 PM &amp; 5:30 - 9:30 PM
              </span>
              <span className="text-gray-400">Friday</span>
              <span className="text-gray-300">6:30 - 8:00 PM</span>
              <span className="text-gray-400">Saturday</span>
              <span className="text-gray-300">
                9:30 - 10:30 AM &amp; 11:30 AM - 2:30 PM
              </span>
              <span className="text-gray-400">Sunday</span>
              <span className="text-red">Closed</span>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.7!2d-96.9738!3d32.9096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e62e1c0f2b3a5%3A0x1234567890!2s612+Valley+Ranch+Pkwy+S%2C+Irving%2C+TX+75063!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="George Prevalsky's Gym Location"
            />
          </div>
        </div>

        {/* Contact form */}
        <div>
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="text-2xl font-bold uppercase mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <p className="text-red text-2xl font-bold uppercase mb-2">
                  Thank You!
                </p>
                <p className="text-gray-400">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-red transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red hover:bg-red-dark text-white font-bold uppercase py-3 tracking-wider transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
