import { createFileRoute } from "@tanstack/react-router";
import retrato from "@/assets/retrato.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Andrade — Desenvolvedor Web Fullstack" },
      {
        name: "description",
        content:
          "Portfólio de Lucas Andrade, desenvolvedor full-stack: projetos, stack técnica e contato. Sistemas web de ponta a ponta, da interface ao deploy.",
      },
      { property: "og:title", content: "Lucas Andrade — Desenvolvedor Web Fullstack" },
      {
        property: "og:description",
        content:
          "Projetos, stack técnica e contato de um desenvolvedor full-stack focado em performance e observabilidade.",
      },
    ],
  }),
  component: Index,
});

const projetos = [
  {
    n: "01",
    nome: "Nimbus API",
    desc: "Gateways de dados com rate-limiting e métricas em tempo real.",
    tags: ["Go", "Postgres", "gRPC"],
    tone: "accent" as const,
    delay: "0ms",
  },
  {
    n: "02",
    nome: "Tessela UI",
    desc: "Design system acessível, 40+ componentes e tokens tipados.",
    tags: ["React", "TS", "Vite"],
    tone: "rose" as const,
    delay: "80ms",
  },
  {
    n: "03",
    nome: "Fluxo Deploy",
    desc: "Pipeline de CI/CD com preview ambientes e rollback automático.",
    tags: ["Node", "Docker", "K8s"],
    tone: "accent" as const,
    delay: "160ms",
  },
];

const stack = [
  { dir: "./frontend", itens: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"], delay: "0ms" },
  { dir: "./backend", itens: ["Node", "Go", "Postgres", "Redis", "GraphQL"], delay: "80ms" },
  { dir: "./infra", itens: ["Docker", "Kubernetes", "Terraform", "AWS", "Grafana"], delay: "160ms" },
];

const contatos = [
  { rotulo: "email", valor: "lucas@dev.io", href: "mailto:lucas@dev.io" },
  { rotulo: "github", valor: "github.com/lucasdev", href: "https://github.com" },
  { rotulo: "linkedin", valor: "/in/lucasandrade", href: "https://linkedin.com" },
];

function Index() {
  return (
    <div className="page-sunset relative min-h-screen overflow-hidden font-sans text-ink antialiased">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="animate-drift absolute -top-40 -left-32 size-[520px] rounded-full bg-accent/25 blur-3xl" />
        <div className="animate-drift absolute top-1/3 -right-40 size-[460px] rounded-full bg-rose/20 blur-3xl [animation-delay:-7s]" />
        <div className="animate-drift absolute bottom-[-10%] left-1/4 size-[420px] rounded-full bg-sun/40 blur-3xl [animation-delay:-3s]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-line bg-glass backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#topo" className="flex items-baseline gap-2 font-mono text-sm font-semibold tracking-tight">
            <span className="text-accent">~/</span>lucas.dev<span className="text-ink-soft">:~</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[13px] text-ink-soft sm:flex">
            <a href="#projetos" className="transition-colors hover:text-ink">
              (a) projetos
            </a>
            <a href="#stack" className="transition-colors hover:text-ink">
              (b) stack
            </a>
            <a href="#sobre" className="transition-colors hover:text-ink">
              (c) sobre
            </a>
          </nav>
          <a
            href="#contato"
            className="rounded-md bg-ink px-3.5 py-2 font-mono text-[13px] text-cream ring-1 ring-black/5 transition-colors hover:bg-accent"
          >
            iniciar →
          </a>
        </div>
      </header>

      <main id="topo" className="relative z-10 mx-auto max-w-6xl px-6">
        <section className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="animate-fadeup font-mono text-[13px] text-accent">
              &gt; hello@lucas.dev — status: <span className="text-ink-soft">disponível</span>
            </p>
            <h1 className="animate-fadeup mt-5 text-[clamp(3.2rem,9vw,6.5rem)] leading-[0.92] font-extrabold tracking-tighter text-balance [animation-delay:60ms]">
              Lucas Andrade<span className="animate-blink text-accent">_</span>
            </h1>
            <p className="animate-fadeup mt-6 max-w-[42ch] text-lg text-ink-soft text-pretty [animation-delay:120ms]">
              Desenvolvedor Full-Stack. Construo sistemas web de ponta a ponta — da interface ao deploy —
              com foco em performance e observabilidade.
            </p>
            <div className="animate-fadeup mt-8 flex flex-wrap items-center gap-3 [animation-delay:180ms]">
              <a
                href="#projetos"
                className="rounded-md bg-ink px-5 py-3 font-mono text-sm text-cream ring-1 ring-black/5 transition-colors hover:bg-accent"
              >
                ver projetos
              </a>
              <a
                href="#contato"
                className="rounded-md border border-line bg-glass px-5 py-3 font-mono text-sm text-ink backdrop-blur transition-colors hover:border-accent/50"
              >
                fale comigo
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="animate-fadeup rounded-xl border border-line bg-glass p-5 ring-1 ring-black/5 backdrop-blur-xl [animation-delay:220ms]">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-xs text-ink-soft">telemetria</span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-accent">
                  <span className="size-1.5 rounded-full bg-accent" />
                  live
                </span>
              </div>
              <dl className="mt-4 space-y-3 font-mono text-[13px]">
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">uptime</dt>
                  <dd>99.98%</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">p95 latência</dt>
                  <dd>128 ms</dd>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-soft">build</dt>
                    <dd>passou</dd>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                    <div className="animate-sweep h-full w-full rounded-full bg-accent" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">região</dt>
                  <dd>sa-east-1</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="projetos" className="border-t border-line py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-balance">(a) Projetos em destaque</h2>
            <span className="font-mono text-xs text-ink-soft">03 / produção</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projetos.map((p) => (
              <article
                key={p.n}
                style={{ animationDelay: p.delay }}
                className="animate-fadeup rounded-xl border border-line bg-glass p-5 ring-1 ring-black/5 backdrop-blur-xl transition-colors hover:border-accent/50"
              >
                <div className="mb-4 flex items-center justify-between font-mono text-[11px] text-ink-soft">
                  <span>{p.n}</span>
                  <span
                    className={
                      p.tone === "rose"
                        ? "rounded-full bg-rose/10 px-2 py-0.5 text-rose"
                        : "rounded-full bg-accent/10 px-2 py-0.5 text-accent"
                    }
                  >
                    ativo
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{p.nome}</h3>
                <p className="mt-2 font-mono text-[12px] leading-relaxed text-ink-soft">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded border border-line px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="border-t border-line py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-balance">(b) Stack técnica</h2>
            <span className="font-mono text-xs text-ink-soft">grouped</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {stack.map((g) => (
              <div
                key={g.dir}
                style={{ animationDelay: g.delay }}
                className="animate-fadeup rounded-xl border border-line bg-glass p-5 ring-1 ring-black/5 backdrop-blur-xl"
              >
                <p className="font-mono text-xs text-accent">{g.dir}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[12px]">
                  {g.itens.map((i) => (
                    <span key={i} className="rounded border border-line px-2.5 py-1">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="sobre" className="grid gap-10 border-t border-line py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src={retrato}
              alt="Retrato do desenvolvedor em luz dourada"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="md:col-span-8">
            <p className="font-mono text-xs text-accent">(c) sobre</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance">
              Onde a interface encontra a infraestrutura
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft text-pretty">
              São 6 anos transformando problemas complexos em sistemas simples de operar. Acredito que
              código é lido por pessoas primeiro — e que a melhor arquitetura é a que sua equipe entende
              às 3h da manhã.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6 font-mono">
              <div>
                <p className="text-2xl font-semibold tracking-tight">24+</p>
                <p className="mt-1 text-[11px] text-ink-soft">projetos</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight">6</p>
                <p className="mt-1 text-[11px] text-ink-soft">anos</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight">sa-east</p>
                <p className="mt-1 text-[11px] text-ink-soft">remoto</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-line py-20">
          <div className="rounded-2xl border border-line bg-glass p-8 ring-1 ring-black/5 backdrop-blur-xl sm:p-12">
            <p className="font-mono text-xs text-accent">$ contato --init</p>
            <h2 className="mt-3 max-w-[20ch] text-4xl leading-[0.95] font-extrabold tracking-tighter text-balance">
              Vamos construir algo.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contatos.map((c) => (
                <a
                  key={c.rotulo}
                  href={c.href}
                  className="rounded-lg border border-line bg-cream/40 px-4 py-4 font-mono text-sm transition-colors hover:border-accent/50"
                >
                  <span className="block text-[11px] text-ink-soft">{c.rotulo}</span>
                  <span className="mt-1 block">{c.valor}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-line py-8 font-mono text-[12px] text-ink-soft sm:flex-row">
          <span>© 2026 lucas.dev — feito com café e terminais</span>
          <span>
            build <span className="text-ink">v3.2.1</span> · sa-east-1
          </span>
        </footer>
      </main>
    </div>
  );
}
