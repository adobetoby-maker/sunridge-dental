import type { Metadata } from 'next'
import { Nunito, Open_Sans } from 'next/font/google'
import './globals.css'
import AppointmentBar from '@/components/AppointmentBar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sunridge Dental Group — Family Dentistry in Twin Falls, ID',
  description:
    'Sunridge Dental Group provides comprehensive family dental care in Twin Falls, Idaho. Book your appointment today.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full ${nunito.variable} ${openSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <AppointmentBar />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
