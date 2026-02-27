import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule | George Prevalsky's Gym",
};

const schedule = [
  {
    day: "Monday / Wednesday",
    classes: [
      { time: "5:30 - 6:30 PM", name: "Kids Boxing" },
      { time: "6:30 - 8:00 PM", name: "Boxing / Jiu-Jitsu" },
      { time: "8:00 - 9:15 PM", name: "MMA" },
    ],
  },
  {
    day: "Tuesday / Thursday",
    classes: [
      { time: "11:30 AM - 1:00 PM", name: "Open Training" },
      { time: "5:30 - 6:30 PM", name: "Kids Classes" },
      { time: "6:30 - 8:00 PM", name: "Muay Thai" },
      { time: "8:00 - 9:30 PM", name: "Advanced Training" },
    ],
  },
  {
    day: "Friday",
    classes: [{ time: "6:30 - 8:00 PM", name: "Open Training" }],
  },
  {
    day: "Saturday",
    classes: [
      { time: "9:30 - 10:30 AM", name: "Morning Session" },
      { time: "11:30 AM - 2:30 PM", name: "Open Gym / Sparring" },
    ],
  },
  {
    day: "Sunday",
    classes: [{ time: "—", name: "Closed" }],
  },
];

export default function SchedulePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-center mb-4">
        Schedule
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Weekly class schedule at George Prevalsky&apos;s Gym
      </p>

      <div className="space-y-6">
        {schedule.map((block) => (
          <div
            key={block.day}
            className="bg-white/5 border border-white/10 overflow-hidden hover:border-red/30 transition-colors"
          >
            <div className="bg-red/20 px-6 py-3">
              <h2 className="text-lg font-bold uppercase text-red">
                {block.day}
              </h2>
            </div>
            <div className="divide-y divide-white/5">
              {block.classes.map((cls, i) => (
                <div
                  key={i}
                  className="px-6 py-4 flex justify-between items-center"
                >
                  <span className="text-gray-400 text-sm w-40 shrink-0">
                    {cls.time}
                  </span>
                  <span className="font-semibold uppercase tracking-wide">
                    {cls.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
