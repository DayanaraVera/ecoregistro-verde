import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import infografia from "@/assets/infografia.jpg.asset.json";
import mapa from "@/assets/mapamundi.svg.asset.json";

const EXE_PATH = "C:\\Users\\ferna\\OneDrive\\Escritorio\\DAYANARAVERA";
const EXE_URL = "file:///C:/Users/ferna/OneDrive/Escritorio/DAYANARAVERA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoRegistro — Tecnología para cuidar el medio ambiente" },
      { name: "description", content: "EcoRegistro: Tecnología para cuidar el medio ambiente. Visualización interactiva en Visual Basic — 3.º BTI." },
      { property: "og:title", content: "EcoRegistro — Tecnología para cuidar el medio ambiente" },
      { property: "og:description", content: "Visualización interactiva en Visual Basic del equipo 3.º BTI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <svg viewBox="0 0 48 48" className="h-14 w-14 shrink-0" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="none" stroke="var(--secondary)" strokeWidth="2" />
      <path d="M24 38c0-10 4-18 14-24-12 0-20 6-20 16 0 3 1 6 3 8" fill="var(--primary)" stroke="var(--secondary)" strokeWidth="1.5" />
      <circle cx="10" cy="24" r="2" fill="var(--secondary)" />
      <circle cx="38" cy="24" r="2" fill="var(--secondary)" />
    </svg>
  );
}

function Index() {
  const [notice, setNotice] = useState(false);

  const openVisualization = () => {
    setNotice(true);
    try {
      const w = window.open(EXE_URL, "_blank");
      if (!w) setNotice(true);
    } catch {
      setNotice(true);
    }
  };

  return (
    <div id="inicio" className="min-h-screen text-foreground">
      <div className="starfield" aria-hidden="true" />

      <header className="mx-auto max-w-6xl px-5 pt-10 pb-6">
        <div className="flex min-w-0 items-center gap-4">
          <Logo />
          <div className="min-w-0">
            <h1 className="font-display text-3xl font-extrabold tracking-wider text-primary sm:text-5xl" style={{ textShadow: "var(--glow-strong)" }}>
              EcoRegistro
            </h1>
            <p className="font-heading text-base text-secondary sm:text-xl">Tecnología para cuidar el medio ambiente</p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          EcoRegistro es el proyecto del equipo de Dayanara Vera, Jessica Carpio y Tifanny Cano
          (3.º de Bachillerato Técnico en Informática — 3.º BTI, 20/11/2026), acompañado de una
          visualización interactiva desarrollada en Visual Basic.
        </p>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-5 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="glass flex flex-col justify-center gap-5 p-6 sm:p-8" aria-labelledby="vis-title">
            <h2 id="vis-title" className="font-display text-xl text-foreground sm:text-2xl">Visualización en Visual Basic</h2>
            <p className="text-muted-foreground">Abre la visualización interactiva del proyecto EcoRegistro.</p>
            <button type="button" onClick={openVisualization} className="btn-glow w-full rounded-xl px-6 py-4 text-base font-semibold tracking-widest sm:w-auto sm:self-start">
              VER VISUALIZACIÓN
            </button>
            {notice && (
              <span role="alert" className="rounded-xl border border-secondary/50 bg-muted p-4 text-sm text-foreground">
                Si la visualización no se abre, el recurso no está disponible desde el navegador.
                Ábrela directamente en el equipo desde: <code className="break-all text-secondary">{EXE_PATH}</code>
              </span>
            )}
          </section>

          <aside className="glass flex items-center justify-center p-6" aria-label="Mapamundi">
            <div
              role="img"
              aria-label="Mapamundi"
              className="world-map aspect-[2/1] w-full"
              style={{ maskImage: `url(${mapa.url})`, WebkitMaskImage: `url(${mapa.url})` }}
            />
          </aside>
        </div>

        <section className="glass p-4 sm:p-8" aria-labelledby="info-title">
          <h2 id="info-title" className="mb-6 text-center font-display text-xl text-primary sm:text-2xl">Infografía</h2>
          <figure className="mx-auto max-w-2xl">
            <img src={infografia.url} alt="Infografía EcoRegistro: Tecnología para cuidar el medio ambiente" className="w-full rounded-xl border border-border" loading="lazy" />
          </figure>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>Dayanara Vera, Jessica Carpio y Tifanny Cano — 3.º BTI</p>
        <a href="#inicio" className="mt-2 inline-block text-secondary hover:underline">Volver al inicio ↑</a>
      </footer>
    </div>
  );
}
