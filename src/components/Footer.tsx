import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { BUSINESS, telHref, waHref } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-grip text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-1">
            <span className="bg-tool text-grip px-2 py-0.5 rounded-md">Rh</span>
            <span>net</span>
          </Link>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Assistência técnica de eletrônicos em Jacareí. Notebooks, smartphones, tablets e mais.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black tracking-widest text-tool mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={telHref} className="flex items-start gap-2 hover:text-tool">
                <Phone className="size-4 mt-0.5 shrink-0" />
                <span>{BUSINESS.phone}</span>
              </a>
            </li>
            <li>
              <a href={waHref()} target="_blank" rel="noopener" className="flex items-start gap-2 hover:text-tool">
                <Mail className="size-4 mt-0.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>{BUSINESS.address.full}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black tracking-widest text-tool mb-4">Horário</h3>
          <ul className="space-y-1.5 text-sm">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span className="text-white/70">{h.day}</span>
                <span className={h.open ? "" : "text-white/70"}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black tracking-widest text-tool mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-tool">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-tool">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-tool">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-tool">Contato</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
