import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import retrato from "@/assets/retrato.png";

/*
  ============================================================
  EDITE PRIMEIRO ESTA ÁREA
  ============================================================
  Troque apenas estes dados para personalizar o portfólio.
*/
const perfil = {
  nome: "Eduardo Serra Pierre Vidal",
  titulo: "Desenvolvedor Full-Stack",
  resumo:
    "Desenvolvo sites, aplicações web, APIs e automações, conectando interfaces modernas a backends bem estruturados e soluções que resolvem problemas reais.",
  email: "eduardospvidal@gmail.com",
  githubUsuario: "eduspv",
  githubUrl: "https://github.com/eduspv",
  linkedin: "https://www.linkedin.com/in/eduardo-s-p-vidal/",
  localizacao: "Remoto",
  disponibilidade: "disponível para projetos e oportunidades",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${perfil.nome} — Portfólio` },
      {
        name: "description",
        content: `Portfólio de ${perfil.nome}: projetos, sites, GitHub, stack técnica e contato.`,
      },
      { property: "og:title", content: `${perfil.nome} — Portfólio` },
      {
        property: "og:description",
        content: perfil.resumo,
      },
    ],
  }),
  component: Index,
});

type Projeto = {
  n: string;
  nome: string;
  desc: string;
  tags: string[];
  links: {
    rotulo: string;
    href: string;
    primary: boolean;
  }[];
  status: "produção" | "desenvolvimento" | "estudo";
  tone: "accent" | "rose";
  delay: string;
};

const projetos: Projeto[] = [
  {
    n: "01",
    nome: "Chatbot WhatsApp",
    desc: "Chatbot para WhatsApp com menu interativo e automação de atendimento, usando Flask e Twilio para envio e recebimento de mensagens.",
    tags: ["Python", "Flask", "Twilio", "WhatsApp"],
    links: [
      {
        rotulo: "ver repositório ↗",
        href: "https://github.com/eduspv/Chatbot-Whatsapp",
        primary: true,
      },
    ],
    status: "estudo",
    tone: "accent",
    delay: "0ms",
  },
  {
    n: "02",
    nome: "Deep Dish",
    desc: "Plataforma de fila inteligente e reserva de mesas para restaurantes, com áreas para clientes e administração do estabelecimento.",
    tags: ["React", "TypeScript", "Laravel", "PostgreSQL", "Docker"],
    links: [
      {
        rotulo: "ver repositório ↗",
        href: "https://github.com/joaogpereira/deep-dish",
        primary: true,
      },
    ],
    status: "desenvolvimento",
    tone: "rose",
    delay: "80ms",
  },
  {
    n: "03",
    nome: "Plataforma de Saúde Mental",
    desc: "Plataforma web voltada à saúde mental ocupacional, com autenticação, dashboards, gestão de empresas, planos, diagnósticos e integração frontend-backend.",
    tags: ["React", "TypeScript", "Go", "PostgreSQL"],
    links: [
      {
        rotulo: "ver repositório ↗",
        href: "https://github.com/eduspv/Plataforma-Saude-Mental",
        primary: true,
      },
    ],
    status: "desenvolvimento",
    tone: "accent",
    delay: "160ms",
  },
  {
    n: "04",
    nome: "Pocket Planner",
    desc: "Aplicação full-stack de planejamento e organização pessoal, estruturada em dois repositórios: interface web em Vue e backend em Go.",
    tags: ["Vue", "TypeScript", "Go", "API REST", "Full-Stack"],
    links: [
      {
        rotulo: "frontend ↗",
        href: "https://github.com/eduspv/pocket-planner-vue",
        primary: true,
      },
      {
        rotulo: "backend ↗",
        href: "https://github.com/eduspv/pocket-planner-backend",
        primary: false,
      },
    ],
    status: "desenvolvimento",
    tone: "rose",
    delay: "240ms",
  },
];

const sites = [
  {
    nome: "SASBIO",
    categoria: "Site institucional",
    desc: "Desenvolvimento frontend do site institucional da SASBIO, com interface responsiva e apresentação das soluções e serviços da empresa.",
    tecnologias: ["React", "Tailwind CSS", "Frontend"],
    url: "https://www.sasbio.com.br",
  },
  {
    nome: "RM Advogados Associados",
    categoria: "Site institucional",
    desc: "Desenvolvimento frontend do site institucional do escritório RM Advogados Associados, com foco em apresentação profissional e navegação responsiva.",
    tecnologias: ["React", "Tailwind CSS", "Frontend"],
    url: "https://rmadvassociados.com.br",
  },
  {
    nome: "Index Participações",
    categoria: "Site corporativo",
    desc: "Site institucional corporativo desenvolvido e publicado em WordPress para apresentação da empresa e de suas áreas de atuação.",
    tecnologias: ["WordPress"],
    url: "https://indexparticipacoes.com.br",
  },
  {
    nome: "Simone Azevedo",
    categoria: "Site profissional",
    desc: "Desenvolvimento frontend de site profissional com interface responsiva e apresentação de conteúdo em uma experiência moderna.",
    tecnologias: ["React", "Tailwind CSS", "Frontend"],
    url: "https://www.simoneazevdo.com.br",
  },
];

const stack = [
  {
    dir: "./frontend",
    itens: ["React", "TypeScript", "Vite", "Tailwind", "HTML", "CSS"],
    delay: "0ms",
  },
  {
    dir: "./backend",
    itens: ["Go", "Node.js", "REST APIs", "PostgreSQL", "JWT"],
    delay: "80ms",
  },
  {
    dir: "./tools",
    itens: ["Git", "GitHub", "Docker", "Postman", "Figma", "VS Code"],
    delay: "160ms",
  },
];

const atuacao = [
  {
    titulo: "Desenvolvimento Web",
    desc: "Criação de interfaces responsivas, landing pages, sites institucionais e aplicações web.",
  },
  {
    titulo: "Backend & APIs",
    desc: "APIs REST, autenticação, regras de negócio, integrações e persistência de dados.",
  },
  {
    titulo: "Deploy & Integração",
    desc: "Publicação de aplicações, Git/GitHub, integração frontend-backend e manutenção de ambientes.",
  },
];

const contatos = [
  {
    rotulo: "email",
    valor: perfil.email,
    href: `mailto:${perfil.email}`,
  },
  {
    rotulo: "github",
    valor: `github.com/${perfil.githubUsuario}`,
    href: perfil.githubUrl,
  },
  {
    rotulo: "linkedin",
    valor: "LinkedIn",
    href: perfil.linkedin,
  },
];

const isExternalLink = (href?: string) => Boolean(href && href !== "#" && href.startsWith("http"));

function LinkButton({
  href,
  children,
  primary = false,
}: {
  href?: string | undefined;
  children: ReactNode;
  primary?: boolean;
}) {
  if (!href || href === "#") {
    return (
      <span
        className={`cursor-not-allowed rounded-md px-3 py-2 font-mono text-[12px] opacity-45 ${
          primary ? "bg-ink text-cream" : "border border-line"
        }`}
        title="Adicione o link no array deste item"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={isExternalLink(href) ? "_blank" : undefined}
      rel={isExternalLink(href) ? "noreferrer" : undefined}
      className={`rounded-md px-3 py-2 font-mono text-[12px] transition-colors ${
        primary
          ? "bg-ink text-cream hover:bg-accent"
          : "border border-line bg-glass hover:border-accent/50"
      }`}
    >
      {children}
    </a>
  );
}

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
            <span className="text-accent">~/</span>eduspv<span className="text-ink-soft">:~</span>
          </a>

          <nav className="hidden items-center gap-5 font-mono text-[12px] text-ink-soft lg:flex">
            <a href="#projetos" className="transition-colors hover:text-ink">
              projetos
            </a>
            <a href="#sites" className="transition-colors hover:text-ink">
              sites
            </a>
            <a href="#github" className="transition-colors hover:text-ink">
              github
            </a>
            <a href="#stack" className="transition-colors hover:text-ink">
              stack
            </a>
            <a href="#sobre" className="transition-colors hover:text-ink">
              sobre
            </a>
          </nav>

          <a
            href="#contato"
            className="rounded-md bg-ink px-3.5 py-2 font-mono text-[13px] text-cream ring-1 ring-black/5 transition-colors hover:bg-accent"
          >
            contato →
          </a>
        </div>
      </header>

      <main id="topo" className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <p className="animate-fadeup font-mono text-[13px] text-accent">
              &gt; portfolio --status: <span className="text-ink-soft">{perfil.disponibilidade}</span>
            </p>

            <h1 className="animate-fadeup mt-5 text-[clamp(3rem,8vw,6.2rem)] leading-[0.92] font-extrabold tracking-tighter text-balance [animation-delay:60ms]">
              {perfil.nome}
              <span className="animate-blink text-accent">_</span>
            </h1>

            <p className="animate-fadeup mt-5 font-mono text-sm text-accent [animation-delay:100ms]">
              {perfil.titulo}
            </p>

            <p className="animate-fadeup mt-5 max-w-[48ch] text-lg text-ink-soft text-pretty [animation-delay:120ms]">
              {perfil.resumo}
            </p>

            <div className="animate-fadeup mt-8 flex flex-wrap items-center gap-3 [animation-delay:180ms]">
              <a
                href="#projetos"
                className="rounded-md bg-ink px-5 py-3 font-mono text-sm text-cream ring-1 ring-black/5 transition-colors hover:bg-accent"
              >
                ver projetos
              </a>
              <a
                href={perfil.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-line bg-glass px-5 py-3 font-mono text-sm text-ink backdrop-blur transition-colors hover:border-accent/50"
              >
                abrir GitHub ↗
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="animate-fadeup rounded-xl border border-line bg-glass p-5 ring-1 ring-black/5 backdrop-blur-xl [animation-delay:220ms]">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-xs text-ink-soft">developer.profile</span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-accent">
                  <span className="size-1.5 rounded-full bg-accent" />
                  online
                </span>
              </div>

              <dl className="mt-4 space-y-3 font-mono text-[13px]">
                <div className="flex items-center justify-between gap-6">
                  <dt className="text-ink-soft">foco</dt>
                  <dd className="text-right">full-stack</dd>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <dt className="text-ink-soft">principal</dt>
                  <dd className="text-right">React + Go</dd>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <dt className="text-ink-soft">local</dt>
                  <dd className="text-right">{perfil.localizacao}</dd>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <dt className="text-ink-soft">portfolio</dt>
                    <dd>ready</dd>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                    <div className="animate-sweep h-full w-full rounded-full bg-accent" />
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="scroll-mt-20 border-t border-line py-20">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs text-accent">(01) trabalhos selecionados</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance">Projetos em destaque</h2>
            </div>
            <span className="font-mono text-xs text-ink-soft">{String(projetos.length).padStart(2, "0")} projetos</span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projetos.map((p) => (
              <article
                key={p.n}
                style={{ animationDelay: p.delay }}
                className="animate-fadeup flex min-h-[300px] flex-col rounded-xl border border-line bg-glass p-5 ring-1 ring-black/5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-accent/50"
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
                    {p.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight">{p.nome}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded border border-line px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {p.links.map((link) => (
                    <LinkButton key={link.href} href={link.href} primary={link.primary}>
                      {link.rotulo}
                    </LinkButton>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SITES */}
        <section id="sites" className="scroll-mt-20 border-t border-line py-20">
          <div className="mb-10">
            <p className="font-mono text-xs text-accent">(02) web</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Sites desenvolvidos</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Sites que desenvolvi e publiquei, reunindo projetos institucionais, corporativos e profissionais.
            </p>
          </div>

          <div className="space-y-4">
            {sites.map((site, index) => (
              <article
                key={`${site.nome}-${index}`}
                className="grid gap-5 rounded-xl border border-line bg-glass p-5 ring-1 ring-black/5 backdrop-blur-xl transition-colors hover:border-accent/50 md:grid-cols-12 md:items-center"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-xs text-accent">site.{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-mono text-[11px] text-ink-soft">{site.categoria}</p>
                </div>

                <div className="md:col-span-6">
                  <h3 className="text-lg font-semibold">{site.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{site.desc}</p>
                </div>

                <div className="md:col-span-3">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {site.tecnologias.map((tech) => (
                      <span key={tech} className="rounded border border-line px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-1 md:text-right">
                  <LinkButton href={site.url}>abrir ↗</LinkButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GITHUB */}
        <section id="github" className="scroll-mt-20 border-t border-line py-20">
          <div className="grid gap-8 rounded-2xl border border-line bg-glass p-7 ring-1 ring-black/5 backdrop-blur-xl md:grid-cols-12 md:p-10">
            <div className="md:col-span-8">
              <p className="font-mono text-xs text-accent">(03) open_source</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Meu GitHub</h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                Meus repositórios reúnem aplicações full-stack, APIs, automações e projetos de estudo. Acesse meu perfil para acompanhar o código e a evolução dos projetos.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={perfil.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-ink px-5 py-3 font-mono text-sm text-cream transition-colors hover:bg-accent"
                >
                  github.com/{perfil.githubUsuario} ↗
                </a>
                <a
                  href={`${perfil.githubUrl}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-line px-5 py-3 font-mono text-sm transition-colors hover:border-accent/50"
                >
                  ver repositórios
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-xl border border-line bg-cream/30 p-5 font-mono text-xs">
                <p className="text-ink-soft">$ git status</p>
                <p className="mt-4 text-accent">On branch main</p>
                <p className="mt-2 text-ink-soft">portfolio atualizado</p>
                <p className="mt-1 text-ink-soft">projetos documentados</p>
                <p className="mt-1 text-ink-soft">código versionado</p>
                <p className="mt-4">working tree clean ✓</p>
              </div>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="scroll-mt-20 border-t border-line py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs text-accent">(04) toolkit</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance">Stack técnica</h2>
            </div>
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

        {/* ATUAÇÃO */}
        <section id="atuacao" className="scroll-mt-20 border-t border-line py-20">
          <div className="mb-10">
            <p className="font-mono text-xs text-accent">(05) capabilities</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">O que eu faço</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {atuacao.map((item, index) => (
              <article key={item.titulo} className="rounded-xl border border-line bg-glass p-5 backdrop-blur-xl">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="scroll-mt-20 grid gap-10 border-t border-line py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src={retrato}
              alt={`Retrato de ${perfil.nome}`}
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>

          <div className="md:col-span-8">
            <p className="font-mono text-xs text-accent">(06) sobre</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance">Tecnologia aplicada a problemas reais</h2>
            <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-ink-soft text-pretty">
              Sou {perfil.nome}, desenvolvedor full-stack com foco em soluções web. Trabalho com desenvolvimento de sites, interfaces, APIs e aplicações completas, buscando transformar necessidades reais em produtos digitais funcionais, responsivos e fáceis de evoluir.
            </p>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-ink-soft text-pretty">
              Este portfólio reúne sites publicados, projetos colaborativos, automações e aplicações full-stack que representam minha experiência prática com frontend e backend.
            </p>

            <div className="mt-8 grid gap-3 border-t border-line pt-6 font-mono text-sm sm:grid-cols-3">
              <div>
                <p className="text-[11px] text-ink-soft">área</p>
                <p className="mt-1">Full-Stack</p>
              </div>
              <div>
                <p className="text-[11px] text-ink-soft">localização</p>
                <p className="mt-1">{perfil.localizacao}</p>
              </div>
              <div>
                <p className="text-[11px] text-ink-soft">status</p>
                <p className="mt-1 text-accent">{perfil.disponibilidade}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="scroll-mt-20 border-t border-line py-20">
          <div className="rounded-2xl border border-line bg-glass p-8 ring-1 ring-black/5 backdrop-blur-xl sm:p-12">
            <p className="font-mono text-xs text-accent">$ contato --init</p>
            <h2 className="mt-3 max-w-[22ch] text-4xl leading-[0.95] font-extrabold tracking-tighter text-balance">
              Tem um projeto ou oportunidade? Vamos conversar.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
              Escolha um dos canais abaixo. Para oportunidades profissionais, o LinkedIn e o GitHub também ajudam a conhecer melhor meu trabalho.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contatos.map((c) => (
                <a
                  key={c.rotulo}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-lg border border-line bg-cream/40 px-4 py-4 font-mono text-sm transition-all hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="block text-[11px] text-ink-soft">{c.rotulo}</span>
                  <span className="mt-1 block break-all">{c.valor}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-line py-8 font-mono text-[12px] text-ink-soft sm:flex-row">
          <span>© 2026 {perfil.nome} — portfólio pessoal</span>
          <a href="#topo" className="transition-colors hover:text-accent">
            voltar ao topo ↑
          </a>
        </footer>
      </main>
    </div>
  );
}
