export type BusinessConfig = {
  brand: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  city: string;
  whatsapp: string;
  rating: string;
  reviewCount: number;
  yearsLabel: string;
  primaryCta: string;
  heroImage: string;
  experienceImage: string;
  gallery: Array<{ src: string; alt: string }>;
  services: Array<{
    title: string;
    description: string;
    tag: string;
    image: string;
  }>;
  testimonials: Array<{ quote: string; name: string; service: string }>;
  stats: Array<{ value: string; label: string }>;
};
