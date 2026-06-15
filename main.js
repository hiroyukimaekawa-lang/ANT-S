document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       1. Header — スクロール時クラス付与
    ============================================================ */
    const header = document.querySelector('.header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 30);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ============================================================
       2. Hamburger Menu
    ============================================================ */
    const hamburger = document.getElementById('hamburger');
    const nav       = document.getElementById('nav');
    const overlay   = document.getElementById('nav-overlay');
    const navClose  = document.getElementById('nav-close');

    if (hamburger && nav) {
        const toggle = (open) => {
            hamburger.classList.toggle('is-active', open);
            nav.classList.toggle('is-active', open);
            if (overlay) overlay.classList.toggle('is-active', open);
            hamburger.setAttribute('aria-expanded', open);
            document.body.style.overflow = open ? 'hidden' : '';
        };

        hamburger.addEventListener('click', () => {
            toggle(!nav.classList.contains('is-active'));
        });

        if (navClose) navClose.addEventListener('click', () => toggle(false));
        if (overlay) overlay.addEventListener('click', () => toggle(false));

        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => toggle(false));
        });
    }

    /* ============================================================
       3. アクティブなナビリンクのハイライト
    ============================================================ */
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        if (link.dataset.page === currentPath) {
            link.classList.add('is-current');
        }
    });

    /* ============================================================
       4. Smooth Scroll
    ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const offset = header ? header.offsetHeight : 0;
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - offset,
                behavior: 'smooth'
            });
        });
    });

    /* ============================================================
       5. Scroll Reveal
    ============================================================ */
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -44px 0px' });

        reveals.forEach(el => observer.observe(el));
    }

    /* ============================================================
       6. Count-up Animation
    ============================================================ */
    const countUps = document.querySelectorAll('.count-up');
    if (countUps.length) {
        const countUpObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const targetEl = entry.target;
                const targetNum = parseInt(targetEl.getAttribute('data-target'), 10);
                let currentNum = 0;
                const duration = 1500;
                const intervalTime = 30;
                const steps = duration / intervalTime;
                const stepIncrement = Math.ceil(targetNum / steps);
                
                const timer = setInterval(() => {
                    currentNum += stepIncrement;
                    if (currentNum >= targetNum) {
                        targetEl.textContent = targetNum.toLocaleString();
                        clearInterval(timer);
                    } else {
                        targetEl.textContent = currentNum.toLocaleString();
                    }
                }, intervalTime);
                
                observer.unobserve(targetEl);
            });
        }, { threshold: 0.2 });

        countUps.forEach(el => countUpObserver.observe(el));
    }
});