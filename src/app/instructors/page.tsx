import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructors | George Prevalsky's Gym",
};

const instructors = [
  {
    name: "George Prevalsky",
    title: "Head Instructor",
    bio: "With over 30 years of experience, George is a USA Boxing certified coach and I.A.M.T.F. certified instructor. He has held the title of Ajahn Muay Thai since 1998, recognized for his mastery and dedication to the art. George has trained numerous amateur and professional fighters throughout the DFW area.",
    credentials: [
      "30+ years experience",
      "USA Boxing Coach",
      "I.A.M.T.F. Certified",
      "Ajahn Muay Thai since 1998",
    ],
  },
  {
    name: "Kevin Kildea",
    title: "USA Boxing Instructor",
    bio: "Kevin brings over 30 years of experience across multiple martial arts disciplines. A dedicated USA Boxing instructor, Kevin is also an accomplished marathon runner who brings the same endurance mindset to his coaching approach.",
    credentials: [
      "30+ years experience",
      "USA Boxing Instructor",
      "Multiple disciplines",
      "Marathon runner",
    ],
  },
  {
    name: "Victor Ling",
    title: "Assistant Muay Thai Instructor",
    bio: "Victor serves as the Assistant Muay Thai Instructor, bringing technical precision and passion for the art of eight limbs to every class he teaches.",
    credentials: ["Muay Thai specialist", "Technical instruction"],
  },
  {
    name: "Yousef Alirezaei",
    title: "BJJ Instructor",
    bio: "A 3rd degree black belt with over 30 years of experience, Yousef has amassed an incredible 250+ gold medals in competition. His deep expertise in Brazilian Jiu-Jitsu and grappling makes him one of the most decorated instructors in the region.",
    credentials: [
      "3rd degree black belt",
      "250+ gold medals",
      "30+ years experience",
    ],
  },
];

export default function InstructorsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-center mb-4">
        Instructors
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Learn from the best in the Dallas-Fort Worth area
      </p>

      <div className="space-y-8">
        {instructors.map((instructor) => (
          <div
            key={instructor.name}
            className="bg-white/5 border border-white/10 p-8 hover:border-red/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold uppercase">
                  {instructor.name}
                </h2>
                <p className="text-red font-semibold uppercase text-sm">
                  {instructor.title}
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {instructor.bio}
            </p>
            <div className="flex flex-wrap gap-2">
              {instructor.credentials.map((cred) => (
                <span
                  key={cred}
                  className="text-xs uppercase bg-red/20 text-red px-3 py-1 border border-red/30"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
