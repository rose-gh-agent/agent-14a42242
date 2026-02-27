import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-red font-bold uppercase text-lg mb-4">
              George Prevalsky&apos;s Gym
            </h3>
            <p className="text-gray-400 text-sm">
              Boxing, Muay Thai, Brazilian Jiu-Jitsu and MMA training since 1996.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/schedule" className="hover:text-red transition-colors">Schedule</Link></li>
              <li><Link href="/programs" className="hover:text-red transition-colors">Programs</Link></li>
              <li><Link href="/trial-day-sign-up" className="hover:text-red transition-colors">Free Trial</Link></li>
              <li><Link href="/contact-us" className="hover:text-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/GeorgesMmaAndBoxingGym/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/muaythaiboxing_dallas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.yelp.com/biz/georges-mma-and-boxing-gym-irving"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red transition-colors"
              >
                Yelp
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>612 Valley Ranch Pkwy S</p>
              <p>Irving, Texas 75063</p>
              <p className="mt-2">
                <a href="tel:972-977-5605" className="hover:text-red transition-colors">972-977-5605</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} George Prevalsky&apos;s Boxing &amp; Muay Thai Boxing Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
