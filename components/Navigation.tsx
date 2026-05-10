'use client'

import { useState } from 'react'
import Link from 'next/link'

const services = [
  { href: '/services/general', label: 'General Dentistry' },
  { href: '/services/cosmetic', label: 'Cosmetic Dentistry' },
  { href: '/services/orthodontics', label: 'Orthodontics & Invisalign' },
  { href: '/services/pediatric', label: 'Pediatric Dentistry' },
  { href: '/services/emergency', label: 'Emergency Dentistry' },
]

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ fontFamily: 'Nunito, sans-serif', color: '#0EA5E9' }}
          >
            Sunridge Dental Group
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <li>
            <Link href="/" className="hover:text-sky-500 transition-colors">
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-sky-500 transition-colors">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link href="/our-doctors" className="hover:text-sky-500 transition-colors">
              Our Doctors
            </Link>
          </li>
          <li>
            <Link href="/smile-gallery" className="hover:text-sky-500 transition-colors">
              Smile Gallery
            </Link>
          </li>
          <li>
            <Link href="/insurance" className="hover:text-sky-500 transition-colors">
              Insurance
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-sky-500 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-sky-500 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/book"
            className="inline-block px-5 py-2 rounded-full text-white text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#0EA5E9' }}
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3 text-sm font-semibold text-slate-700">
            <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li className="font-bold text-slate-500 text-xs uppercase tracking-wider pt-2">Services</li>
            {services.map((s) => (
              <li key={s.href} className="pl-2">
                <Link href={s.href} onClick={() => setMobileOpen(false)}>{s.label}</Link>
              </li>
            ))}
            <li><Link href="/our-doctors" onClick={() => setMobileOpen(false)}>Our Doctors</Link></li>
            <li><Link href="/smile-gallery" onClick={() => setMobileOpen(false)}>Smile Gallery</Link></li>
            <li><Link href="/insurance" onClick={() => setMobileOpen(false)}>Insurance</Link></li>
            <li><Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
            <li className="pt-2">
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="inline-block w-full text-center px-5 py-2 rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: '#0EA5E9' }}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
