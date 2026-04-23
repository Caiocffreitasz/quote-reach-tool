import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { StickyCallBar } from "@/components/StickyCallBar";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-chassis px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-grip">404</h1>
        <h2 className="mt-4 text-xl font-black uppercase">Página não encontrada</h2>
        <p className="mt-2 text-sm text-chassis-dark font-semibold">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-tool border-4 border-grip px-6 py-3 text-sm font-black uppercase tracking-wider text-grip shadow-brutal-sm hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rhnet — Assistência Técnica de Eletrônicos em Jacareí" },
      {
        name: "description",
        content:
          "Conserto de notebooks, smartphones e tablets em Jacareí - SP. Diagnóstico rápido, garantia e atendimento honesto. Ligue (12) 98282-0129.",
      },
      { name: "author", content: "FixTécnica" },
      { property: "og:title", content: "Rhnet — Assistência Técnica de Eletrônicos em Jacareí" },
      { property: "og:description", content: "Loja de informática de Jacareí" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Rhnet — Assistência Técnica de Eletrônicos em Jacareí" },
      { name: "description", content: "Loja de informática de Jacareí" },
      { name: "twitter:description", content: "Loja de informática de Jacareí" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/053f06f8-5274-49ee-a8db-a22501ea5a3b/id-preview-c5383fbc--ac5a5739-d547-4e02-9640-3dc453cb2ce9.lovable.app-1776904619657.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/053f06f8-5274-49ee-a8db-a22501ea5a3b/id-preview-c5383fbc--ac5a5739-d547-4e02-9640-3dc453cb2ce9.lovable.app-1776904619657.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "FixTécnica",
          image: "",
          telephone: "+5512982820129",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Santa Helena, 198",
            addressLocality: "Jacareí",
            addressRegion: "SP",
            postalCode: "12322-550",
            addressCountry: "BR",
          },
          openingHours: [
            "Mo 09:00-18:00",
            "Tu 09:00-18:00",
            "Th 09:00-18:00",
            "Fr 09:00-18:00",
            "Sa 09:00-12:00",
          ],
          priceRange: "$$",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.3", reviewCount: "12" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <StickyCallBar />
      <Toaster richColors position="top-center" />
    </>
  );
}
