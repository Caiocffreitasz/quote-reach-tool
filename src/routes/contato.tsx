import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BUSINESS, telHref, waHref } from "@/lib/business";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Rhnet · Assistência Técnica em Jacareí" },
      {
        name: "description",
        content:
          "Entre em contato com a Rhnet em Jacareí. Telefone (12) 98282-0129, WhatsApp e formulário de orçamento online.",
      },
      { property: "og:title", content: "Contato — Rhnet" },
      { property: "og:description", content: "Telefone, WhatsApp e formulário de orçamento online." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-dvh bg-chassis pb-16 sm:pb-0">
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <span className="text-grip font-black text-xs uppercase tracking-widest bg-tool px-2 py-1 rounded-md border-2 border-grip">
          Fale conosco
        </span>
        <h1 className="text-5xl sm:text-6xl mt-4 leading-[0.95]">Entre em contato.</h1>
        <p className="mt-4 text-lg font-semibold text-chassis-dark max-w-2xl normal-case tracking-normal">
          Escolha o canal mais confortável. Estamos prontos para atender você.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <a href={telHref} className="brutal-card-yellow p-6 flex items-center gap-5 hover:translate-y-[3px] hover:shadow-brutal-sm transition-all">
            <div className="bg-grip text-tool p-4 rounded-xl"><Phone className="size-7" strokeWidth={2.5} /></div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest">Telefone · Click to call</div>
              <div className="text-2xl sm:text-3xl mt-1">{BUSINESS.phone}</div>
            </div>
          </a>

          <a href={waHref()} target="_blank" rel="noopener" className="brutal-card p-6 flex items-center gap-5 hover:translate-y-[3px] hover:shadow-brutal-sm transition-all">
            <div className="bg-success text-grip p-4 rounded-xl"><MessageCircle className="size-7" strokeWidth={2.5} /></div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest">WhatsApp</div>
              <div className="text-xl sm:text-2xl mt-1">Conversar agora</div>
            </div>
          </a>

          <div className="brutal-card p-6 flex items-start gap-5">
            <div className="bg-grip text-tool p-4 rounded-xl shrink-0"><MapPin className="size-7" strokeWidth={2.5} /></div>
            <div className="flex-1">
              <div className="text-xs font-black uppercase tracking-widest">Endereço</div>
              <p className="text-base font-semibold text-grip mt-1 normal-case tracking-normal">{BUSINESS.address.full}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
                target="_blank"
                rel="noopener"
                className="inline-block mt-2 text-sm font-black uppercase tracking-wide underline underline-offset-4 decoration-tool decoration-4"
              >
                Ver no Google Maps →
              </a>
            </div>
          </div>

          <div className="brutal-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-grip text-tool p-3 rounded-xl"><Clock className="size-5" strokeWidth={2.5} /></div>
              <div className="text-xs font-black uppercase tracking-widest">Horário de funcionamento</div>
            </div>
            <ul className="space-y-1.5 text-sm">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3 font-semibold normal-case tracking-normal">
                  <span className="text-chassis-dark">{h.day}</span>
                  <span className={h.open ? "text-grip" : "text-chassis-dark/50"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="brutal-card-dark p-6 flex items-center gap-5">
            <div className="bg-tool text-grip p-4 rounded-xl"><Mail className="size-7" strokeWidth={2.5} /></div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-tool">E-mail</div>
              <div className="text-lg mt-1 text-white">{BUSINESS.email}</div>
            </div>
          </div>
        </div>

        <div>
          <QuoteForm />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="border-4 border-grip rounded-2xl overflow-hidden shadow-brutal">
          <iframe
            title="Mapa Rhnet"
            src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address.full)}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
