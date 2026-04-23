import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Check, Star, Clock, ShieldCheck, Wrench, Smartphone, Laptop, Tablet, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BUSINESS, telHref, waHref } from "@/lib/business";
import heroBench from "@/assets/hero-bench.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rhnet — Assistência Técnica de Eletrônicos em Jacareí" },
      {
        name: "description",
        content:
          "Conserto de notebooks, smartphones e tablets em Jacareí - SP. Orçamento rápido, atendimento honesto e garantia. Ligue agora.",
      },
      { property: "og:title", content: "Rhnet — Conserto de Eletrônicos em Jacareí" },
      { property: "og:description", content: "Diagnóstico rápido, atendimento honesto e garantia em todo serviço." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-dvh bg-chassis pb-16 sm:pb-0">
      <Header />

      {/* HERO */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex self-start bg-grip text-tool font-bold uppercase tracking-wider text-xs px-3 py-1.5 rounded-md">
            Reparo de alta performance · Jacareí/SP
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-balance leading-[0.9]">
            Seu aparelho{" "}
            <span className="bg-tool px-3 pb-1 border-4 border-grip inline-block mt-2 rounded-xl shadow-brutal">
              de volta à vida.
            </span>
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-chassis-dark max-w-[55ch] normal-case tracking-normal">
            Diagnóstico expresso e conserto rápido para notebooks, smartphones, tablets e mais. Sem enrolação. Direto ao ponto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={telHref}
              className="flex-1 bg-tool border-4 border-grip rounded-xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-brutal hover:translate-y-[3px] hover:shadow-brutal-sm active:translate-y-[6px] active:shadow-none transition-all"
            >
              <span className="font-black uppercase text-xl flex items-center gap-2"><Phone className="size-5" /> Ligar agora</span>
              <span className="font-bold text-sm tracking-widest mt-0.5">{BUSINESS.phone}</span>
            </a>
            <a
              href="#orcamento"
              className="flex-1 bg-white border-4 border-grip rounded-xl px-6 py-4 flex flex-col items-center justify-center text-center shadow-brutal hover:translate-y-[3px] hover:shadow-brutal-sm active:translate-y-[6px] active:shadow-none transition-all"
            >
              <span className="font-black uppercase text-xl">Pedir orçamento</span>
              <span className="font-bold text-sm text-chassis-dark normal-case tracking-normal">Resposta em 15 min</span>
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-2 text-sm font-bold text-chassis-dark uppercase tracking-wide">
            <li className="flex items-center gap-1.5"><Check className="size-4 text-success" /> Garantia em todo serviço</li>
            <li className="flex items-center gap-1.5"><Check className="size-4 text-success" /> Orçamento sem compromisso</li>
            <li className="flex items-center gap-1.5"><Check className="size-4 text-success" /> Atendimento honesto</li>
          </ul>
        </div>

        {/* HERO RIGHT */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-grip p-2 rounded-2xl border-4 border-grip shadow-brutal-lg relative">
            <div className="absolute top-4 left-4 bg-tool text-grip font-bold text-xs uppercase px-2 py-1 z-10 border-2 border-grip rounded-md">
              Bancada 03
            </div>
            <div className="bg-zinc-800 rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={heroBench}
                width={1280}
                height={960}
                alt="Técnico reparando placa-mãe de smartphone com pinças de precisão"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="bg-grip text-white p-5 rounded-xl flex flex-col justify-center border-4 border-grip">
              <div className="text-tool font-black text-4xl tabular-nums tracking-tighter leading-none">
                {BUSINESS.rating.score}<span className="text-xl">/5</span>
              </div>
              <div className="font-bold text-sm uppercase mt-1 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-tool text-tool" />
                ))}
              </div>
              <div className="text-xs font-semibold text-zinc-400 mt-2 normal-case tracking-normal">
                {BUSINESS.rating.count} avaliações no Google
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white p-4 rounded-xl border-4 border-grip shadow-brutal-sm flex-1 flex flex-col justify-center">
                <div className="font-black text-2xl tabular-nums tracking-tight">{BUSINESS.experience.devices}</div>
                <div className="text-xs font-bold uppercase">Aparelhos salvos</div>
              </div>
              <div className="bg-tool p-4 rounded-xl border-4 border-grip shadow-brutal-sm flex-1 flex flex-col justify-center">
                <div className="font-black text-2xl tabular-nums tracking-tight">{BUSINESS.experience.years} anos</div>
                <div className="text-xs font-bold uppercase">Na bancada</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SERVICES */}
      <section className="bg-grip text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-tool font-black text-xs uppercase tracking-widest">O que consertamos</span>
              <h2 className="text-4xl sm:text-5xl mt-2">Serviços principais</h2>
            </div>
            <Link to="/servicos" className="text-tool font-bold uppercase tracking-wide text-sm hover:underline underline-offset-4">
              Ver todos os serviços →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-chassis text-grip p-6 rounded-xl border-4 border-tool flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                <s.icon className="size-9" strokeWidth={2.5} />
                <h3 className="text-xl">{s.title}</h3>
                <p className="text-sm font-semibold text-chassis-dark normal-case tracking-normal">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-grip font-black text-xs uppercase tracking-widest bg-tool px-2 py-1 rounded-md border-2 border-grip">Por que a Rhnet</span>
            <h2 className="text-4xl sm:text-5xl mt-4 leading-[0.95]">Honestidade, agilidade e garantia.</h2>
            <p className="mt-4 text-lg font-semibold text-chassis-dark normal-case tracking-normal max-w-prose">
              Somos uma assistência técnica de bairro com a precisão de um laboratório. Diagnosticamos com transparência e só executamos o reparo após sua aprovação.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {WHY.map((w) => (
                <div key={w.title} className="brutal-card p-5">
                  <w.icon className="size-7 text-grip" strokeWidth={2.5} />
                  <h3 className="text-lg mt-3">{w.title}</h3>
                  <p className="text-sm font-semibold text-chassis-dark mt-1 normal-case tracking-normal">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="orcamento">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-tool border-y-4 border-grip py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-grip font-black text-xs uppercase tracking-widest">O que dizem os clientes</span>
            <h2 className="text-4xl sm:text-5xl mt-2">Avaliações do Google</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white border-4 border-grip rounded-xl p-6 shadow-brutal">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-grip text-grip" />
                  ))}
                </div>
                <p className="text-base font-semibold text-grip normal-case tracking-normal leading-relaxed">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t-2 border-grip/10">
                  <div className="font-black uppercase text-sm">{t.name}</div>
                  <div className="text-xs font-semibold text-chassis-dark uppercase tracking-wider">{t.when}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / VISIT */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
          <div className="brutal-card-dark p-8 sm:p-10 rounded-2xl flex flex-col justify-between gap-6">
            <div>
              <span className="text-tool font-black text-xs uppercase tracking-widest">Atendimento agora</span>
              <h2 className="text-4xl sm:text-5xl mt-2 text-white">Fale direto com um técnico.</h2>
              <p className="text-white/70 mt-3 normal-case tracking-normal font-semibold">
                Tire suas dúvidas, descreva o problema e receba uma estimativa imediata.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={telHref} className="flex-1 bg-tool text-grip border-4 border-tool rounded-xl px-6 py-4 text-center font-black uppercase shadow-brutal hover:translate-y-[3px] hover:shadow-brutal-sm transition-all">
                <Phone className="inline size-5 mr-2" /> {BUSINESS.phone}
              </a>
              <a href={waHref()} target="_blank" rel="noopener" className="flex-1 bg-success text-grip border-4 border-tool rounded-xl px-6 py-4 text-center font-black uppercase shadow-brutal hover:translate-y-[3px] hover:shadow-brutal-sm transition-all">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="brutal-card p-8 sm:p-10">
            <span className="text-grip font-black text-xs uppercase tracking-widest">Visite a oficina</span>
            <h2 className="text-3xl sm:text-4xl mt-2">Onde estamos</h2>
            <div className="mt-5 space-y-3 text-sm font-semibold normal-case tracking-normal">
              <p className="flex items-start gap-2"><MapPin className="size-5 shrink-0 mt-0.5" /> {BUSINESS.address.full}</p>
              <p className="flex items-start gap-2"><Clock className="size-5 shrink-0 mt-0.5" /> Seg–Sex 9h–18h · Sáb 9h–12h</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
              target="_blank"
              rel="noopener"
              className="inline-flex mt-6 bg-grip text-white px-5 py-3 rounded-lg font-black uppercase text-sm tracking-wide border-2 border-grip hover:bg-chassis-dark transition-colors"
            >
              Abrir no Google Maps →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const SERVICES = [
  { icon: Laptop, title: "Notebooks", desc: "Tela, bateria, teclado, formatação, limpeza interna e troca de pasta térmica." },
  { icon: Smartphone, title: "Smartphones", desc: "Troca de tela, bateria, conector de carga, alto-falantes e reparo de placa." },
  { icon: Tablet, title: "Tablets", desc: "Tela, bateria, conector de carga e reparos de software para todas as marcas." },
  { icon: Wrench, title: "Manutenção geral", desc: "Diagnóstico, recuperação de dados e manutenção preventiva." },
] as const;

const WHY = [
  { icon: ShieldCheck, title: "Garantia escrita", desc: "Todo serviço executado vem com garantia formal por escrito." },
  { icon: Clock, title: "Diagnóstico rápido", desc: "Avaliamos seu aparelho e enviamos orçamento em até 24 horas." },
  { icon: Check, title: "Sem surpresas", desc: "Você só paga após aprovar o orçamento. Sem taxas escondidas." },
  { icon: Wrench, title: "Peças de qualidade", desc: "Trabalhamos com componentes testados e de procedência." },
] as const;

const TESTIMONIALS = [
  { name: "Everton Lima", when: "9 meses atrás", text: "Ótimo atendimento, gostei muito da honestidade e do serviço, recomendo." },
  { name: "Eraldo Callado", when: "4 anos atrás", text: "Um ótimo atendimento e honestidade. Voltarei sempre que precisar." },
  { name: "Alexandre Andrade", when: "2 anos atrás", text: "Profissionais honestíssimos e prestativos. Resolveram meu problema rapidamente." },
] as const;
