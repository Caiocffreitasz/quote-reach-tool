import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS, telHref, waHref } from "@/lib/business";

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-grip border-t-4 border-tool grid grid-cols-2">
      <a href={telHref} className="flex items-center justify-center gap-2 py-3 text-tool font-black uppercase text-sm tracking-wide">
        <Phone className="size-4" /> Ligar
      </a>
      <a href={waHref()} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-3 bg-tool text-grip font-black uppercase text-sm tracking-wide border-l-4 border-tool">
        <MessageCircle className="size-4" /> WhatsApp
      </a>
      <span className="sr-only">{BUSINESS.phone}</span>
    </div>
  );
}
