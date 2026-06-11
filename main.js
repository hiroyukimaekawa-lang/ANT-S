/**
 * ANT'S Corporate Site V2
 * main.js — スムーススクロール / ハンバーガーメニュー / スクロールリビール のみ
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       1. Header — スクロール時のクラス付与
    ============================================================ */
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }, { passive: true });


    /* ============================================================
       2. Hamburger Menu — モバイル開閉
    ============================================================ */
    const hamburger = document.getElementById('hamburger');
    const nav       = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('is-open');
            hamburger.classList.toggle('is-active');
            hamburger.setAttribute('aria-expanded', isOpen);
            // メニュー開放中は背景スクロールを止める
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // ナビリンクをクリックしたら閉じる
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
                hamburger.classList.remove('is-active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Escape キーで閉じる
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                nav.classList.remove('is-open');
                hamburger.classList.remove('is-active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }


    /* ============================================================
       3. Smooth Scroll — アンカーリンクの滑らか移動
    ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // ページトップは通常動作に任せる

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const headerHeight = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({ top, behavior: 'smooth' });
        });
    });


    /* ============================================================
       4. Scroll Reveal — IntersectionObserver でフェードイン
    ============================================================ */
    const revealEls = document.querySelectorAll('.reveal');

    if (revealEls.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target); // 一度表示したら監視解除
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -48px 0px'
        });

        revealEls.forEach(el => observer.observe(el));
    }


    /* ============================================================
       5. Contact Form — シンプルなクライアントサイドバリデーション
         （送信先が確定したら action 属性に Formspree 等の URL を設定）
    ============================================================ */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // action="#" のままの場合はデモ動作
            if (this.action.endsWith('#') || this.action === window.location.href) {
                e.preventDefault();
                const btn = this.querySelector('.btn--submit');
                const original = btn.textContent;

                btn.textContent = '送信完了しました';
                btn.disabled = true;

                setTimeout(() => {
                    btn.textContent = original;
                    btn.disabled = false;
                    this.reset();
                }, 3000);
            }
            // action に実際のエンドポイントが設定されていれば通常送信
        });
    }

});
