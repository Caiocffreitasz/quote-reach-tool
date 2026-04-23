import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Laptop, Smartphone, Tablet, Wrench, HardDrive, Battery, Cpu, Monitor, Database } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS, telHref } from "@/lib/business";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Rhnet · Assistência Técnica em Jacareí" },
      {
        name: "description",
        content:
          "Reparo de notebooks, smartphones, tablets e manutenção geral em Jacareí. Troca de tela, bateria, formatação, recuperação de dados e mais.",
      },
      { property: "og:title", content: "Serviços de Assistência Técnica — Rhnet" },
      { property: "og:description", content: "Notebooks, smartphones, tablets e manutenção geral em Jacareí/SP." },
    ],
  }),
  component: ServicesPage,
});

const CATEGORIES = [
  {
    icon: Laptop,
    title: "Notebooks",
    items: [
      { icon: Monitor, name: "Troca de tela", desc: "LCD/LED com garantia e calibragem." },
      { icon: Battery, name: "Troca de bateria", desc: "Bateria nova com autonomia restaurada." },
      { icon: Cpu, name: "Limpeza e pasta térmica", desc: "Reduz superaquecimento e travamentos." },
      { icon: HardDrive, name: "Formatação", desc: "Backup, instalação de Windows e drivers." },
    ],
  },
  {
    icon: Smartphone,
    title: "Smartphones",
    items: [
      { icon: Monitor, name: "Troca de tela", desc: "Display original ou compatível premium." },
      { icon: Battery, name: "Troca de bateria", desc: "Aparelho de volta com fôlego total." },
      { icon: Cpu, name: "Reparo de placa", desc: "Conserto a nível de componente." },
      { icon: Wrench, name: "Conector de carga", desc: "Resolve problemas de recarga." },
    ],
  },
  {
    icon: Tablet,
    title: "Tablets",
    items: [
      { icon: Monitor, name: "Troca de tela", desc: "Touch e display para todas as marcas." },
      { icon: Battery, name: "Troca de bateria", desc: "Performance e autonomia restauradas." },
      { icon: Wrench, name: "Conector de carga", desc: "Reparo definitivo, sem gambiarra." },
    ],
  },
  {
    icon: Wrench,
    title: "Manutenção geral",
    items: [
      { icon: Database, name: "Recuperação de dados", desc: "Tentamos recuperar fotos e documentos." },
      { icon: Cpu, name: "Diagnóstico técnico", desc: "Análise completa antes de qualquer reparo." },
      { icon: Wrench, name: "Manutenção preventiva", desc: "Para o aparelho durar muito mais." },
    ],
  },
] as const;

function ServicesPage() {
  return (
    <div className="min-h-dvh bg-chassis pb-16 sm:pb-0">
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <span className="text-grip font-black text-xs uppercase tracking-widest bg-tool px-2 py-1 rounded-md border-2 border-grip">
          Catálogo de serviços
        </span>
        <h1 className="text-5xl sm:text-6xl mt-4 leading-[0.95]">Tudo o que consertamos.</h1>
        <p className="mt-4 text-lg font-semibold text-chassis-dark max-w-2xl normal-case tracking-normal">
          Trabalhamos com as principais marcas do mercado: Dell, Lenovo, HP, Acer, Apple, Samsung, Xiaomi, Motorola e muitas outras.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        {CATEGORIES.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-grip text-tool p-3 rounded-xl border-4 border-grip">
                <cat.icon className="size-6" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl sm:text-4xl">{cat.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.items.map((item) => (
                <div key={item.name} className="brutal-card p-5">
                  <item.icon className="size-7 text-grip" strokeWidth={2.5} />
                  <h3 className="text-lg mt-3">{item.name}</h3>
                  <p className="text-sm font-semibold text-chassis-dark mt-1 normal-case tracking-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <div className="brutal-card-yellow p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-5xl">Não encontrou seu problema?</h2>
          <p className="mt-3 text-lg font-semibold text-grip max-w-2xl mx-auto normal-case tracking-normal">
            Fale com a gente. Diagnosticamos qualquer aparelho eletrônico.
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
