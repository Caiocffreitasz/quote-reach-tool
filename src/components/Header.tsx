import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { BUSINESS, telHref } from "@/lib/business";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top status bar */}
      <div className="bg-grip text-white px-4 py-2 flex justify-between items-center text-xs sm:text-sm font-semibold tracking-wide">
        <div className="flex items-center gap-2">
          <span className="size-2.5 bg-success rounded-full animate-pulse" aria-hidden />
          <span className="uppercase">Oficina aberta · Recebendo aparelhos</span>
        </div>
        <div className="hidden md:block opacity-90">{BUSINESS.address.street} · {BUSINESS.address.city}/{BUSINESS.address.state}</div>
      </div>

      <header className="sticky top-0 z-40 bg-chassis border-b-4 border-grip">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
          <Link to="/" className="text-xl sm:text-2xl font-black tracking-tighter uppercase flex items-center gap-1">
            <span className="bg-tool px-2 py-0.5 rounded-md border-2 border-grip">Fix</span>
            <span>Técnica</span>
          </Link>

          <div className="hidden md:flex gap-6 font-bold uppercase tracking-wide text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="hover:text-chassis-dark transition-colors"
                activeProps={{ className: "text-grip underline underline-offset-4 decoration-tool decoration-4" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={telHref}
              className="hidden sm:flex items-center gap-2 font-black text-base bg-tool px-4 py-2 border-2 border-grip rounded-lg shadow-brutal-sm hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <Phone className="size-4" />
              {BUSINESS.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 border-2 border-grip rounded-lg bg-white"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden border-t-4 border-grip bg-white px-4 py-4 flex flex-col gap-3 font-bold uppercase tracking-wide">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2"
                activeProps={{ className: "text-grip underline underline-offset-4 decoration-tool decoration-4" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={telHref} className="bg-tool border-2 border-grip rounded-lg px-4 py-3 text-center shadow-brutal-sm">
              Ligar agora · {BUSINESS.phone}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
