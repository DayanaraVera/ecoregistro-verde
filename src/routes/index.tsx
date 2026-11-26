import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Copy, Home, Info, Leaf, Monitor, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import infografia from "@/assets/infografia.jpg.asset.json";
import intro from "@/assets/ecoregistro-intro.png.asset.json";

const EXE_PATH = "C:\\Users\\ferna\\OneDrive\\Escritorio\\DAYANARAVERA\\EcoRegistroD.exe";
const EXE_URL = "file:///C:/Users/ferna/OneDrive/Escritorio/DAYANARAVERA/EcoRegistroD.exe";

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
  const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");

  const copyPath = async () => {
    setCopyStatus("copying");
    try {
      await navigator.clipboard.writeText(EXE_PATH);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

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

      <header className="intro-section">
        <img src={intro.url} alt="Planeta Tierra iluminado en tonos verdes entre estrellas" className="intro-background" fetchPriority="high" />
        <div className="intro-shade" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="intro-nav flex flex-wrap items-center justify-between gap-5 py-6">
            <a href="#inicio" className="flex items-center gap-3 text-foreground" aria-label="EcoRegistro, inicio">
              <Logo />
              <span className="min-w-0"><span className="block font-display text-xl font-extrabold sm:text-2xl">Eco<span className="text-secondary">Registro</span></span><span className="mt-1 block text-xs text-muted-foreground">Tecnología para cuidar el medio ambiente</span></span>
            </a>
            <nav aria-label="Navegación principal" className="flex flex-wrap gap-2">
              <Button asChild variant="outline" className="intro-nav-link"><a href="#inicio"><Home />Inicio</a></Button>
              <Button asChild variant="ghost" className="intro-nav-link"><a href="#proyecto"><Leaf />Proyecto</a></Button>
              <Button asChild variant="ghost" className="intro-nav-link"><a href="#informacion"><Info />Información</a></Button>
            </nav>
          </div>
          <div className="intro-copy max-w-xl">
            <p className="mb-3 font-heading text-2xl font-bold sm:text-3xl">Bienvenido a</p>
            <h1 className="intro-title font-display text-4xl font-extrabold text-secondary sm:text-6xl">EcoRegistro</h1>
            <p className="mt-6 max-w-sm border-l-2 border-secondary pl-4 font-heading text-lg italic text-foreground sm:text-xl">Una plataforma para <span className="text-secondary">explorar el mundo a través de la tecnología.</span></p>
            <Button type="button" onClick={() => document.getElementById("visualizacion")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })} className="btn-glow mt-8 h-auto max-w-full rounded-full px-6 py-4 font-display text-sm sm:text-base">
              <Monitor aria-hidden="true" />VER VISUALIZACIÓN<ArrowRight aria-hidden="true" />
            </Button>
          </div>
          <div className="intro-highlights grid gap-4 pb-8 sm:grid-cols-3">
            <div className="intro-highlight flex items-center gap-4 p-5"><Leaf className="h-10 w-10 shrink-0 text-secondary" /><div><h2 className="mb-2 font-heading font-bold text-secondary">Nuestro Objetivo</h2><p className="text-sm leading-5 text-foreground">Combinar tecnología y conocimiento para un mundo más informado.</p></div></div>
            <div className="intro-highlight flex items-center gap-4 p-5"><Monitor className="h-10 w-10 shrink-0 text-secondary" /><div><h2 className="mb-2 font-heading font-bold text-secondary">Tecnología</h2><p className="text-sm leading-5 text-foreground">Desarrollado con Visual Basic y diseño web moderno.</p></div></div>
            <div className="intro-highlight flex items-center gap-4 p-5"><Recycle className="h-10 w-10 shrink-0 text-secondary" /><div><h2 className="mb-2 font-heading font-bold text-secondary">Explora el Mundo</h2><p className="text-sm leading-5 text-foreground">Descubre, aprende y contribuye a un planeta mejor.</p></div></div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-12 px-5 py-12 sm:px-8 sm:py-16">
        <section id="proyecto" className="scroll-mt-6 border-b border-border pb-12" aria-labelledby="project-title">
          <h2 id="project-title" className="font-display text-3xl font-extrabold text-secondary">EcoRegistro</h2>
          <p className="mt-3 font-heading text-lg text-foreground">Tecnología para cuidar el medio ambiente</p>
          <p className="mt-6 max-w-4xl leading-8 text-muted-foreground">
            Cada material reciclable tiene una segunda oportunidad, pero solo si sabemos dónde termina.
            Nuestra aplicación en Visual Basic 6.0 registra materiales reciclables y rastrea su destino
            real para revelar qué se recupera, qué se pierde en el camino y cuál es recuperable. Para más
            información da click en "VER VISUALIZACIÓN" para registrarte en nuestro programa y saber
            cuántos Kg haz conseguido reciclar
          </p>
        </section>

          <section id="visualizacion" className="flex scroll-mt-6 flex-col justify-center gap-5 border-b border-border pb-12" aria-labelledby="vis-title">
            <h2 id="vis-title" className="font-display text-xl text-foreground sm:text-2xl">Visualización en Visual Basic</h2>
            <p className="text-muted-foreground">Abre la visualización interactiva del proyecto EcoRegistro.</p>
            <Button type="button" onClick={openVisualization} className="btn-glow h-auto w-full rounded-xl px-6 py-4 text-base font-semibold tracking-widest sm:w-auto sm:self-start">
              VER VISUALIZACIÓN
            </Button>
            {notice && (
              <div role="alert" className="rounded-xl border border-secondary/50 bg-muted p-4 text-sm text-foreground">
                Por seguridad, el navegador no permite ejecutar archivos .exe locales desde esta página.
                Para abrir EcoRegistro, pega esta ruta en el Explorador de archivos de Windows y pulsa Enter: <code className="break-all text-secondary">{EXE_PATH}</code>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <Button type="button" variant="outline" onClick={copyPath} disabled={copyStatus === "copying"}>
                    {copyStatus === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                    Copiar ruta
                  </Button>
                  <span role="status" aria-live="polite" className={copyStatus === "error" ? "text-destructive" : "text-secondary"}>
                    {copyStatus === "copied" && "Ruta copiada al portapapeles."}
                    {copyStatus === "error" && "No se pudo copiar la ruta. Selecciónala y cópiala manualmente."}
                  </span>
                </div>
              </div>
            )}
          </section>

        <section id="informacion" className="scroll-mt-6" aria-labelledby="info-title">
          <h2 id="info-title" className="mb-6 text-center font-display text-xl text-primary sm:text-2xl">Información Adicional</h2>
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
