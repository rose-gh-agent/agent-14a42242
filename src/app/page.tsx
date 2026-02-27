import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-dark z-0" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4">
            George Prevalsky Gym
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Boxing, Muay Thai, Brazilian Jiu-Jitsu and MMA
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-red hover:bg-red-dark text-white font-bold uppercase px-8 py-4 text-lg tracking-wider transition-colors"
          >
            See Schedule
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-12">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 border border-white/10 p-8 hover:border-red/50 transition-colors">
            <h3 className="text-2xl font-bold uppercase text-red mb-4">
              Who We Are
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Established in 1996, George Prevalsky&apos;s Boxing &amp; Muay Thai Boxing Club
              has been a cornerstone of martial arts training in the Dallas-Fort Worth area.
              With decades of experience, our instructors provide world-class training for
              fighters of all levels.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 hover:border-red/50 transition-colors">
            <h3 className="text-2xl font-bold uppercase text-red mb-4">
              Your Success Is Our Goal
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our 6,000 sq ft facility is fully equipped for Boxing, Muay Thai, Brazilian
              Jiu-Jitsu, MMA, and Kids classes. Whether you&apos;re training for fitness,
              self-defense, or competition, we have a program for you.
            </p>
          </div>
        </div>

        {/* Programs overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {["Boxing", "Muay Thai", "Brazilian Jiu-Jitsu", "MMA"].map(
            (program) => (
              <Link
                key={program}
                href="/programs"
                className="bg-white/5 border border-white/10 p-6 text-center hover:border-red hover:bg-white/10 transition-all group"
              >
                <h4 className="text-lg font-bold uppercase group-hover:text-red transition-colors">
                  {program}
                </h4>
              </Link>
            )
          )}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://img1.wsimg.com/isteam/ip/05b843eb-228e-4ade-88a3-9cae36cea44c/IMG_0705.jpg"
              alt="Training at George Prevalsky's Gym"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://img1.wsimg.com/isteam/ip/05b843eb-228e-4ade-88a3-9cae36cea44c/IMG_0696.jpg"
              alt="Boxing training session"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://img1.wsimg.com/isteam/ip/05b843eb-228e-4ade-88a3-9cae36cea44c/IMG_0680_jpg.jpg"
              alt="Muay Thai practice"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-12">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-red font-bold uppercase mb-2">Address</h3>
              <p className="text-gray-300">612 Valley Ranch Pkwy S</p>
              <p className="text-gray-300">Irving, Texas 75063</p>
            </div>
            <div>
              <h3 className="text-red font-bold uppercase mb-2">Phone</h3>
              <p className="text-gray-300">
                <a href="tel:972-977-5605" className="hover:text-red transition-colors">
                  972-977-5605
                </a>
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Billing:{" "}
                <a href="tel:888-277-4408" className="hover:text-red transition-colors">
                  888-277-4408
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-red font-bold uppercase mb-2">Email</h3>
              <p className="text-gray-300">
                <a
                  href="mailto:georgeprevalsky@gmail.com"
                  className="hover:text-red transition-colors"
                >
                  georgeprevalsky@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-red font-bold uppercase mb-4 text-center">Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-400">Monday / Wednesday</span>
              <span>5:30 - 9:15 PM</span>
              <span className="text-gray-400">Tuesday / Thursday</span>
              <span>11:30 AM - 1 PM &amp; 5:30 - 9:30 PM</span>
              <span className="text-gray-400">Friday</span>
              <span>6:30 - 8:00 PM</span>
              <span className="text-gray-400">Saturday</span>
              <span>9:30 - 10:30 AM &amp; 11:30 AM - 2:30 PM</span>
              <span className="text-gray-400">Sunday</span>
              <span className="text-red">Closed</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
