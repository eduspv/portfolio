// PortfolioHUB — interações: intro, menu, revelação, progresso, filtro, botões magnéticos e relógio.
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* Intro curta (uma vez por sessão) */
  const intro = $('.intro');
  let seen = false;
  try { seen = sessionStorage.getItem('intro') === '1'; } catch (e) { /* sem storage */ }
  const start = () => {
    root.classList.add('ready');
    if (!intro) return;
    intro.classList.add('done');
    setTimeout(() => intro.classList.add('gone'), 900);
  };
  if (!intro || reduce || seen) {
    if (intro) intro.classList.add('gone');
    root.classList.add('ready');
  } else {
    try { sessionStorage.setItem('intro', '1'); } catch (e) { /* ignore */ }
    const out = $('.intro-count');
    const t0 = performance.now();
    const dur = 900;
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      out.textContent = String(Math.round(p * 100)).padStart(3, '0');
      if (p < 1) requestAnimationFrame(tick); else setTimeout(start, 120);
    };
    requestAnimationFrame(tick);
  }

  /* Menu móvel */
  const header = $('.site-header');
  const btn = $('.menu-btn');
  const menu = $('#menu');
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Fechar' : 'Menu';
  };
  btn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* Progresso de leitura e cabeçalho */
  const bar = $('.progress');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = root.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      header.classList.toggle('scrolled', scrollY > 24);
      ticking = false;
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Revelação ao rolar e seção ativa */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 60}ms`; io.observe(el); });

    const links = $$('.nav-links a:not(.nav-cta)');
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach((s) => spy.observe(s));
  } else {
    $$('.reveal').forEach((el) => el.classList.add('visible'));
  }

  /* Filtro de projetos por categoria */
  const filters = $('.filters');
  if (filters) {
    filters.hidden = false;
    const rows = $$('.row');
    filters.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      $$('button', filters).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const f = b.dataset.f;
      rows.forEach((r) => {
        r.hidden = !(f === 'todos' || r.dataset.cat === f);
        if (!r.hidden) r.classList.add('visible');
      });
      $$('.row:not([hidden]) .row-n').forEach((n, i) => { n.textContent = String(i + 1).padStart(2, '0'); });
    });
  }

  /* Botões magnéticos (apenas com mouse) */
  if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('.magnetic').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.18;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* Relógio de Brasília e ano */
  const clock = $('#clock');
  const fmt = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' });
  const upd = () => { clock.textContent = fmt.format(new Date()); };
  upd();
  setInterval(upd, 30000);
  $('#ano').textContent = new Date().getFullYear();
})();
