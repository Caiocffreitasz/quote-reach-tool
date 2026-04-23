import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Award, Heart, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS, telHref } from "@/lib/business";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Rhnet · Assistência Técnica em Jacareí" },
      {
        name: "description",
        content:
          "Conheça a Rhnet: 14 anos consertando notebooks, smartphones e tablets em Jacareí com honestidade, agilidade e garantia.",
      },
      { property: "og:title", content: "Sobre a Rhnet" },
      { property: "og:description", content: "Honestidade, agilidade e garantia há mais de uma década." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Honestidade", desc: "Diagnóstico claro, sem inventar problemas. Você só paga pelo que precisa." },
  { icon: Award, title: "Qualidade", desc: "Peças testadas, técnicos experientes e garantia em todo serviço executado." },
  { icon: Heart, title: "Atendimento", desc: "Tratamos cada cliente como quem traz algo importante para ser cuidado." },
  { icon: Users, title: "Comunidade", desc: "Somos uma assistência de bairro, próxima e acessível a todos os clientes." },
] as const;

function AboutPage() {
  return (
    <div className="min-h-dvh bg-chassis pb-16 sm:pb-0">
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <span className="text-grip font-black text-xs uppercase tracking-widest bg-tool px-2 py-1 rounded-md border-2 border-grip">
            Quem somos
          </span>
          <h1 className="text-5xl sm:text-6xl mt-4 leading-[0.95]">14 anos consertando o que parecia perdido.</h1>
          <div className="mt-6 space-y-4 text-lg font-semibold text-chassis-dark normal-case tracking-normal">
            <p>
              A <strong>Rhnet</strong> nasceu em Jacareí com uma missão simples: oferecer assistência técnica de eletrônicos com a honestidade que falta no mercado.
            </p>
            <p>
              Em mais de uma década na bancada, já recuperamos milhares de aparelhos — notebooks, smartphones, tablets e muito mais. Cada equipamento que entra é tratado como se fosse nosso.
            </p>
            <p>
              Nosso compromisso é ser claro no diagnóstico, ágil no reparo e garantir tudo o que executamos. Por isso seguimos crescendo com indicações de clientes satisfeitos.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5 flex flex-col gap-4">
          <div className="brutal-card-dark p-8 rounded-2xl">
            <div className="text-tool text-7xl font-black tabular-nums tracking-tighter leading-none">14</div>
            <div className="text-white text-sm font-bold uppercase mt-2 tracking-widest">Anos de experiência</div>
          </div>
          <div className="brutal-card-yellow p-8">
            <div className="text-grip text-6xl font-black tabular-nums tracking-tighter leading-none">{BUSINESS.experience.devices}</div>
            <div className="text-grip text-sm font-bold uppercase mt-2 tracking-widest">Aparelhos recuperados</div>
          </div>
          <div className="brutal-card p-8">
            <div className="text-grip text-6xl font-black tabular-nums tracking-tighter leading-none">{BUSINESS.rating.score}<span className="text-2xl">/5</span></div>
            <div className="text-grip text-sm font-bold uppercase mt-2 tracking-widest">Avaliação no Google</div>
          </div>
        </aside>
      </section>

      <section className="bg-grip text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-tool font-black text-xs uppercase tracking-widest">Nossos valores</span>
          <h2 className="text-4xl sm:text-5xl mt-2">No que acreditamos.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-chassis text-grip p-6 rounded-xl border-4 border-tool">
                <v.icon className="size-9" strokeWidth={2.5} />
                <h3 className="text-xl mt-3">{v.title}</h3>
                <p className="text-sm font-semibold text-chassis-dark mt-2 normal-case tracking-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="brutal-card-yellow p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-5xl">Vamos cuidar do seu aparelho?</h2>
          <p className="mt-3 text-lg font-semibold text-grip max-w-2xl mx-auto normal-case tracking-normal">
            Ligue agora ou peça um orçamento. Resposta rápida e transparente.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={telHref} className="bg-grip text-white px-8 py-4 rounded-xl font-black uppercase border-4 border-grip shadow-brutal hover:translate-y-[3px] hover:shadow-brutal-sm transition-all">
              <Phone className="inline size-4 mr-2" /> {BUSINESS.phone}
            </a>
            <Link to="/contato" className="bg-white text-grip px-8 py-4 rounded-xl font-black uppercase border-4 border-grip shadow-brutal hover:translate-y-[3px] hover:shadow-brutal-sm transition-all">
              Pedir orçamento
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
