import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import ServicesOverview from '@/components/home/ServicesOverview'
import DoctorCards from '@/components/home/DoctorCards'
import Testimonials from '@/components/home/Testimonials'
import InsuranceStrip from '@/components/home/InsuranceStrip'
import NewPatientSpecial from '@/components/home/NewPatientSpecial'
import OfficePhotos from '@/components/home/OfficePhotos'

export const metadata = {
  title: 'Sunridge Dental Group | Family Dentistry in Twin Falls, ID',
  description:
    'General, cosmetic, and orthodontic dentistry for the whole family in Twin Falls, Idaho. Dr. Kim, Dr. Webb, and Dr. Reyes. Book online or call (208) 555-0247.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <DoctorCards />
      <Testimonials />
      <InsuranceStrip />
      <NewPatientSpecial />
      <OfficePhotos />
    </>
  )
}
