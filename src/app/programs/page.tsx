import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | George Prevalsky's Gym",
};

const programs = [
  {
    name: "Boxing",
    description:
      "Our boxing program offers 11 workouts per week with 90-minute sessions. From fundamentals to competition preparation, we cover all levels.",
    levels: ["Beginner I & II", "Intermediate", "Advanced"],
    details: "11 workouts/week • 90 min sessions",
  },
  {
    name: "Muay Thai",
    description:
      "Train in the art of eight limbs with 9 workouts per week. Our Muay Thai program develops striking skills using punches, kicks, elbows, and knees.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    details: "9 workouts/week • 90 min sessions",
  },
  {
    name: "Brazilian Jiu-Jitsu",
    description:
      "Learn grappling, ground fighting, and self-defense techniques. BJJ is one of the most effective martial arts for real-world self-defense situations.",
    levels: ["All Levels"],
    details: "Grappling • Ground Fighting • Self-Defense",
  },
  {
    name: "MMA",
    description:
      "Mixed Martial Arts combines striking and grappling disciplines. Train to become a well-rounded fighter in our comprehensive MMA program.",
    levels: ["All Levels"],
    details: "Full Contact • Striking & Grappling",
  },
];

const kidsPrograms = [
  {
    name: "Kids Boxing",
    description:
      "Develop discipline, coordination, and confidence through boxing fundamentals designed for young athletes ages 8-12.",
  },
  {
    name: "Kids Jiu-Jitsu",
    description:
      "Ground-based martial art teaching kids self-defense, body awareness, and problem-solving skills.",
  },
  {
    name: "Kids Wrestling",
    description:
      "Build strength, agility, and competitive spirit through wrestling fundamentals.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-center mb-4">
        Programs
      </h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        World-class instruction in multiple disciplines for all skill levels
      </p>

      {/* Adult programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {programs.map((program) => (
          <div
            key={program.name}
            className="bg-white/5 border border-white/10 p-8 hover:border-red/50 transition-all group"
          >
            <h2 className="text-2xl font-bold uppercase text-red mb-2 group-hover:text-white transition-colors">
              {program.name}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{program.details}</p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {program.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {program.levels.map((level) => (
                <span
                  key={level}
                  className="text-xs uppercase bg-red/20 text-red px-3 py-1 border border-red/30"
                >
                  {level}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Kids programs */}
      <h2 className="text-3xl font-bold uppercase text-center mb-8">
        Kids Classes <span className="text-red">(Ages 8-12)</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kidsPrograms.map((program) => (
          <div
            key={program.name}
            className="bg-white/5 border border-white/10 p-6 hover:border-red/50 transition-all"
          >
            <h3 className="text-xl font-bold uppercase text-red mb-3">
              {program.name}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
