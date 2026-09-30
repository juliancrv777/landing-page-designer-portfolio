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

export const business: BusinessConfig = {
  brand: "Maison Aura",
  eyebrow: "Estética avançada · Pelotas, RS",
  headline: "Sua beleza, com mais intenção.",
  subheadline:
    "Protocolos personalizados, tecnologia e um atendimento pensado para resultados naturais — do primeiro contato ao pós-procedimento.",
  city: "Pelotas · RS",
  whatsapp: "5553999999999",
  rating: "4.9",
  reviewCount: 287,
  yearsLabel: "8 anos de cuidado",
  primaryCta: "Agendar avaliação",
  heroImage:
    "https://images.pexels.com/photos/5069603/pexels-photo-5069603.jpeg?auto=compress&cs=tinysrgb&w=1600",
  experienceImage:
    "https://images.pexels.com/photos/7750099/pexels-photo-7750099.jpeg?auto=compress&cs=tinysrgb&w=1600",
  gallery: [
    {
      src: "https://images.pexels.com/photos/4586753/pexels-photo-4586753.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Procedimento facial em ambiente clínico",
    },
    {
      src: "https://images.pexels.com/photos/9336039/pexels-photo-9336039.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Massagem facial em ambiente de spa",
    },
    {
      src: "https://images.pexels.com/photos/3736520/pexels-photo-3736520.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Ambiente moderno de beleza e skincare",
    },
  ],
  services: [
    {
      title: "Harmonização facial",
      description:
        "Planejamento individual para valorizar proporções e preservar sua expressão.",
      tag: "Naturalidade",
      image:
        "https://images.pexels.com/photos/7581573/pexels-photo-7581573.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Botox",
      description:
        "Suavização estratégica de linhas de expressão com foco em equilíbrio e leveza.",
      tag: "Expressão leve",
      image:
        "https://images.pexels.com/photos/4586745/pexels-photo-4586745.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Limpeza de pele",
      description:
        "Cuidado profundo com protocolos personalizados para textura, viço e saúde da pele.",
      tag: "Pele saudável",
      image:
        "https://images.pexels.com/photos/4586753/pexels-photo-4586753.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Estética corporal",
      description:
        "Tecnologias e protocolos combinados para objetivos estéticos específicos.",
      tag: "Personalizado",
      image:
        "https://images.pexels.com/photos/6560341/pexels-photo-6560341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
  testimonials: [
    {
      quote:
        "Atendimento impecável, explicação clara em cada etapa e um resultado muito natural.",
      name: "Marina S.",
      service: "Harmonização facial",
    },
    {
      quote:
        "Você sente cuidado de verdade. Nada é feito no automático e o acompanhamento faz diferença.",
      name: "Camila R.",
      service: "Estética facial",
    },
    {
      quote:
        "Ambiente lindo, equipe atenciosa e um plano que fez sentido para o que eu realmente queria.",
      name: "Ana P.",
      service: "Avaliação personalizada",
    },
  ],
  stats: [
    { value: "4.9/5", label: "avaliação média" },
    { value: "+280", label: "avaliações" },
    { value: "100%", label: "atendimento personalizado" },
  ],
};
