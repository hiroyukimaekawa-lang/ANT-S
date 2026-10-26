(() => {
    const styleId = 'ants-responsive-unified';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        :root {
            --ants-ink: #11110f;
            --ants-paper: #f5f3ee;
            --ants-white: #fff;
            --ants-gold: #b69a73;
            --ants-line: rgba(17,17,15,.12);
        }

        html, body { width: 100%; max-width: 100%; overflow-x: clip; }
        body.is-nav-open { overflow: hidden; }
        img, video, iframe { max-width: 100%; }
        .has-local-image > .placeholder { opacity: 0 !important; visibility: hidden !important; }
        .salon-hiroin-img.has-local-image,
        .salon-split-img.has-local-image,
        .rakugei-visual.has-local-image,
        .content-visual.has-local-image {
            background-repeat: no-repeat !important;
            background-size: cover !important;
        }

        .mobile-reserve { display: none; }

        .ants-display-title {
            margin: 0;
            font-family: var(--font-serif);
            font-size: clamp(1.8rem, 3.2vw, 3rem);
            font-weight: 300;
            line-height: 1.25;
            letter-spacing: .05em;
        }

        .ants-section-head {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(280px, .72fr);
            gap: 28px clamp(40px, 8vw, 120px);
            align-items: end;
            margin-bottom: clamp(54px, 8vw, 96px);
        }
        .ants-section-head .section-label { grid-column: 1 / -1; }
        .ants-section-head > p { margin: 0 0 .35em; color: #68655f; line-height: 2; }
        .ants-section-head--center { display: block; max-width: 760px; text-align: center; }
        .ants-section-head--center > p { margin: 24px auto 0; }

        /* Local images */
        .page-index .hero-slide,
        .page-index .og-img,
        .page-index .rakugei-visual,
        .page-index .salon-hiroin-img {
            background-repeat: no-repeat !important;
            background-size: cover !important;
        }
        .page-index .hero-slide { animation: antsHeroFade 18s infinite ease-in-out !important; }
        .page-index .hero-slide--1 { animation-delay: 0s !important; }
        .page-index .hero-slide--2 { animation-delay: 6s !important; }
        .page-index .hero-slide--3 { animation-delay: 12s !important; }
        @keyframes antsHeroFade {
            0% { opacity: 0; transform: scale(1.045); }
            8% { opacity: 1; }
            30% { opacity: 1; transform: scale(1); }
            38% { opacity: 0; }
            100% { opacity: 0; }
        }

        /* History */
        .ants-history-section { position: relative; background: var(--ants-ink); color: #fff; overflow: hidden; }
        .ants-history-section::before {
            content: 'HISTORY'; position: absolute; top: -.18em; right: -.06em;
            font-family: var(--font-serif); font-size: clamp(7rem, 21vw, 22rem);
            font-weight: 300; line-height: 1; color: rgba(255,255,255,.025); pointer-events: none;
        }
        .ants-history-section .section-label { color: #d9bea0; }
        .ants-history-section .ants-section-head > p { color: rgba(255,255,255,.62); }
        .ants-history-list { position: relative; max-width: 1080px; }
        .ants-history-list::before {
            content: ''; position: absolute; top: 12px; bottom: 10px; left: 180px;
            width: 1px; background: rgba(255,255,255,.17);
        }
        .ants-history-item {
            position: relative; display: grid; grid-template-columns: 148px 64px minmax(0, 1fr);
            align-items: center; min-height: 104px; border-bottom: 1px solid rgba(255,255,255,.1);
        }
        .ants-history-year { display: flex; align-items: baseline; gap: 12px; font-family: var(--font-serif); }
        .ants-history-year strong { font-size: clamp(2rem, 4vw, 3.6rem); font-weight: 300; }
        .ants-history-year span { color: rgba(255,255,255,.42); font-family: var(--font-sans); font-size: .68rem; }
        .ants-history-dot {
            position: relative; z-index: 1; width: 10px; height: 10px; margin-left: 28px;
            border: 2px solid var(--ants-ink); border-radius: 50%; background: #d9bea0;
            box-shadow: 0 0 0 1px rgba(255,255,255,.3);
        }
        .ants-history-item p { margin: 0; color: rgba(255,255,255,.86); letter-spacing: .08em; line-height: 1.8; }
        .ants-history-list:not(.is-expanded) .ants-history-item:nth-child(n + 4) { display: none; }
        .ants-history-toggle-wrap { display: flex; justify-content: center; margin-top: 48px; }
        .ants-history-toggle {
            min-width: 190px; padding: 14px 30px; border: 1px solid rgba(255,255,255,.42);
            background: transparent; color: #fff; font-family: var(--font-sans); font-size: .75rem;
            letter-spacing: .14em; cursor: pointer; transition: background .3s ease, color .3s ease;
        }
        .ants-history-toggle:hover { background: #fff; color: var(--ants-ink); }

        /* Visiting beauty price */
        .ants-pricing-section { background: var(--ants-paper); }
        .ants-pricing-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(24px, 4vw, 52px); }
        .ants-price-card { overflow: hidden; background: #fff; box-shadow: 0 12px 44px rgba(38,33,27,.075); }
        .ants-price-image { min-height: 300px; background-position: center; background-size: cover; }
        .ants-price-body { padding: clamp(30px, 5vw, 54px); }
        .ants-price-type, .ants-contact-kicker {
            display: block; margin-bottom: 12px; color: #9f8260;
            font-family: var(--font-serif); font-size: .72rem; letter-spacing: .2em;
        }
        .ants-price-body h3 {
            margin: 0 0 18px; font-family: var(--font-serif); font-size: clamp(1.8rem, 3vw, 2.6rem);
            font-weight: 300; letter-spacing: .08em;
        }
        .ants-price-note { min-height: 4em; margin: 0 0 28px; color: #74716b; font-size: .78rem; line-height: 1.9; }
        .ants-price-list { margin: 0; border-top: 1px solid var(--ants-line); }
        .ants-price-list > div {
            display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; align-items: baseline;
            padding: 14px 0; border-bottom: 1px solid var(--ants-line);
        }
        .ants-price-list dt { color: #4e4c48; font-size: .82rem; line-height: 1.6; }
        .ants-price-list dd { margin: 0; font-family: var(--font-serif); font-size: 1.05rem; white-space: nowrap; }
        .ants-contact-panel {
            display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, .58fr); gap: clamp(36px, 7vw, 90px);
            align-items: center; margin-top: clamp(42px, 7vw, 86px); padding: clamp(36px, 6vw, 72px);
            background: var(--ants-ink); color: #fff;
        }
        .ants-contact-panel h3 {
            margin: 0 0 20px; font-family: var(--font-serif); font-size: clamp(1.8rem, 3.5vw, 3rem);
            font-weight: 300; line-height: 1.35;
        }
        .ants-contact-panel p { margin: 0; color: rgba(255,255,255,.62); font-size: .84rem; line-height: 2; }
        .ants-contact-actions { display: flex; flex-direction: column; }
        .ants-phone-button {
            display: flex; flex-direction: column; gap: 6px; padding: 22px 24px;
            border: 1px solid rgba(255,255,255,.55); color: #fff;
        }
        .ants-phone-button small { font-size: .68rem; letter-spacing: .12em; }
        .ants-phone-button strong { font-family: var(--font-serif); font-size: clamp(1.45rem, 3vw, 2.1rem); font-weight: 300; }
        .ants-phone-button span { font-size: .7rem; letter-spacing: .14em; }
        .ants-mail-link {
            display: flex; justify-content: space-between; gap: 12px; margin-top: 18px; padding-bottom: 8px;
            border-bottom: 1px solid rgba(255,255,255,.25); color: rgba(255,255,255,.83);
            font-size: .75rem; overflow-wrap: anywhere;
        }
        .ants-price-caution { margin-top: 16px; color: #77736c; font-size: .7rem; line-height: 1.8; }
        .ants-tel-inline { font-family: var(--font-serif); font-size: 1.15rem; letter-spacing: .06em; border-bottom: 1px solid var(--ants-line); }
        .ants-phone-button--light {
            max-width: 340px; margin-bottom: 32px; border-color: var(--ants-line); color: var(--ants-ink);
            background: var(--ants-paper); transition: border-color .3s ease, background .3s ease;
        }
        .ants-phone-button--light:hover { border-color: var(--ants-gold); background: #fff; }
        .ants-phone-button--light small { color: #77736c; }
        .ants-phone-button--light span { color: #9f8260; }

        /* Group companies */
        .ants-group-section { background: var(--ants-white); }
        .ants-group-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: clamp(24px, 4vw, 44px); max-width: 900px; }
        .ants-group-card {
            display: block; padding: clamp(32px, 5vw, 56px); border: 1px solid var(--ants-line);
            background: var(--ants-paper); color: var(--ants-ink);
            transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
        }
        .ants-group-card:hover { transform: translateY(-4px); border-color: var(--ants-gold); box-shadow: 0 16px 40px rgba(38,33,27,.09); }
        .ants-group-kicker { display: block; margin-bottom: 14px; color: #9f8260; font-family: var(--font-serif); font-size: .72rem; letter-spacing: .2em; }
        .ants-group-card h3 { margin: 0 0 14px; font-family: var(--font-serif); font-size: clamp(1.5rem, 2.6vw, 2.1rem); font-weight: 300; letter-spacing: .08em; }
        .ants-group-company { margin: 0 0 16px; color: #68655f; font-size: .76rem; letter-spacing: .06em; }
        .ants-group-desc { margin: 0 0 26px; color: #74716b; font-size: .8rem; line-height: 1.95; }
        .ants-group-link { display: inline-flex; gap: 8px; align-items: center; font-size: .74rem; letter-spacing: .14em; border-bottom: 1px solid var(--ants-gold); padding-bottom: 4px; }

        @media (max-width: 1080px) {
            .header-inner { padding-inline: 24px; }
            .nav-list { gap: 26px; }
        }

        @media (max-width: 768px) {
            :root { --header-h: 66px; }
            body { font-size: 14px; line-height: 1.85; background: #fff; }
            .container { padding-inline: 22px; }
            .section { padding: 76px 0; }

            /* Reference-image style header */
            .header {
                height: var(--header-h) !important; background: #fff !important; border-bottom: 0 !important;
                box-shadow: none !important; backdrop-filter: none !important;
            }
            .header-inner { position: relative; justify-content: center !important; padding: 0 66px !important; }
            .logo {
                position: absolute; left: 50%; transform: translateX(-50%); color: #111 !important;
                font-size: 1.08rem; letter-spacing: .18em; white-space: nowrap;
            }
            .logo::after { content: 'HAIR & RESORT'; display: block; margin-top: -3px; font-family: var(--font-sans); font-size: .42rem; letter-spacing: .12em; text-align: center; }
            .hamburger {
                display: flex !important; position: absolute; left: 10px; top: 11px; width: 44px !important;
                height: 44px !important; padding: 13px 9px; border: 0; z-index: 1002;
            }
            .hamburger span { background: #111 !important; height: 1px; }
            .mobile-reserve {
                display: flex; position: absolute; right: 0; top: 0; width: 66px; height: 66px;
                align-items: center; justify-content: center; background: #111; color: #fff;
                font-size: .62rem; letter-spacing: .08em; z-index: 1002;
            }
            .nav { width: min(88vw, 390px) !important; max-width: none !important; padding-top: 76px !important; }
            .nav-list { gap: 6px !important; padding: 18px 28px 40px !important; }
            .nav-link {
                min-height: 50px; display: flex !important; align-items: center; border-bottom: 1px solid rgba(0,0,0,.08);
                font-family: var(--font-serif); font-size: 1.08rem !important; font-weight: 400 !important;
            }
            .nav-close { top: 12px !important; left: 15px !important; width: 44px; height: 44px; }

            /* Hero: photo + black copy panel */
            .page-index .hero,
            .page-index .hero--rakugei {
                height: 77svh !important; min-height: 540px !important; margin-top: var(--header-h);
                overflow: visible !important; background: #ddd;
            }
            .page-index .hero-bg-slider { overflow: hidden; }
            .page-index .hero-slide { background-position: center center !important; }
            .page-index .hero-overlay { background: rgba(0,0,0,.08) !important; }
            .page-index .hero-copy-wrap--rakugei {
                top: auto !important; left: 9% !important; right: 0 !important; bottom: -96px !important;
                width: 91% !important; min-height: 180px; transform: none !important;
                align-items: flex-start !important; justify-content: center; padding: 24px 24px 22px;
                background: #111; text-align: left !important;
            }
            .page-index .hero-copy-wrap--rakugei .hero-copy-en {
                margin: 0 0 14px !important; font-size: .65rem !important; letter-spacing: .1em !important;
                text-transform: none !important; opacity: .7; white-space: nowrap !important;
            }
            .page-index .hero-copy-wrap--rakugei .hero-copy-jp {
                margin: 0; font-size: clamp(1.15rem, 5.4vw, 2rem) !important; line-height: 1.35 !important;
                letter-spacing: .05em !important; white-space: nowrap !important;
            }
            .page-index .hero-scroll-indicator { display: none; }

            /* Intro spacing after overlapping panel */
            .page-index .hero + .section { padding-top: 152px !important; padding-bottom: 64px !important; }
            .page-index .hero + .section .container { padding-inline: 30px; }
            .page-index .hero + .section h3 { font-size: .76rem !important; letter-spacing: .18em !important; margin-bottom: 30px !important; }
            .page-index .hero + .section p { font-size: .82rem !important; line-height: 2.15 !important; letter-spacing: .05em !important; }
            .page-index .hero + .section p br { display: none; }

            /* Editorial gallery like reference */
            .page-index .overlap-gallery-section { padding: 14px 0 84px !important; background: #fff; }
            .page-index .overlap-gallery-container {
                display: grid !important; height: auto !important; gap: 54px !important; padding: 0 22px;
            }
            .page-index .overlap-gallery-container .og-img {
                position: relative !important; inset: auto !important; width: 86% !important; height: auto !important;
                min-height: 0 !important; aspect-ratio: 4 / 3; transform: none !important;
            }
            .page-index .overlap-gallery-container .og-img:nth-child(2) { margin-left: auto; aspect-ratio: 3 / 4; }
            .page-index .overlap-gallery-container .og-img:nth-child(3) { width: 100% !important; aspect-ratio: 16 / 10; }
            .page-index .overlap-gallery-section .text-center { margin-top: 42px !important; }

            /* Business sections: photo then white editorial copy */
            .page-index .rakugei-overlap-wrap { gap: 100px !important; padding: 0 !important; }
            .page-index .rakugei-overlap,
            .page-index .rakugei-overlap--reverse { display: block !important; padding: 0 0 12px !important; }
            .page-index .rakugei-visual {
                width: calc(100% - 44px) !important; height: auto !important; min-height: 0 !important;
                aspect-ratio: 16 / 10 !important; margin: 0 22px !important;
                background-size: cover !important; background-position: center !important;
            }
            .page-index .rakugei-overlap:nth-child(even) .rakugei-visual {
                width: calc(100% - 44px) !important; margin: 0 22px !important;
                aspect-ratio: 16 / 10 !important;
            }
            .page-index .rakugei-vertical,
            .page-index .rakugei-overlap--reverse .rakugei-vertical {
                position: relative !important; inset: auto !important; transform: none !important; writing-mode: horizontal-tb !important;
                width: auto; margin: 34px 28px 0 !important; align-items: flex-start !important;
            }
            .page-index .rakugei-vertical .en { font-size: .64rem; letter-spacing: .18em; color: #999; }
            .page-index .rakugei-vertical .jp { margin-top: 6px; font-size: 1.05rem; letter-spacing: .14em; }
            .page-index .rakugei-body,
            .page-index .rakugei-overlap--reverse .rakugei-body {
                position: relative !important; inset: auto !important; transform: none !important; width: auto !important;
                margin: 18px 28px 0 !important; padding: 0 !important; background: transparent !important;
                box-shadow: none !important; text-align: left !important;
            }
            .page-index .rakugei-body h3 { margin-bottom: 18px; font-size: 1.45rem; line-height: 1.65; letter-spacing: .08em; }
            .page-index .rakugei-body p { font-size: .8rem; line-height: 2.05; }
            .page-index .rakugei-body p br { display: none; }
            .page-index .rakugei-btn-wrap { justify-content: flex-start !important; margin-top: 28px; }

            /* Salon cards */
            .page-index .salon-grid--2,
            .page-index .salon-grid--3 { grid-template-columns: 1fr !important; gap: 20px !important; padding: 0 22px; }
            .page-index .salon-grid--2 .salon-hiroin-img,
            .page-index .salon-grid--3 .salon-hiroin-img {
                height: auto !important; aspect-ratio: 16 / 10;
                background-size: cover !important;
            }
            .page-index .salon-hiroin-txt { min-height: 64px; padding-inline: 18px; }

            /* Shared typography/layout */
            .ants-section-head { display: block; margin-bottom: 48px; }
            .ants-section-head .ants-display-title { margin-bottom: 24px; }
            .ants-display-title { font-size: clamp(1.6rem, 7vw, 2.4rem); line-height: 1.3; }
            .section-title { margin-bottom: 44px; }

            .ants-history-list::before { left: 93px; }
            .ants-history-item { grid-template-columns: 76px 34px minmax(0,1fr); min-height: 92px; }
            .ants-history-year { display: block; }
            .ants-history-year strong { display: block; font-size: 1.8rem; }
            .ants-history-year span { display: block; margin-top: -4px; font-size: .58rem; }
            .ants-history-dot { width: 9px; height: 9px; margin-left: 13px; }
            .ants-history-item p { padding: 19px 0; font-size: .82rem; letter-spacing: .04em; }

            .ants-pricing-grid { grid-template-columns: 1fr; gap: 26px; }
            .ants-price-image { min-height: 0; aspect-ratio: 4 / 3; }
            .ants-price-note { min-height: 0; }
            .ants-contact-panel { grid-template-columns: 1fr; gap: 30px; margin-top: 42px; padding: 34px 24px; }
            .ants-phone-button { min-height: 104px; }

            .visit-hero { min-height: 82svh !important; height: 82svh !important; margin-top: var(--header-h); }
            .visit-hero-img img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
            .visit-hero-copy { left: 24px !important; right: 24px; bottom: 64px !important; }
            .visit-hero-title { font-size: clamp(2.2rem, 10vw, 3.2rem) !important; line-height: 1.35; }

            .salon-split-img, .visit-split-img {
                height: auto !important; min-height: 0 !important; aspect-ratio: 16 / 10;
                background-size: cover !important;
            }
            .salon-text-inner, .visit-text-inner { padding: 48px 24px !important; }
            .bg-num-item { padding-block: 46px !important; }
            .timeline { padding-left: 26px !important; }

            .footer { padding-top: 54px !important; }
            .footer-sitemap { gap: 26px !important; }
            .sitemap-main { min-height: 42px; display: flex; align-items: center; }
        }

        @media (max-width: 420px) {
            .container { padding-inline: 18px; }
            .section { padding: 64px 0; }
            .ants-price-body { padding: 28px 20px 34px; }
            .ants-price-list > div { gap: 10px; }
            .ants-price-list dt { font-size: .76rem; }
            .ants-price-list dd { font-size: .94rem; }
            .ants-history-list { padding-inline: 14px; }
            .ants-history-list::before { left: 84px; }
            .ants-history-item { grid-template-columns: 68px 30px minmax(0,1fr); }
            .ants-history-dot { margin-left: 10px; }
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
            .reveal { opacity: 1 !important; transform: none !important; }
        }
    `;
    document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const isTopPage = currentPath === 'index.html' || currentPath === '';
    const isVisitPage = currentPath === 'visit.html';
    document.body.classList.add(`page-${currentPath.replace('.html', '') || 'index'}`);

    const header = document.querySelector('.header');
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('nav-overlay');
    const navClose = document.getElementById('nav-close');

    if (header) {
        const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    const toggleNav = (open) => {
        hamburger?.classList.toggle('is-active', open);
        nav?.classList.toggle('is-active', open);
        overlay?.classList.toggle('is-active', open);
        hamburger?.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('is-nav-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger?.addEventListener('click', () => toggleNav(!nav?.classList.contains('is-active')));
    navClose?.addEventListener('click', () => toggleNav(false));
    overlay?.addEventListener('click', () => toggleNav(false));
    nav?.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => toggleNav(false)));

    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        if (link.dataset.page === currentPath) link.classList.add('is-current');
    });



    const headerInner = document.querySelector('.header-inner');
    if (headerInner && !headerInner.querySelector('.mobile-reserve') && !headerInner.querySelector('.header-reserve-btn')) {
        const reserve = document.createElement('a');
        reserve.className = 'mobile-reserve';
        reserve.href = 'salon.html';
        reserve.textContent = 'ご予約';
        reserve.setAttribute('aria-label', 'サロン一覧・ご予約');
        headerInner.appendChild(reserve);
    }

    const companyAddress = Array.from(document.querySelectorAll('p')).find(element => element.textContent.includes('〒251-0045'));
    if (companyAddress) companyAddress.textContent = companyAddress.textContent.replace('〒251-0045', '〒251-0047');

    // 店舗画像パス設定
    const images = {
        tsujido: ['assets/tujidou.jpg'],
        southernResort: ['assets/sazanbeach.jpg'],
        chigasakiEkimae: ['assets/tigasaki.jpg'],
        eni: ['assets/eni-hair.jpg'],
        lune: ['assets/lune.jpg'],
        hero2: ['assets/top_catch02.jpg'],
        hero3: ['assets/top_catch04.jpg'],
        visiting: ['assets/menu_visit_img01.jpg']
    };

    const setBackground = (element, imageCandidates, position = 'center') => {
        if (!element) return;
        const candidates = Array.isArray(imageCandidates) ? imageCandidates : [imageCandidates];

        const applyCandidate = index => {
            if (index >= candidates.length) return;
            const loader = new Image();
            loader.onload = () => {
                element.style.setProperty('background-image', `url("${candidates[index]}")`, 'important');
                element.style.setProperty('background-size', 'cover', 'important');
                element.style.setProperty('background-position', position, 'important');
                element.classList.add('has-local-image');
                element.querySelector('.placeholder')?.setAttribute('aria-hidden', 'true');
            };
            loader.onerror = () => applyCandidate(index + 1);
            loader.src = candidates[index];
        };

        applyCandidate(0);
    };

    const salonImageSettings = [
        {
            keywords: ['辻堂本店'],
            displayName: "ANT'S 辻堂本店",
            image: images.tsujido,
            position: 'center 42%'
        },
        {
            keywords: ['Southern-Resort', 'サザンビーチ'],
            displayName: "ANT'S Southern-Resort 茅ヶ崎店",
            image: images.southernResort,
            position: 'center 48%'
        },
        {
            keywords: ['茅ヶ崎駅前店'],
            displayName: "ANT'S 茅ヶ崎駅前店",
            image: images.chigasakiEkimae,
            position: 'center 45%'
        },
        {
            keywords: ['ENi hair'],
            displayName: "ENi hair and resort by ANT'S",
            image: images.eni,
            position: 'center 44%'
        },
        {
            keywords: ['Lune.'],
            displayName: "Lune. by ANT'S 茅ヶ崎北口店",
            image: images.lune,
            position: 'center 46%'
        }
    ];

    const findSalonSetting = text => salonImageSettings.find(setting =>
        setting.keywords.some(keyword => text.includes(keyword))
    );

    // トップページとSALON LISTページの店舗写真を同じ設定で管理します。
    document.querySelectorAll('.salon-hiroin-card').forEach(card => {
        const setting = findSalonSetting(card.textContent || '');
        if (!setting) return;
        setBackground(card.querySelector('.salon-hiroin-img'), setting.image, setting.position);
        const name = card.querySelector('.salon-hiroin-txt span:first-child');
        if (name) name.textContent = setting.displayName;
    });

    document.querySelectorAll('.salon-split-row').forEach(row => {
        const setting = findSalonSetting(row.querySelector('.salon-split-name')?.textContent || '');
        if (!setting) return;
        setBackground(row.querySelector('.salon-split-img'), setting.image, setting.position);
    });

    if (isTopPage) {
        const slider = document.querySelector('.hero-bg-slider');
        if (slider && !slider.querySelector('.hero-slide--3')) {
            const third = document.createElement('div');
            third.className = 'hero-slide hero-slide--3';
            third.innerHTML = '<div class="placeholder" style="width:100%;height:100%" aria-hidden="true"></div>';
            slider.appendChild(third);
        }

        setBackground(document.querySelector('.hero-slide--1'), images.tsujido, 'center 42%');
        setBackground(document.querySelector('.hero-slide--2'), images.hero2, 'center');
        setBackground(document.querySelector('.hero-slide--3'), images.hero3, 'center');

        const gallery = document.querySelectorAll('.overlap-gallery-container .og-img');
        [images.chigasakiEkimae, images.southernResort, images.eni]
            .forEach((src, index) => setBackground(gallery[index], src, 'center'));

        const business = document.querySelectorAll('.rakugei-visual');
        // 訪問美容事業ブロックは、実際の訪問美容の写真を使用します。
        setBackground(business[0], images.visiting, 'center 30%');
        // 元画像が横長のため、スマホでも16:10で表示し、顔が切れすぎない位置に調整。
        setBackground(business[1], images.tsujido, 'center 42%');
    }

    if (isVisitPage) {
        const heroImage = document.querySelector('.visit-hero-img img');
        if (heroImage) {
            heroImage.src = images.visiting[0];
            heroImage.alt = "ANT'Sの訪問美容サービス";
        }
    }

    if (isTopPage && !document.getElementById('history')) {
        const historyItems = [
            ['2008', 'H20', 'ANT’S Hair and Resort 本店オープン'],
            ['2011', 'H23', 'ANT’S Southern-Resort 店オープン'],
            ['2013', 'H25', '訪問美容オープン'],
            ['2016', 'H28', 'cozy resort by ANT’S 茅ヶ崎駅前店オープン'],
            ['2018', 'H30', '第1期 アンツアカデミー開校'],
            ['2021', 'R3', 'ANT’S Design Contest 2021 開催'],
            ['2022', 'R4', 'ENi hair and resort by ANT’S オープン'],
            ['2023', 'R5', '合同会社サンクフルネス設立（福祉事業）'],
            ['2025', 'R7', '眠活ヘッドストレッチ茅ヶ崎南口店オープン'],
            ['2026', 'R8', 'Lune. by ANT’S グランドオープン']
        ];

        const historySection = document.createElement('section');
        historySection.id = 'history';
        historySection.className = 'section ants-history-section';
        historySection.innerHTML = `
            <div class="container ants-section-head reveal">
                <span class="section-label">History</span>
                <h2 class="ants-display-title">歩みを重ね、<br>美と福祉の未来へ。</h2>
                <p>カントライブ創業から現在まで。サロン事業を起点に、教育・訪問美容・福祉へと活動の幅を広げてきました。</p>
            </div>
            <div class="container ants-history-list" id="ants-history-list">
                ${historyItems.map(([year, era, text]) => `
                    <article class="ants-history-item reveal">
                        <div class="ants-history-year"><strong>${year}</strong>${era ? `<span>${era}</span>` : ''}</div>
                        <div class="ants-history-dot" aria-hidden="true"></div>
                        <p>${text}</p>
                    </article>
                `).join('')}
            </div>
            <div class="container ants-history-toggle-wrap">
                <button class="ants-history-toggle" type="button" aria-expanded="false" aria-controls="ants-history-list">さらに見る</button>
            </div>
        `;

        const salonSection = Array.from(document.querySelectorAll('section')).find(section =>
            section.querySelector('.section-title')?.textContent.trim() === 'SALON LIST'
        );
        salonSection?.before(historySection);

        const historyList = historySection.querySelector('.ants-history-list');
        const historyToggle = historySection.querySelector('.ants-history-toggle');
        historyToggle?.addEventListener('click', () => {
            const expanded = historyList?.classList.toggle('is-expanded') || false;
            historyToggle.setAttribute('aria-expanded', String(expanded));
            historyToggle.textContent = expanded ? '閉じる' : 'さらに見る';
            if (expanded) {
                historyList?.querySelectorAll('.reveal').forEach(item => item.classList.add('is-visible'));
            }
        });
    }

    if (currentPath === 'beauty.html') {
        setBackground(document.querySelector('.content-visual'), images.tsujido, 'center 42%');
    }

    if (isVisitPage && !document.querySelector('.ants-pricing-section')) {
        // ▼訪問美容の料金表。正式な金額が決まり次第、右側の '¥—' を実際の税込価格に書き換えてください。
        const visitingMenu = {
            facility: [
                ['カット', '¥—'],
                ['カラー（白髪染め）', '¥—'],
                ['パーマ', '¥—'],
                ['シャンプー', '¥—'],
                ['顔そり', '¥—']
            ],
            home: [
                ['カット', '¥—'],
                ['カラー（白髪染め）', '¥—'],
                ['パーマ', '¥—'],
                ['シャンプー', '¥—'],
                ['ベッド上カット', '¥—']
            ]
        };
        const renderMenu = rows => `
            <dl class="ants-price-list">
                ${rows.map(([name, price]) => `<div><dt>${name}</dt><dd>${price}</dd></div>`).join('')}
            </dl>`;

        const pricingSection = document.createElement('section');
        pricingSection.className = 'section ants-pricing-section';
        pricingSection.id = 'price';
        pricingSection.innerHTML = `
            <div class="container ants-section-head ants-section-head--center reveal">
                <span class="section-label">Service & Contact</span>
                <h2 class="ants-display-title">訪問美容のご案内</h2>
                <p>施設訪問・在宅訪問の両方に対応しています。</p>
            </div>
            <div class="container ants-pricing-grid">
                <article class="ants-price-card reveal">
                    <div class="ants-price-image" style="background-image:url('${images.visiting[0]}')" role="img" aria-label="施設訪問美容のイメージ"></div>
                    <div class="ants-price-body">
                        <span class="ants-price-type">FACILITY</span><h3>施設訪問</h3>
                        <p class="ants-price-note">施設様とのお打ち合わせのうえ、メニュー・料金を設定いたします。<br>カット・カラー・パーマ・シャンプー・顔そり等、サロン同様のメニューに対応しております。</p>
                        ${renderMenu(visitingMenu.facility)}
                    </div>
                </article>
                <article class="ants-price-card reveal reveal-delay-1">
                    <div class="ants-price-image" style="background-image:url('${images.hero2[0]}')" role="img" aria-label="在宅訪問美容のイメージ"></div>
                    <div class="ants-price-body">
                        <span class="ants-price-type">HOME VISIT</span><h3>在宅訪問</h3>
                        <p class="ants-price-note">ご本人様・ご家族様とのお打ち合わせのうえ、メニュー・料金を設定いたします。<br>カット・カラー・パーマ・シャンプー・顔そり・ベッド上カット等に対応しております。</p>
                        ${renderMenu(visitingMenu.home)}
                    </div>
                </article>
            </div>
            <div class="container">
                <div class="ants-contact-panel reveal">
                    <div>
                        <span class="ants-contact-kicker">VISITING BEAUTY CONTACT</span>
                        <h3>訪問美容についてのお問い合わせ</h3>
                        <p>ご利用者様の状態、希望メニュー、訪問日時などをお伺いし、担当者から詳しくご案内します。</p>
                    </div>
                    <div class="ants-contact-actions">
                        <a class="ants-phone-button" href="tel:07012754106"><small>ビーサポ神奈川</small><strong>070-1275-4106</strong><span>電話をかける</span></a>
                        <a class="ants-mail-link" href="mailto:bs-kanagawa@be-sapo.jp">bs-kanagawa@be-sapo.jp <span>↗</span></a>
                        <p>担当：川内</p>
                    </div>
                </div>
                <p class="ants-price-caution">※金額は準備中です。料金の詳細はお問い合わせ時にご案内いたします。<br>※交通費・出張費が別途かかる場合がございます。</p>
            </div>
        `;

        const flowSection = Array.from(document.querySelectorAll('section')).find(section =>
            section.querySelector('.section-title')?.textContent.trim() === 'ご利用の流れ'
        );
        flowSection?.before(pricingSection);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            const id = anchor.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            event.preventDefault();
            const offset = header?.offsetHeight || 0;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        });
    });

    const reveals = document.querySelectorAll('.reveal, .reveal-slide-left, .reveal-slide-right, .-fadeUpTrigger');
    const makeVisible = (el) => el.classList.add('is-visible');
    
    if (!('IntersectionObserver' in window) || navigator.userAgent.includes('HeadlessChrome')) {
        reveals.forEach(makeVisible);
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                makeVisible(entry.target);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.02, rootMargin: '0px 0px 50px 0px' });
        reveals.forEach(element => revealObserver.observe(element));
    }

    /* ロゴ画像 (assets/logo) スクロール浮遊アニメーション */
    let lastScrollY = window.scrollY;
    let noteCooldown = false;
    const logoImages = [
        'assets/logo/sazan-logo.png',
        'assets/logo/eni-logo.png',
        'assets/logo/lune-logo.png',
        'assets/logo/tujidou.png'
    ];

    const spawnNoteParticle = (x, y) => {
        const img = document.createElement('img');
        img.className = 'note-particle-img';
        img.src = logoImages[Math.floor(Math.random() * logoImages.length)];
        img.alt = '';
        
        const randomX = (Math.random() - 0.5) * 50;
        const randomXEnd = randomX + (Math.random() - 0.5) * 70;
        const randomWidth = Math.floor(18 + Math.random() * 12); // 小さめ（18px〜30px）

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.width = `${randomWidth}px`;
        img.style.setProperty('--tx', `${randomX}px`);
        img.style.setProperty('--tx-end', `${randomXEnd}px`);
        
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 2400);
    };

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const delta = Math.abs(currentScrollY - lastScrollY);

        // 発生頻度を控えめに（距離しきい値を大きく＋ランダム確率判定＋クールダウン850ms）
        if (delta > 85 && !noteCooldown && Math.random() < 0.45) {
            noteCooldown = true;
            lastScrollY = currentScrollY;

            const spawnX = Math.random() * (window.innerWidth - 80) + 40;
            const spawnY = window.innerHeight * (0.65 + Math.random() * 0.25) + window.scrollY;
            spawnNoteParticle(spawnX, spawnY - window.scrollY);

            setTimeout(() => {
                noteCooldown = false;
            }, 850);
        }
    }, { passive: true });

    const countUps = document.querySelectorAll('.count-up');
    if (countUps.length && 'IntersectionObserver' in window) {
        const countObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const element = entry.target;
                const target = Number.parseInt(element.dataset.target || '0', 10);
                let current = 0;
                const step = Math.max(1, Math.ceil(target / 50));
                const timer = window.setInterval(() => {
                    current += step;
                    if (current >= target) {
                        element.textContent = target.toLocaleString();
                        window.clearInterval(timer);
                    } else {
                        element.textContent = current.toLocaleString();
                    }
                }, 30);
                observer.unobserve(element);
            });
        }, { threshold: .2 });
        countUps.forEach(element => countObserver.observe(element));
    }

    // Floating reserve bar visibility
    const floatingBar = document.getElementById('floating-bar');
    if (floatingBar) {
        const updateFloatingBar = () => {
            floatingBar.classList.toggle('is-visible', window.scrollY > 400);
        };
        window.addEventListener('scroll', updateFloatingBar, { passive: true });
        updateFloatingBar();
    }

    // Salon area filter tabs
    const salonTabs = document.querySelectorAll('.salon-tab-btn');
    const salonCards = document.querySelectorAll('.salon-card');
    salonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            salonTabs.forEach(t => t.classList.remove('is-active'));
            tab.classList.add('is-active');
            const filter = tab.dataset.filter;
            salonCards.forEach(card => {
                if (filter === 'all' || card.dataset.area === filter) {
                    card.style.display = '';
                    card.classList.add('is-visible');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Swiper track drag & auto-nudge
    const swiperTrack = document.getElementById('swiper-track');
    if (swiperTrack) {
        let isDown = false;
        let startX, scrollLeft;
        swiperTrack.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - swiperTrack.offsetLeft;
            scrollLeft = swiperTrack.scrollLeft;
        });
        swiperTrack.addEventListener('mouseleave', () => isDown = false);
        swiperTrack.addEventListener('mouseup', () => isDown = false);
        swiperTrack.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - swiperTrack.offsetLeft;
            const walk = (x - startX) * 1.5;
            swiperTrack.scrollLeft = scrollLeft - walk;
        });
    }
});
