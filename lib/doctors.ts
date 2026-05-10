export interface Doctor {
  name: string
  slug: string
  title: string
  specialty: string
  years: number
  school: string
  degree: string
  image: string
  imageAlt: string
  tagline: string
  bio: string
  whyDentistry: string
  favoritePart: string
  outsideOffice: string
  certifications: string[]
  services: string[]
}

export const doctors: Doctor[] = [
  {
    name: 'Dr. Rachel Kim',
    slug: 'rachel-kim',
    title: 'General & Cosmetic Dentist',
    specialty: 'General & Cosmetic Dentistry',
    years: 14,
    school: 'USC Herman Ostrow School of Dentistry',
    degree: 'Doctor of Dental Surgery (DDS)',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop',
    imageAlt: 'Dr. Rachel Kim — General & Cosmetic Dentist at Sunridge Dental',
    tagline: 'Creating confident smiles, one patient at a time.',
    bio: 'Dr. Rachel Kim brings 14 years of experience in general and cosmetic dentistry to Sunridge Dental Group. A graduate of the USC Herman Ostrow School of Dentistry, Dr. Kim is known for her meticulous attention to detail, warm chairside manner, and genuine passion for cosmetic smile transformations. She has completed advanced training in porcelain veneers, teeth whitening, and smile design.',
    whyDentistry: '"I grew up dreading the dentist — and that experience is exactly why I became one. I want every patient to leave feeling cared for, not anxious. Dentistry, done right, is one of the most meaningful ways I know to improve someone\'s quality of life."',
    favoritePart: 'The moment a patient sees their new smile in the mirror for the first time. That reaction never gets old.',
    outsideOffice: 'Dr. Kim loves hiking the Snake River Canyon trails, experimenting with Korean-fusion cooking, and volunteering at the Twin Falls Community Health Fair.',
    certifications: ['Fellow, Academy of General Dentistry', 'Advanced Cosmetic Dentistry Training — Las Vegas Institute', 'Cerec Same-Day Crown Certified'],
    services: ['Comprehensive Exams', 'Professional Teeth Whitening', 'Porcelain Veneers', 'Dental Bonding', 'Smile Makeovers', 'CEREC Same-Day Crowns', 'Gum Contouring'],
  },
  {
    name: 'Dr. Marcus Webb',
    slug: 'marcus-webb',
    title: 'General Dentist & Invisalign Gold Provider',
    specialty: 'General Dentistry & Orthodontics',
    years: 9,
    school: 'University of Washington School of Dentistry',
    degree: 'Doctor of Dental Medicine (DMD)',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&auto=format&fit=crop',
    imageAlt: 'Dr. Marcus Webb — General Dentist & Invisalign Provider at Sunridge Dental',
    tagline: 'Helping patients achieve straight, healthy smiles — comfortably.',
    bio: 'Dr. Marcus Webb is a graduate of the University of Washington School of Dentistry with 9 years of clinical experience in general dentistry and orthodontics. He is an Invisalign Gold certified provider, having completed 20+ Invisalign cases per year. Dr. Webb is committed to making orthodontic treatment accessible and comfortable for teenagers and adults alike.',
    whyDentistry: '"I\'ve always been drawn to the intersection of health and aesthetics. A properly aligned bite isn\'t just about appearance — it affects how you chew, how you sleep, and how you carry yourself. Getting someone to that state of alignment is deeply satisfying work."',
    favoritePart: 'Seeing time-lapse photos of an Invisalign case progressing from start to finish. The transformation is always remarkable.',
    outsideOffice: 'Dr. Webb is an avid fly fisherman, a Twin Falls Bruins youth hockey coach, and a home-brew enthusiast.',
    certifications: ['Invisalign Gold Provider', 'Invisalign Teen Certified', 'Member, American Dental Association', 'Member, Idaho State Dental Association'],
    services: ['Comprehensive Exams', 'Teeth Cleanings', 'Tooth-Colored Fillings', 'Invisalign for Teens & Adults', 'Traditional Braces Referrals', 'Root Canals', 'Extractions'],
  },
  {
    name: 'Dr. Sofia Reyes',
    slug: 'sofia-reyes',
    title: 'Pediatric & General Dentist',
    specialty: 'Pediatric & General Dentistry',
    years: 6,
    school: 'University of Colorado School of Dental Medicine',
    degree: 'Doctor of Dental Surgery (DDS)',
    image: 'https://images.unsplash.com/_4xStiTXY1o?w=800&auto=format&fit=crop',
    imageAlt: 'Dr. Sofia Reyes — Pediatric & General Dentist at Sunridge Dental',
    tagline: 'Building healthy smiles from the very first tooth.',
    bio: 'Dr. Sofia Reyes is a pediatric-focused general dentist who joined Sunridge Dental Group after completing her degree at the University of Colorado School of Dental Medicine. With 6 years of experience working with children from infancy through age 18, Dr. Reyes has built a reputation as one of the most trusted and beloved pediatric dental providers in the Magic Valley area.',
    whyDentistry: '"Children are my favorite patients because they\'re honest — if they trust you, they really trust you. My goal on every visit is to earn that trust. A positive early experience at the dentist can set someone on a path of lifelong oral health."',
    favoritePart: 'When a nervous child leaves the chair smiling and says "See you next time!" without being prompted.',
    outsideOffice: 'Dr. Reyes is a Twin Falls native who loves camping with her family, teaching children\'s yoga, and volunteering with the Idaho Migrant Dental Project.',
    certifications: ['Pediatric Dentistry Advanced Training, Children\'s Hospital Colorado', 'CPR/AED Certified', 'Member, American Academy of Pediatric Dentistry', 'Member, Idaho State Dental Association'],
    services: ['Infant Oral Exams', 'Pediatric Cleanings', 'Dental Sealants', 'Fluoride Treatments', 'Space Maintainers', 'Pediatric X-Rays', 'Teen Dental Care'],
  },
]

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug)
}
