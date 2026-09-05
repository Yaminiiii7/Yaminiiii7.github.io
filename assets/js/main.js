/* ==========================================================================
   main.js — reads DATA from data.js and renders the page.
   You normally never need to edit this file. Edit data.js instead.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------- helpers -- */

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const slot = (name) => $(`[data-bind="${name}"]`);

  // Escapes text before it goes into innerHTML, so an apostrophe or an
  // ampersand in data.js can never break the markup.
  const esc = (str) => String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  // Collapses the multi-line template strings in data.js into clean prose.
  const tidy = (str) => String(str).replace(/\s+/g, ' ').trim();

  const tagList = (items) =>
    `<ul class="tags">${items.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>`;

  // Splits a template string on blank lines into <p> elements, so a multi-
  // paragraph quote in data.js keeps its paragraph breaks.
  const paras = (str) => String(str)
    .split(/\n\s*\n/)
    .map((p) => tidy(p))
    .filter(Boolean)
    .map((p) => `<p>${esc(p)}</p>`)
    .join('');

  // "Deepika Nehra" -> "DN". Used for the quote avatars.
  const initials = (name) => String(name)
    .trim().split(/\s+/).slice(0, 2)
    .map((w) => w[0] || '')
    .join('').toUpperCase();

  const ICONS = {
    star:  '<svg viewBox="0 0 24 24"><path d="m12 3.6 2.55 5.4 5.85.8-4.3 4.1 1.1 5.9L12 17l-5.2 2.8 1.1-5.9-4.3-4.1 5.85-.8Z"/></svg>',
    link:  '<svg viewBox="0 0 24 24"><path d="M14 4.5h5.5V10M19 5l-8.5 8.5M17.5 14v4.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V8A1.5 1.5 0 0 1 6 6.5h4.5"/></svg>',
    cert:  '<svg viewBox="0 0 24 24"><path d="M12 3.2 19 5.6v5.5c0 4.3-2.9 8-7 9.7-4.1-1.7-7-5.4-7-9.7V5.6Z"/><path d="m9.2 11.8 2 2 3.6-3.8"/></svg>',
    award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="5.2"/><path d="M8.4 13.4 7 21l5-2.4L17 21l-1.4-7.6"/></svg>',
    mail:  '<svg viewBox="0 0 24 24"><rect x="3" y="5.2" width="18" height="13.6" rx="2.2"/><path d="m3.8 6.4 8.2 6.2 8.2-6.2"/></svg>',
    gh:    '<svg viewBox="0 0 24 24"><path d="M9.2 20.4v-2.9c-3 .6-3.7-1.4-3.7-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7 0-.7 0-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.3 10.3 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.1-2.5 5-4.9 5.3.4.4.7 1.1.7 2.2v3.3"/></svg>',
    li:    '<svg viewBox="0 0 24 24"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="2.6"/><path d="M7.5 10.3v6.4M7.5 7.6v.1M11.6 16.7v-6.4M11.6 13.1c0-1.5.9-2.4 2.2-2.4s2.2.9 2.2 2.6v3.4"/></svg>',
    pin:   '<svg viewBox="0 0 24 24"><path d="M12 21s6.2-5.3 6.2-10.2A6.2 6.2 0 0 0 5.8 10.8C5.8 15.7 12 21 12 21Z"/><circle cx="12" cy="10.4" r="2.3"/></svg>',
    note:  '<svg viewBox="0 0 24 24"><path d="M20.2 14.6a2.2 2.2 0 0 1-2.2 2.2H8.6L4.4 20V6.2A2.2 2.2 0 0 1 6.6 4h11.4a2.2 2.2 0 0 1 2.2 2.2Z"/></svg>',
    zoom:  '<svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.3"/><path d="M15.4 15.4 20 20M10.8 8.3v5M8.3 10.8h5"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',
    paper: '<svg viewBox="0 0 24 24"><path d="M6.5 3.2h7.2L18.5 8v12.8H6.5Z"/><path d="M13.4 3.4V8.2h4.9M9.2 12.4h6M9.2 15.6h6"/></svg>',
  };

  /* ------------------------------------------------------ profile / hero -- */

  function renderProfile() {
    const p = DATA.profile;

    document.title = `${p.name} — ${p.title}`;
    slot('nav-name').textContent    = p.name;
    slot('hero-name').textContent   = p.name;
    slot('hero-title').textContent  = p.title;
    slot('hero-location').textContent = p.location;
    slot('hero-summary').textContent  = tidy(p.summary);
    slot('footer-name').textContent = `© ${new Date().getFullYear()} ${p.name}`;

    slot('hero-stats').innerHTML = p.stats.map((s) => `
      <div>
        <dt>${esc(s.value)}</dt>
        <dd>${esc(s.label)}</dd>
      </div>`).join('');

    if (p.resume) {
      const btn = $('#resumeBtn');
      btn.href = p.resume;
      btn.hidden = false;
    }

    // No photo set? Leave it hidden and the hero text spans the full width.
    if (p.photo) {
      const fig = $('#heroPhoto');
      const img = $('#heroPhotoImg');
      img.src = p.photo;
      img.alt = p.photoAlt || p.name;
      fig.hidden = false;
      document.body.classList.add('has-photo');
    }
  }

  /* ------------------------------------------------------------ education -- */

  function renderEducation() {
    slot('education').innerHTML = DATA.education.map((e) => `
      <li>
        <strong>${esc(e.degree)}</strong>
        <span>${esc(e.school)}</span>
        ${e.detail ? `<em>${esc(e.detail)}</em>` : ''}
      </li>`).join('');
  }

  /* ----------------------------------------------------------- experience -- */

  function renderExperience() {
    slot('experience').innerHTML = DATA.experience.map((job) => `
      <article class="job ${job.current ? 'job--current' : ''} reveal">
        <span class="job__node" aria-hidden="true"></span>
        <div class="job__head">
          <h3 class="job__role">${esc(job.role)}</h3>
          <span class="job__period">${esc(job.period)}</span>
        </div>
        <p class="job__company">${esc(job.company)}</p>
        <ul class="job__points">
          ${job.points.map((pt) => `<li>${esc(tidy(pt))}</li>`).join('')}
        </ul>
        ${job.stack ? tagList(job.stack) : ''}
      </article>`).join('');
  }

  /* -------------------------------------------------------------- projects -- */

  // Featured projects float to the top, everything else keeps data.js order.
  const orderedProjects = () =>
    [...DATA.projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  function projectCard(pr) {
    return `
      <article class="card ${pr.featured ? 'card--featured' : ''} reveal" data-tag="${esc(pr.tag)}">
        <div class="card__top">
          <span class="card__tag">${esc(pr.tag)}</span>
          ${pr.featured ? `<span class="card__star" title="Featured project" aria-label="Featured">${ICONS.star}</span>` : ''}
        </div>

        <h3 class="card__title">${esc(pr.title)}</h3>
        <p class="card__blurb">${esc(tidy(pr.blurb))}</p>

        ${pr.highlights ? `<ul class="card__highlights">
          ${pr.highlights.map((h) => `<li>${esc(tidy(h))}</li>`).join('')}
        </ul>` : ''}

        <div class="card__foot">
          ${tagList(pr.stack)}
          <a class="card__link" href="${esc(pr.repo)}" target="_blank" rel="noopener">
            View source ${ICONS.link}
          </a>
        </div>
      </article>`;
  }

  function renderProjects() {
    slot('projects').innerHTML = orderedProjects().map(projectCard).join('');
    renderFilters();
  }

  function renderFilters() {
    const counts = DATA.projects.reduce((acc, p) => {
      acc[p.tag] = (acc[p.tag] || 0) + 1;
      return acc;
    }, {});

    const buttons = [
      `<button type="button" class="filter is-active" data-filter="all" aria-pressed="true">All<span class="filter__count">${DATA.projects.length}</span></button>`,
      ...Object.keys(counts).map((tag) =>
        `<button type="button" class="filter" data-filter="${esc(tag)}" aria-pressed="false">${esc(tag)}<span class="filter__count">${counts[tag]}</span></button>`),
    ];

    const bar = $('#filters');
    bar.innerHTML = buttons.join('');

    bar.addEventListener('click', (ev) => {
      const btn = ev.target.closest('.filter');
      if (!btn) return;

      $$('.filter', bar).forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });

      const want = btn.dataset.filter;
      let shown = 0;

      $$('.card').forEach((card) => {
        const match = want === 'all' || card.dataset.tag === want;
        card.hidden = !match;
        if (match) shown++;
      });

      $('#projectsEmpty').hidden = shown > 0;
    });
  }

  /* ---------------------------------------------------------- testimonials -- */

  function renderTestimonials() {
    const host = slot('testimonials');
    const list = DATA.testimonials || [];

    // No testimonials? Hide the whole section rather than leave an empty gap.
    if (!list.length) {
      const section = document.getElementById('recognition');
      if (section) section.hidden = true;
      return;
    }

    host.innerHTML = list.map((t) => {
      const cls = ['quote', 'reveal'];
      if (t.featured) cls.push('quote--featured');
      if (t.award)    cls.push('quote--award');

      // Initials only make sense for a real person. Awards get a trophy,
      // unattributed notes get a message icon.
      let badge;
      if (t.award) {
        badge = `<span class="quote__avatar quote__avatar--award" aria-hidden="true">${ICONS.award}</span>`;
      } else if (t.note) {
        badge = `<span class="quote__avatar quote__avatar--icon" aria-hidden="true">${ICONS.note}</span>`;
      } else {
        badge = `<span class="quote__avatar" aria-hidden="true">${esc(initials(t.author))}</span>`;
      }

      const meta = [t.role, t.company].filter(Boolean).join(' · ');

      // Certificate scans render as a thumbnail that opens in the lightbox.
      const shot = t.image ? `
        <button type="button" class="quote__shot" data-full="${esc(t.image)}"
                data-alt="${esc(t.alt || t.author)}" aria-label="Enlarge: ${esc(t.alt || t.author)}">
          <img src="${esc(t.image)}" alt="${esc(t.alt || t.author)}" loading="lazy" decoding="async" />
          <span class="quote__zoom" aria-hidden="true">${ICONS.zoom}</span>
        </button>` : '';

      // Optional verification / report links.
      const links = (t.links || []).length ? `
        <p class="quote__links">
          ${t.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">
            ${esc(l.label)} ${ICONS.link}
          </a>`).join('')}
        </p>` : '';

      return `
        <figure class="${cls.join(' ')}">
          <span class="quote__mark" aria-hidden="true">&ldquo;</span>
          ${shot}
          <blockquote class="quote__body">${paras(t.quote)}</blockquote>
          ${links}
          <figcaption class="quote__author">
            ${badge}
            <span>
              <span class="quote__name">${esc(t.author)}</span>
              ${meta ? `<span class="quote__role">${esc(meta)}</span>` : ''}
            </span>
          </figcaption>
        </figure>`;
    }).join('');
  }

  /* ---------------------------------------------------------- publications -- */

  function renderPublications() {
    const host = slot('publications');
    const list = DATA.publications || [];

    if (!list.length) {
      const section = document.getElementById('publications');
      if (section) section.hidden = true;
      return;
    }

    // Matches the author entry against profile.name so your own name renders
    // bold, the way it's conventionally marked in a publication list.
    const me = String(DATA.profile.name).toLowerCase().replace(/[^a-z]/g, '');
    const isMe = (a) => a.toLowerCase().replace(/[^a-z]/g, '') === me;

    host.innerHTML = list.map((p) => {
      const authors = (p.authors || [])
        .map((a) => isMe(a) ? `<strong>${esc(a)}</strong>` : esc(a))
        .join(', ');

      // Empty fields drop out instead of leaving stray separators.
      const cite = [p.venue, p.details, p.year].filter(Boolean).map(esc).join(' · ');

      return `
        <article class="pub reveal">
          <span class="pub__ico" aria-hidden="true">${ICONS.paper}</span>
          <div class="pub__body">
            <h3 class="pub__title">${esc(p.title)}</h3>
            ${authors ? `<p class="pub__authors">${authors}</p>` : ''}
            ${cite ? `<p class="pub__cite">${cite}</p>` : ''}
            ${p.abstract ? `<p class="pub__abstract">${esc(tidy(p.abstract))}</p>` : ''}
            ${p.tags ? tagList(p.tags) : ''}
            ${p.url ? `<a class="card__link pub__link" href="${esc(p.url)}" target="_blank" rel="noopener">
              Read the paper ${ICONS.link}
            </a>` : ''}
          </div>
        </article>`;
    }).join('');
  }

  /* -------------------------------------------------------------- lightbox -- */

  // Click any certificate thumbnail to view it full size. Closes on Escape,
  // on backdrop click, or via the close button. Returns focus where it came
  // from so keyboard users don't get dumped at the top of the page.
  function initLightbox() {
    // Anything carrying data-full opens here — recognition thumbnails and
    // credential cards alike.
    const thumbs = $$('[data-full]');
    if (!thumbs.length) return;

    const box = document.createElement('div');
    box.className = 'lightbox';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Certificate viewer');
    box.innerHTML = `
      <button type="button" class="lightbox__close" aria-label="Close">${ICONS.close}</button>
      <figure class="lightbox__figure">
        <img class="lightbox__img" src="" alt="" />
        <figcaption class="lightbox__cap"></figcaption>
      </figure>`;
    document.body.appendChild(box);

    const img    = $('.lightbox__img', box);
    const cap    = $('.lightbox__cap', box);
    const closeB = $('.lightbox__close', box);
    let opener   = null;

    function open(src, alt, from) {
      opener  = from;
      img.src = src;
      img.alt = alt;
      cap.textContent = alt;
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      closeB.focus();
    }

    function close() {
      box.hidden = true;
      document.body.style.overflow = '';
      img.src = '';
      if (opener) { opener.focus(); opener = null; }
    }

    thumbs.forEach((btn) => btn.addEventListener('click', () =>
      open(btn.dataset.full, btn.dataset.alt, btn)));

    closeB.addEventListener('click', close);
    // Backdrop click only — clicking the image itself shouldn't close it.
    box.addEventListener('click', (ev) => { if (ev.target === box) close(); });
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && !box.hidden) close();
    });
  }

  /* ---------------------------------------------------------------- skills -- */

  function renderSkills() {
    slot('skills').innerHTML = DATA.skills.map((g) => `
      <section class="skillgroup reveal">
        <h3 class="skillgroup__title">${esc(g.group)}</h3>
        ${tagList(g.items)}
      </section>`).join('');
  }

  /* ----------------------------------------------------------- credentials -- */

  function renderCredentials() {
    slot('credentials').innerHTML = DATA.credentials.map((c) => {
      const isAward = c.type === 'award';
      const body = `
        <span class="cred__ico" aria-hidden="true">${isAward ? ICONS.award : ICONS.cert}</span>
        <span class="cred__text">
          <span class="cred__name">${esc(c.name)}</span>
          <span class="cred__sub">${esc(c.sub)}</span>
        </span>`;

      const cls = `cred ${isAward ? 'cred--award' : ''} reveal`;
      const label = c.alt || `${c.name} certificate`;

      // An image opens in the lightbox; a url opens in a new tab; neither
      // leaves the card as plain, non-interactive markup.
      if (c.image) {
        return `<button type="button" class="${cls} cred--open" data-full="${esc(c.image)}"
                  data-alt="${esc(label)}" aria-label="View ${esc(c.name)} certificate">
                  ${body}<span class="cred__cue" aria-hidden="true">${ICONS.zoom}</span>
                </button>`;
      }
      if (c.url) {
        return `<a class="${cls} cred--open" href="${esc(c.url)}" target="_blank" rel="noopener">
                  ${body}<span class="cred__cue" aria-hidden="true">${ICONS.link}</span>
                </a>`;
      }
      return `<article class="${cls}">${body}</article>`;
    }).join('');
  }

  /* --------------------------------------------------------------- contact -- */

  function renderContact() {
    const p = DATA.profile;
    const cards = [
      { label: 'Email',    value: p.email,    href: `mailto:${p.email}`, ico: ICONS.mail, ext: false },
      { label: 'GitHub',   value: '@' + p.github.split('/').filter(Boolean).pop(), href: p.github,   ico: ICONS.gh, ext: true },
      { label: 'LinkedIn', value: 'Connect on LinkedIn', href: p.linkedin, ico: ICONS.li, ext: true },
      { label: 'Location', value: p.location, href: null, ico: ICONS.pin, ext: false },
    ];

    slot('contact').innerHTML = cards.map((c) => {
      const body = `
        <span class="contactcard__ico" aria-hidden="true">${c.ico}</span>
        <div>
          <p class="contactcard__label">${esc(c.label)}</p>
          <p class="contactcard__value">${esc(c.value)}</p>
        </div>`;

      return c.href
        ? `<a class="contactcard reveal" href="${esc(c.href)}"${c.ext ? ' target="_blank" rel="noopener"' : ''}>${body}</a>`
        : `<div class="contactcard reveal">${body}</div>`;
    }).join('');
  }

  /* ----------------------------------------------------------------- theme -- */

  function initTheme() {
    const root   = document.documentElement;
    const toggle = $('#themeToggle');

    // Saved choice wins; otherwise follow the OS preference.
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) { /* private mode */ }

    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    root.setAttribute('data-theme', saved || (prefersLight ? 'light' : 'dark'));

    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
  }

  /* ------------------------------------------------------------------- nav -- */

  function initNav() {
    const nav      = $('#nav');
    const links    = $('.nav__links');
    const menuBtn  = $('#menuToggle');
    const progress = $('#navProgress');

    // Mobile menu
    menuBtn.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', (ev) => {
      if (ev.target.tagName === 'A') {
        links.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Shadow-on-scroll + reading progress bar
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Scroll-spy: highlight the nav link for the section you're reading
    const navLinks = $$('.nav__links a');
    const sections = navLinks
      .map((a) => document.getElementById(a.getAttribute('href').slice(1)))
      .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) =>
            a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
        });
      }, { rootMargin: '-45% 0px -50% 0px' });

      sections.forEach((s) => spy.observe(s));
    }
  }

  /* ---------------------------------------------------------------- reveal -- */

  function initReveal() {
    const items = $$('.reveal');

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        // Small stagger so grids cascade instead of popping in all at once.
        entry.target.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    items.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ boot -- */

  function boot() {
    if (typeof DATA === 'undefined') {
      console.error('data.js did not load — check the <script> path in index.html.');
      return;
    }

    initTheme();
    renderProfile();
    renderEducation();
    renderExperience();
    renderProjects();
    renderTestimonials();
    renderSkills();
    renderCredentials();
    renderPublications();
    renderContact();
    initLightbox();   // after every render: it binds all [data-full] elements
    initNav();
    initReveal();   // must run last: it observes the nodes rendered above
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();
