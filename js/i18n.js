// Tradução PT/EN. O texto em português fica no HTML; aqui ficam as versões em inglês.
(() => {
  const EN = {
  "k1": "Featured",
  "k2": "Projects",
  "k3": "Skills",
  "k4": "Contact",
  "k5": "Brasília, Brazil · Computer Science, UniCEUB",
  "k6": "I build software",
  "k7": "from the <em>database</em>",
  "k8": "to the interface.",
  "k9": "I'm <strong>Eduardo Serra Pierre Vidal</strong>, a Computer Science student. I like building complete projects (frontend, backend and database) and I want to go deeper into <strong>software security</strong>.",
  "k10": "View projects <span aria-hidden=\"true\">↓</span>",
  "k11": "01 — Featured project",
  "k12": "SASBIO<br><em>Corporate Mental Health</em>",
  "k13": "Multi-tenant platform for screening psychosocial risks at work, aligned with Brazil's <strong>NR-01</strong> regulation. A company subscribes to a plan, registers employees and runs a questionnaire; it sees only aggregated indicators, never individual answers.",
  "k14": "JWT → role → active plan",
  "k15": "business rules (Go · Gin)",
  "k16": "pgx, filtered by company_id",
  "k17": "versioned migrations",
  "k18": "<span class=\"mono\">Service ⇄ Asaas</span> charge created by the service; payment confirmed through an idempotent webhook",
  "k19": "Architecture as described in the project README",
  "k20": "<b>RBAC</b> with three roles: system administrator, company HR and employee.",
  "k21": "<b>Isolation</b> per company (<code>company_id</code>) from the repository layer.",
  "k22": "<b>Checkout</b> with the Asaas gateway (sandbox) and automatic subscription activation.",
  "k23": "<b>Audit log</b> of administrative actions and dashboards per role.",
  "k24": "View code on GitHub <span aria-hidden=\"true\">↗</span>",
  "k25": "Status: in development",
  "k26": "02 — Projects",
  "k27": "Selected<br><em>work</em>",
  "k28": "All",
  "k29": "Professional",
  "k30": "Academic",
  "k31": "Personal",
  "k32": "Websites",
  "k33": "Professional",
  "k34": "Personal",
  "k35": "Website",
  "k36": "Academic",
  "k37": "Live · sasbio.com.br",
  "k38": "Live · rmadvassociados.com.br",
  "k39": "Live · josericardomarques.com.br",
  "k40": "Live · simoneazevdo.com.br",
  "k41": "SASBIO corporate website: hospital biosafety, biodecontamination and health.",
  "k42": "Corporate website for the law firm Ricardo Marques Advogados Associados.",
  "k43": "Personal portfolio of entrepreneur José Ricardo Marques.",
  "k44": "Website for Simone Azevedo.",
  "k45": "SASBIO · Mental Health",
  "k46": "Psychosocial risk screening (NR-01), multi-tenant, with webhook-based payments.",
  "k47": "Task manager with a Kanban board and a spin wheel: the wheel picks what to work on next, with the result decided and recorded on the server.",
  "k48": "Interactive menu with submenus; messages received and sent through Twilio.",
  "k49": "Selenium automation that removes likes and comments in batches. Educational use.",
  "k50": "Anisio David Website",
  "k51": "Modern corporate website for a law firm.",
  "k52": "Ricardo Marques Website",
  "k53": "Corporate website in plain HTML, CSS and JavaScript.",
  "k54": "Organization of my undergraduate journey: profile, courses, assignments and certificates.",
  "k55": "03 — About",
  "k56": "I study <em>Computer Science</em> at UniCEUB and I like creating solutions that solve real problems. I started as an intern, was hired as a contractor (PJ) in software development, and began answering directly for my deliverables.",
  "k57": "My professional journey began at <strong>SASBIO</strong> in <strong>May 2024</strong> as an intern. At first I worked in technology and operations support, helping solve problems and improve internal processes. I also worked with <strong>Excel and Power BI</strong>, building reports, dashboards and financial control tools.",
  "k58": "Over time I moved into <strong>web development</strong>: I took part in building and maintaining <strong>React</strong> websites, including the corporate sites of <strong>SASBIO</strong> and <strong>RM Advogados Associados</strong>. I also took part in researching and evaluating new technologies for the company. That is how I learned, in practice, how technology helps a business run and grow.",
  "k59": "After <strong>2 years as an intern</strong>, I was <strong>hired as a contractor (PJ) in software development</strong>, a role I held for about <strong>6 months</strong>. In that phase I worked on a <strong>SaaS for monitoring offices for NR-01 compliance</strong> (<a href=\"#destaque\">see the featured project</a>), working on my own and <strong>reporting directly</strong> on my deliverables.",
  "k60": "In parallel, I build personal and academic projects with Go, React, Vue.js, Laravel and both relational and non-relational databases. From here on, I want to go deeper into <strong>software security</strong>.",
  "k61": "May 2024",
  "k62": "Data",
  "k63": "2 years",
  "k64": "PJ · ~6 months",
  "k65": "Next",
  "k66": "Internship at SASBIO",
  "k67": "Technology and operations support; internal process improvement.",
  "k68": "Excel and Power BI",
  "k69": "Reports, dashboards and financial control.",
  "k70": "React and corporate websites",
  "k71": "SASBIO and RM Advogados Associados; research into new technologies.",
  "k72": "Internship completed",
  "k73": "From operations to web development, always widening the scope.",
  "k74": "Hired in software development",
  "k76": "Software security",
  "k77": "Where I want to go deeper.",
  "k78": "Where I want to go deeper",
  "k79": "Software <em>security</em>",
  "k80": "I want to build systems that are secure by design. In practice, this already shows in my projects: JWT authentication, role-based access control (RBAC), per-company data isolation and action auditing. The next step is to study in depth how to protect and test the software I build.",
  "k81": "Education",
  "k82": "Experience",
  "k83": "Study focus",
  "k84": "Languages",
  "k85": "Computer Science, UniCEUB",
  "k86": "SASBIO: 2-year internship (since May 2024), then PJ in development for about 6 months",
  "k87": "04 — Skills",
  "k88": "Tools<br><em>I use</em>",
  "k89": "Frameworks and libraries",
  "k90": "Databases",
  "k91": "Tools",
  "k92": "Knowledge",
  "k93": "Git and GitHub",
  "k94": "JWT authentication",
  "k95": "Access control (RBAC)",
  "k96": "HTML5 and CSS3",
  "k97": "List based on my GitHub profile and published repositories.",
  "k98": "05 — Contact",
  "k99": "Let's<br><em>talk?</em>",
  "k100": "HTML · CSS · JS, no frameworks",
  "k101": "Skip to content",
  "k900": "NR-01 monitoring SaaS (<a href=\"#destaque\">SASBIO · Mental Health</a>), as an individual project with direct reporting."
};

  /* Atributos e metadados: [seletor, atributo, português, inglês] */
  const ATTRS = [
    ['.skip-link', null, 'Ir para o conteúdo', 'Skip to content'],
    ['.logo', 'aria-label', 'Eduardo Vidal, início', 'Eduardo Vidal, home'],
    ['.nav', 'aria-label', 'Navegação principal', 'Main navigation'],
    ['h1', 'aria-label', 'Construo software do banco de dados à interface.', 'I build software from the database to the interface.'],
    ['.portrait img', 'alt', 'Retrato de Eduardo Serra Pierre Vidal', 'Portrait of Eduardo Serra Pierre Vidal'],
    ['.marquee', 'aria-label', 'Tecnologias utilizadas', 'Technologies used'],
    ['.arch', 'aria-label', 'Diagrama da arquitetura da plataforma', 'Platform architecture diagram'],
    ['.filters', 'aria-label', 'Filtrar projetos', 'Filter projects'],
    ['.path', 'aria-label', 'Evolução profissional', 'Professional journey'],
    ['.focus', 'aria-label', 'Foco de aprofundamento', 'Area of focus'],
    ['meta[name="description"]', 'content',
      'Portfólio de Eduardo Serra Pierre Vidal, estudante de Ciência da Computação (UniCEUB) com foco em desenvolvimento de software e interesse em segurança de software.',
      'Portfolio of Eduardo Serra Pierre Vidal, a Computer Science student (UniCEUB) focused on software development and interested in software security.'],
    ['meta[property="og:title"]', 'content', 'Eduardo Vidal | Desenvolvimento de software', 'Eduardo Vidal | Software development'],
    ['meta[property="og:description"]', 'content', 'Projetos em Go, React, Next.js, TypeScript e Python.', 'Projects in Go, React, Next.js, TypeScript and Python.'],
  ];
  const TITLE = ['Eduardo Vidal | Desenvolvimento de software', 'Eduardo Vidal | Software development'];

  const root = document.documentElement;
  const $$ = (s) => [...document.querySelectorAll(s)];
  $$('[data-i18n]').forEach((el) => { el.dataset.pt = el.innerHTML; });

  const apply = (lang) => {
    const en = lang === 'en';
    $$('[data-i18n]').forEach((el) => { el.innerHTML = en ? EN[el.dataset.i18n] : el.dataset.pt; });
    ATTRS.forEach(([sel, attr, pt, enTxt]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      if (attr) el.setAttribute(attr, en ? enTxt : pt); else el.textContent = en ? enTxt : pt;
    });
    document.title = TITLE[en ? 1 : 0];
    root.lang = en ? 'en' : 'pt-BR';
    $$('.lang-btn [data-l]').forEach((s) => s.classList.toggle('on', s.dataset.l === (en ? 'en' : 'pt')));
    const btn = document.querySelector('.lang-btn');
    if (btn) btn.setAttribute('aria-label', en ? 'Mudar para português' : 'Switch to English');
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  };

  let lang = 'pt';
  try { if (localStorage.getItem('lang') === 'en') lang = 'en'; } catch (e) { /* sem storage */ }
  apply(lang);

  const btn = document.querySelector('.lang-btn');
  if (btn) btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'pt' : 'en';
    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
    apply(lang);
  });
})();
