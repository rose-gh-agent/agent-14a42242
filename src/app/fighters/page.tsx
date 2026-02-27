import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fighters | George Prevalsky's Gym",
};

export default function FightersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-center mb-4">
        Fighters
      </h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        George trains some of the top amateur and professional strikers in the
        Dallas-Fort Worth area
      </p>

      {/* Featured Fighter */}
      <div className="bg-white/5 border border-white/10 p-8 mb-8 hover:border-red/50 transition-colors">
        <h2 className="text-2xl font-bold uppercase text-red mb-2">
          Ina Prevalsky
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          A standout fighter and competitor, Ina Prevalsky has achieved remarkable
          success at the highest levels of junior competition. Her dedication and
          skill have earned her an impressive collection of titles.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs uppercase bg-red/20 text-red px-3 py-1 border border-red/30">
            6x State Champion — Taekwondo
          </span>
          <span className="text-xs uppercase bg-red/20 text-red px-3 py-1 border border-red/30">
            5x US Junior Olympic Champion — Taekwondo
          </span>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-red/10 border border-red/30 p-8 text-center">
        <h2 className="text-2xl font-bold uppercase mb-4">
          Train Like a Champion
        </h2>
        <p className="text-gray-300 mb-4">
          Whether you&apos;re looking to compete or simply want to train at a
          competitive level, our gym provides the coaching and environment to
          bring out your best.
        </p>
        <p className="text-gray-400 text-sm">
          Contact us to learn more about our competitive training programs.
        </p>
      </div>
    </div>
  );
}
