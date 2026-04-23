// Single source of truth for business info — edit here to update site-wide.
export const BUSINESS = {
  name: "Rhnet",
  tagline: "Assistência Técnica de Eletrônicos em Jacareí",
  phone: "(12) 98282-0129",
  phoneE164: "+5512982820129",
  whatsapp: "+5512982820129",
  email: "contato@fixtecnica.com.br",
  address: {
    street: "R. Santa Helena, 198",
    neighborhood: "São João",
    city: "Jacareí",
    state: "SP",
    zip: "12322-550",
    full: "R. Santa Helena, 198 — São João, Jacareí - SP, 12322-550",
  },
  hours: [
    { day: "Segunda-feira", time: "09:00 – 18:00", open: true },
    { day: "Terça-feira", time: "09:00 – 18:00", open: true },
    { day: "Quarta-feira", time: "09:00 – 18:00", open: true },
    { day: "Quinta-feira", time: "09:00 – 18:00", open: true },
    { day: "Sexta-feira", time: "09:00 – 18:00", open: true },
    { day: "Sábado", time: "09:00 – 12:00", open: true },
    { day: "Domingo", time: "Fechado", open: false },
  ],
  rating: { score: "4.3", count: 12 },
  experience: { years: 14, devices: "+10mil" },
} as const;

export const telHref = `tel:${BUSINESS.phoneE164}`;
export const waHref = (msg = "Olá! Gostaria de um orçamento.") =>
  `https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=${encodeURIComponent(msg)}`;
