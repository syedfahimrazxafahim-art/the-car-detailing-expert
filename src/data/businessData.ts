import { BusinessInfo, NavItem, PackageItem, SampleReview, GalleryItem } from '../types';

export const BUSINESS_LOGO =
  'https://res.cloudinary.com/fzobzdco/image/upload/v1788819537/747790299_122128739727347131_7298388764846881656_n.jpg';

export const CLOUDINARY_IMAGES = {
  photo1:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819540/749355836_122094458607404147_3288829815405653845_n.jpg',
  photo2:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819546/748568665_122094451959404147_9189417957410703400_n.jpg',
  photo3:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819551/749355807_122094450117404147_9168481812036049840_n.jpg',
  photo4:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819558/747827193_122094118167404147_808213662560246657_n.jpg',
  photo5:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819563/748133936_122094130959404147_1342816419883386628_n.jpg',
  photo6:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819570/747324751_122094450909404147_4025337687175904417_n.jpg',
  photo7:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819573/747761277_122094453027404147_6136562727541268339_n.jpg',
  photo8:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819577/747168280_122094132063404147_7522303427071793354_n.jpg',
  photo9:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819581/747674597_122094130119404147_2406384570463352977_n.jpg',
  photo10:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819583/747235921_122094125949404147_2073540777996211269_n.jpg',
  photo11:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819612/746394787_122094129519404147_2291985939284636378_n.jpg',
  photo12:
    'https://res.cloudinary.com/fzobzdco/image/upload/v1788819613/746129938_122094131487404147_7747273627247218998_n.jpg',
};

export const BUSINESS_INFO: BusinessInfo = {
  name: 'The Detailing Expert - TDE',
  shortName: 'TDE',
  tagline: 'PREMIUM CARE. PERFECT FINISH.',
  primaryService: 'CAR WASHING',
  phone: '332-288-6330',
  phoneRaw: '3322886330',
  email: 'infothedetailingexpert@gmail.com',
  city: 'Los Angeles',
  state: 'California',
  facebookUrl: 'https://www.facebook.com/detailingexpert.tde',
  instagramUrl: 'https://www.instagram.com/detailingexpert.tde',
  logoUrl: BUSINESS_LOGO,
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const IMAGES = {
  logo: BUSINESS_LOGO,
  hero: CLOUDINARY_IMAGES.photo1,
  about: CLOUDINARY_IMAGES.photo4,
  services: CLOUDINARY_IMAGES.photo6,
  whyChooseUs: CLOUDINARY_IMAGES.photo8,
  cta: CLOUDINARY_IMAGES.photo5,
  galleryWaterBead: CLOUDINARY_IMAGES.photo3,
  galleryFoamWash: CLOUDINARY_IMAGES.photo6,
};

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'basic',
    name: 'BASIC',
    subtitle: 'Essential Care Wash',
    isPopular: false,
    ctaText: 'REQUEST DETAILS',
    note: 'Customized package details and pricing available on request.',
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    subtitle: 'Signature Care Wash',
    isPopular: true,
    ctaText: 'BOOK NOW',
    note: 'Our signature presentation package for luxury vehicles.',
  },
  {
    id: 'full',
    name: 'FULL',
    subtitle: 'Comprehensive Care',
    isPopular: false,
    ctaText: 'REQUEST DETAILS',
    note: 'In-depth vehicle washing tailored to your vehicle specifications.',
  },
  {
    id: 'ultimate',
    name: 'ULTIMATE',
    subtitle: 'Executive Presentation',
    isPopular: false,
    ctaText: 'REQUEST DETAILS',
    note: 'Bespoke hand wash service with meticulous attention to detail.',
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'PREMIUM QUALITY',
    description: 'A refined focus on presentation and finish.',
    iconName: 'Sparkles',
  },
  {
    title: 'PROFESSIONAL SERVICE',
    description: 'A clean and professional customer experience.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'ATTENTION TO DETAIL',
    description: "Careful attention to the vehicle's appearance.",
    iconName: 'Eye',
  },
  {
    title: 'CUSTOMER SATISFACTION',
    description: 'Your vehicle, our priority.',
    iconName: 'HeartHandshake',
  },
];

export const SAMPLE_REVIEWS: SampleReview[] = [
  {
    id: 'sample-1',
    aspect: 'Exemplary Presentation & Care',
    quote: 'The level of dedication to automotive appearance and the immaculate finish is evident on every panel.',
    rating: 5,
  },
  {
    id: 'sample-2',
    aspect: 'Meticulous Car Wash Experience',
    quote: 'Exceptional visual standards with prompt, professional service right here in Los Angeles.',
    rating: 5,
  },
  {
    id: 'sample-3',
    aspect: 'Precision & Clean Finish',
    quote: 'A clean, high-performance hand wash that treats luxury vehicles with the exact respect they deserve.',
    rating: 5,
  },
  {
    id: 'sample-4',
    aspect: 'Professional Customer Service',
    quote: 'Smooth booking communication, pristine care, and an undeniable mirror-like vehicle luster.',
    rating: 5,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pristine Vehicle Presentation',
    category: 'Luxury Vehicles',
    imageUrl: CLOUDINARY_IMAGES.photo1,
    description: 'Flawless mirror gloss finish on completed luxury vehicle exterior.',
  },
  {
    id: 'gal-2',
    title: 'Precision Wheel & Rim Care',
    category: 'Wheel & Rim Care',
    imageUrl: CLOUDINARY_IMAGES.photo2,
    description: 'Deep brake dust removal and spotless rim surface preservation.',
  },
  {
    id: 'gal-3',
    title: 'High-Luster Surface Reflection',
    category: 'Paint Luster',
    imageUrl: CLOUDINARY_IMAGES.photo3,
    description: 'Crisp automotive paint depth and clarity under natural presentation.',
  },
  {
    id: 'gal-4',
    title: 'Sculpted Body Line Perfection',
    category: 'Exterior Care',
    imageUrl: CLOUDINARY_IMAGES.photo4,
    description: 'Meticulous surface decontamination and high-definition panel gloss.',
  },
  {
    id: 'gal-5',
    title: 'Showroom Front-End Presentation',
    category: 'Exterior Care',
    imageUrl: CLOUDINARY_IMAGES.photo5,
    description: 'Spotless grille, headlight clarity, and bug-free front fascia.',
  },
  {
    id: 'gal-6',
    title: 'Clean Vehicle Hand Washing',
    category: 'Car Washing',
    imageUrl: CLOUDINARY_IMAGES.photo6,
    description: 'Gentle multi-stage wash process protecting clear coats from swirls.',
  },
  {
    id: 'gal-7',
    title: 'Spotless Glass & Surface Clarity',
    category: 'Exterior Care',
    imageUrl: CLOUDINARY_IMAGES.photo7,
    description: 'Streak-free exterior glass cleaning with crystal transparency.',
  },
  {
    id: 'gal-8',
    title: 'Deep Black Paint Reflection',
    category: 'Paint Luster',
    imageUrl: CLOUDINARY_IMAGES.photo8,
    description: 'Deep, wet-look reflection achieved on dark automotive finishes.',
  },
  {
    id: 'gal-9',
    title: 'Rear Profile & Detailing Finish',
    category: 'Exterior Care',
    imageUrl: CLOUDINARY_IMAGES.photo9,
    description: 'Spotless rear bumper lines, clean emblems, and pristine finish.',
  },
  {
    id: 'gal-10',
    title: 'Signature Automotive Care',
    category: 'Luxury Vehicles',
    imageUrl: CLOUDINARY_IMAGES.photo10,
    description: 'Exemplary automotive care honoring luxury vehicle engineering.',
  },
  {
    id: 'gal-11',
    title: 'High-Definition Panel Detailing',
    category: 'Car Washing',
    imageUrl: CLOUDINARY_IMAGES.photo11,
    description: 'Careful microfiber drying ensuring zero water spots or residue.',
  },
  {
    id: 'gal-12',
    title: 'Flawless Side Profile Luster',
    category: 'Paint Luster',
    imageUrl: CLOUDINARY_IMAGES.photo12,
    description: 'Pristine vehicle side profile reflecting ambient California sunshine.',
  },
];
