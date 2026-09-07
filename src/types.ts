export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  primaryService: string;
  phone: string;
  phoneRaw: string;
  email: string;
  city: string;
  state: string;
  facebookUrl: string;
  instagramUrl: string;
  logoUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PackageItem {
  id: string;
  name: string;
  subtitle: string;
  isPopular?: boolean;
  ctaText: string;
  note: string;
}

export interface SampleReview {
  id: string;
  quote: string;
  aspect: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  preferredDate: string;
  message: string;
}
