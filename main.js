/**
 * ANT'S Corporate Site V2 — main.js
 * 全ページ共通: ページフェードイン / ハンバーガーメニュー /
 *               スムーススクロール / スクロールリビール / コンタクトフォーム
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       1. Page Fade-in / Loader Handling
    ============================================================ */
    const loader = document.getElementById('global-loader');
    if (loader) {
        // ロゴのアニメーションを1.8秒見せた後、ローダー全体を隠し、bodyをフェードイン
        setTimeout(() => {
            loader.classList.add('is-hidden');
            document.body.classList.add('is-loaded');
        }, 1800);
    } else {
        // ローダーがない下層ページは即座にフェードイン
        requestAnimationFrame(() => {
            document.body.classList.add('is-loaded');
        });
    }

    /* ============================================================
       2. Page Fade-out（リンク遷移時のフェードアウト）
       ※ 同一ページ内のアンカーリンクは除外
    ============================================================ */
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        // 外部リンク・アンカーのみ・空・#始まりは除外
        if (!href || href.startsWith('#') || href.startsWith('http') ||
            href.startsWith('mailto') || link.target === '_blank') return;

        link.addEventListener('click', function (e) {
            e.preventDefault();
            const dest = this.href;
            document.body.classList.remove('is-loaded');
            document.body.classList.add('is-leaving');
            setTimeout(() => { window.location.href = dest; }, 320);
        });
    });

    /* ============================================================
       3. Header — スクロール時クラス付与
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
       4. Hamburger Menu
    ============================================================ */
    const hamburger = document.getElementById('hamburger');
    const nav       = document.getElementById('nav');

    if (hamburger && nav) {
        const toggle = (open) => {
            hamburger.classList.toggle('is-active', open);
            nav.classList.toggle('is-open', open);
            hamburger.setAttribute('aria-expanded', open);
            document.body.style.overflow = open ? 'hidden' : '';
        };

        hamburger.addEventListener('click', () => {
            toggle(!nav.classList.contains('is-open'));
        });

        // ナビリンクでメニューを閉じる
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => toggle(false));
        });

        // Escape キー
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) toggle(false);
        });
    }

    /* ============================================================
       5. アクティブなナビリンクのハイライト
    ============================================================ */
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        if (link.dataset.page === currentPath) {
            link.classList.add('is-current');
        }
    });

    /* ============================================================
       6. Smooth Scroll（同一ページ内アンカーのみ）
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
       7. Scroll Reveal（IntersectionObserver）
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
       8. Contact Form（クライアントサイド）
       action 属性に Formspree URL を設定すれば実送信される
    ============================================================ */
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            // action が "#" か未設定のままならデモ送信
            const action = this.action;
            if (!action || action.endsWith('#') || action === window.location.href) {
                e.preventDefault();
                const btn = this.querySelector('[type="submit"]');
                btn.textContent = '送信しました。ありがとうございます。';
                btn.disabled = true;
                setTimeout(() => {
                    btn.textContent = '送 信 す る';
                    btn.disabled = false;
                    this.reset();
                }, 3500);
            }
            // 実URLが設定されていれば通常送信
        });
    }

});
