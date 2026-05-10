import type { Metadata } from 'next'
import './globals.css'
import AppointmentBar from '@/components/AppointmentBar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <AppointmentBar />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
