import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Practice Info */}
          <div>
            <h3
              className="text-white text-lg font-extrabold mb-3"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Sunridge Dental Group
            </h3>
            <address className="not-italic text-sm leading-relaxed">
              1650 Addison Ave E Suite 100<br />
              Twin Falls, ID 83301
            </address>
            <p className="mt-2 text-sm">
              <a
                href="tel:+12085550247"
                className="hover:text-white transition-colors"
              >
                (208) 555-0247
              </a>
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="text-white text-lg font-extrabold mb-3"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Office Hours
            </h3>
            <ul className="text-sm space-y-1">
              <li className="flex justify-between gap-4">
                <span>Mon – Thu</span>
                <span>8:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Friday</span>
                <span>8:00 AM – 3:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sat – Sun</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white text-lg font-extrabold mb-3"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="text-sm space-y-1">
              <li><Link href="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link href="/our-doctors" className="hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition-colors">Insurance</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* HIPAA Notice */}
        <div className="mt-10 pt-6 border-t border-slate-700 text-xs text-slate-400 space-y-2">
          <p>
            <strong className="text-slate-300">HIPAA Notice:</strong> This website is for informational purposes only.
            Submitting any form on this site does not create a patient-provider relationship.
            All data is transmitted securely.
          </p>
          <p className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} Sunridge Dental Group. All rights reserved.</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
