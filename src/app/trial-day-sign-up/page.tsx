import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Trial Day | George Prevalsky's Gym",
};

const trialClasses = [
  { name: "Boxing", schedule: "Mon/Wed 6:30 - 8:00 PM, Sat 1:00 - 2:30 PM" },
  { name: "Muay Thai", schedule: "Tue/Thu 6:30 - 8:00 PM" },
  { name: "MMA", schedule: "Mon/Wed 8:00 - 9:15 PM" },
  { name: "Jiu-Jitsu", schedule: "Mon - Thu 6:30 - 8:00 PM" },
  { name: "Kids Boxing", schedule: "Mon/Wed 5:30 - 6:30 PM" },
];

export default function TrialDayPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-center mb-4">
        Trial Day Sign Up
      </h1>
      <p className="text-center text-2xl text-red font-bold uppercase mb-8">
        Your First Class is FREE!
      </p>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Come try a class and experience world-class martial arts training.
        No experience necessary — all skill levels welcome.
      </p>

      {/* Available trial classes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          Available Trial Classes
        </h2>
        <div className="space-y-4">
          {trialClasses.map((cls) => (
            <div
              key={cls.name}
              className="bg-white/5 border border-white/10 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:border-red/50 transition-colors"
            >
              <span className="font-bold uppercase text-lg">{cls.name}</span>
              <span className="text-gray-400 text-sm mt-1 sm:mt-0">
                {cls.schedule}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Waiver */}
      <div className="bg-red/10 border border-red/30 p-8 text-center">
        <h2 className="text-2xl font-bold uppercase mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-6">
          Please sign our waiver before your first class. You can fill it out
          online ahead of time to save time at the gym.
        </p>
        <a
          href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBjQU-M_6fRkNOaoyvIyhsC6ZvRq5_5jKzYqHWYMrtyFnJ-mqNyl0eSqeo-dGOTqmU*"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red hover:bg-red-dark text-white font-bold uppercase px-8 py-4 text-lg tracking-wider transition-colors"
        >
          Sign Waiver Online
        </a>
        <p className="text-gray-500 text-sm mt-4">
          Questions? Call us at{" "}
          <a href="tel:972-977-5605" className="text-red hover:underline">
            972-977-5605
          </a>{" "}
          or{" "}
          <Link href="/contact-us" className="text-red hover:underline">
            contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
