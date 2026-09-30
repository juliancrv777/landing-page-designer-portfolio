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
  services: Array<{ title: string; description: string; tag: string }>;
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
  services: [
    {
      title: "Harmonização facial",
      description:
        "Planejamento individual para valorizar proporções e preservar sua expressão.",
      tag: "Naturalidade",
    },
    {
      title: "Estética facial",
      description:
        "Protocolos de pele com diagnóstico, ativos selecionados e acompanhamento.",
      tag: "Pele saudável",
    },
    {
      title: "Tratamentos corporais",
      description:
        "Tecnologias e protocolos combinados para objetivos estéticos específicos.",
      tag: "Personalizado",
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
