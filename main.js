(() => {
    const existing = document.querySelector('link[data-ants-responsive]');
    if (!existing) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'responsive-fix.css';
        link.dataset.antsResponsive = 'true';
        document.head.appendChild(link);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const isTopPage = currentPath === 'index.html' || currentPath === '';
    const isVisitPage = currentPath === 'visit.html';

    document.body.classList.add(`page-${currentPath.replace('.html', '') || 'index'}`);

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
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('nav-overlay');
    const navClose = document.getElementById('nav-close');

    if (hamburger && nav) {
        const toggle = (open) => {
            hamburger.classList.toggle('is-active', open);
            nav.classList.toggle('is-active', open);
            if (overlay) overlay.classList.toggle('is-active', open);
            hamburger.setAttribute('aria-expanded', String(open));
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
       3. アクティブなナビリンクのハイライト・沿革導線追加
    ============================================================ */
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        if (link.dataset.page === currentPath) {
            link.classList.add('is-current');
        }
    });

    const navList = document.querySelector('.nav-list');
    if (navList && !navList.querySelector('[data-enhanced-link="history"]')) {
        const historyItem = document.createElement('li');
        const historyHref = isTopPage ? '#history' : 'index.html#history';
        historyItem.innerHTML = `<a href="${historyHref}" class="nav-link" data-enhanced-link="history">HISTORY</a>`;
        const accessItem = Array.from(navList.children).find(item => item.textContent.includes('ACCESS'));
        navList.insertBefore(historyItem, accessItem || null);
        historyItem.querySelector('a')?.addEventListener('click', () => {
            hamburger?.classList.remove('is-active');
            nav?.classList.remove('is-active');
            overlay?.classList.remove('is-active');
            hamburger?.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    }

    const companyAddress = Array.from(document.querySelectorAll('p')).find(element => element.textContent.includes('〒251-0045'));
    if (companyAddress) companyAddress.textContent = companyAddress.textContent.replace('〒251-0045', '〒251-0047');

    /* ============================================================
       4. 公式サイト写真の差し込み
    ============================================================ */
    const officialImages = {
        honten: 'https://www.ants10.com/inqfm/upload_images/inqfm_img_honten01.jpg',
        kaigan: 'https://www.ants10.com/inqfm/upload_images/inqfm_img_kaigan01.jpg',
        ekimae: 'https://www.ants10.com/inqfm/upload_images/inqfm_img_ekimae01.jpg',
        eni: 'https://www.ants10.com/inqfm/upload_images/inqfm_img_eni01.jpg',
        lune: 'https://www.ants10.com/cmn/images/salonlist_lune.png',
        visitHero: 'https://www.ants10.com/menu/upload_images/menu_visit_img01.jpg',
        visitFacility: 'https://www.ants10.com/menu/upload_images/7834_960x960.jpg',
        visitHome: 'https://www.ants10.com/menu/upload_images/7835_960x720.jpg'
    };

    const setBackground = (element, imageUrl, position = 'center') => {
        if (!element) return;
        element.style.backgroundImage = `url("${imageUrl}")`;
        element.style.backgroundSize = 'cover';
        element.style.backgroundPosition = position;
        element.classList.add('has-official-image');
        const placeholder = element.querySelector('.placeholder');
        if (placeholder) placeholder.setAttribute('aria-hidden', 'true');
    };

    if (isTopPage) {
        setBackground(document.querySelector('.hero-slide--1'), officialImages.honten, 'center');
        setBackground(document.querySelector('.hero-slide--2'), officialImages.visitHero, 'center 38%');

        const galleryImages = document.querySelectorAll('.overlap-gallery-container .og-img');
        [officialImages.ekimae, officialImages.eni, officialImages.visitHome].forEach((src, index) => {
            setBackground(galleryImages[index], src, index === 2 ? 'center 35%' : 'center');
        });

        const businessVisuals = document.querySelectorAll('.rakugei-visual');
        setBackground(businessVisuals[0], officialImages.visitFacility, 'center 35%');
        setBackground(businessVisuals[1], officialImages.honten, 'center');

        const salonImages = document.querySelectorAll('.salon-hiroin-img');
        [officialImages.honten, officialImages.kaigan, officialImages.eni, officialImages.lune, officialImages.ekimae]
            .forEach((src, index) => setBackground(salonImages[index], src, 'center'));
    }

    if (isVisitPage) {
        const heroImage = document.querySelector('.visit-hero-img img');
        if (heroImage) {
            heroImage.src = officialImages.visitHero;
            heroImage.alt = 'ANT\'Sの訪問美容サービス';
        }
    }

    /* ============================================================
       5. トップページ：会社沿革を追加
    ============================================================ */
    if (isTopPage) {
        const historyItems = [
            ['2008', 'H20', 'ANT’S Hair and Resort 辻堂本店オープン'],
            ['2011', 'H23', 'ANT’S Southern-Resort サザンビーチ店オープン'],
            ['2013', 'H25', '訪問美容事業オープン'],
            ['2016', 'H28', 'cozy resort by ANT’S 茅ヶ崎駅前店オープン'],
            ['2018', 'H30', '第1期 ANT’S Academy 開校'],
            ['2021', '', 'ANT’S Design Contest 2021 開催'],
            ['2022', 'R4', 'ENi hair and resort by ANT’S オープン'],
            ['2023', 'R5', '合同会社サンクフルネス設立（福祉事業）'],
            ['2025', '', '眠活ヘッドストレッチ ANT’S 茅ヶ崎南口店オープン'],
            ['2026', 'R8', 'Lune. by ANT’S グランドオープン']
        ];

        const historyMarkup = historyItems.map(([year, era, text]) => `
            <article class="ants-history-item reveal">
                <div class="ants-history-year"><strong>${year}</strong>${era ? `<span>${era}</span>` : ''}</div>
                <div class="ants-history-dot" aria-hidden="true"></div>
                <p>${text}</p>
            </article>
        `).join('');

        const historySection = document.createElement('section');
        historySection.id = 'history';
        historySection.className = 'section ants-history-section';
        historySection.innerHTML = `
            <div class="container ants-section-head reveal">
                <span class="section-label">History</span>
                <h2 class="ants-display-title">歩みを重ね、<br>美と福祉の未来へ。</h2>
                <p>カントライブ創業から現在まで。サロン事業を起点に、教育・訪問美容・福祉へと活動の幅を広げてきました。</p>
            </div>
            <div class="container ants-history-list">${historyMarkup}</div>
        `;

        const salonListSection = Array.from(document.querySelectorAll('section')).find(section =>
            section.querySelector('.section-title')?.textContent.trim() === 'SALON LIST'
        );
        if (salonListSection && !document.getElementById('history')) {
            salonListSection.before(historySection);
        }
    }

    /* ============================================================
       6. 訪問美容ページ：料金・問い合わせ先を追加
    ============================================================ */
    if (isVisitPage && !document.querySelector('.ants-pricing-section')) {
        const pricingSection = document.createElement('section');
        pricingSection.className = 'section ants-pricing-section';
        pricingSection.id = 'price';
        pricingSection.innerHTML = `
            <div class="container ants-section-head ants-section-head--center reveal">
                <span class="section-label">Price & Contact</span>
                <h2 class="ants-display-title">訪問美容 料金のご案内</h2>
                <p>施設訪問・在宅訪問の両方に対応しています。料金は10%税込の目安です。</p>
            </div>

            <div class="container ants-pricing-grid">
                <article class="ants-price-card reveal">
                    <div class="ants-price-image" style="background-image:url('${officialImages.visitFacility}')" role="img" aria-label="施設訪問美容の施術イメージ"></div>
                    <div class="ants-price-body">
                        <span class="ants-price-type">FACILITY</span>
                        <h3>施設訪問</h3>
                        <p class="ants-price-note">施設様とのお打ち合わせのうえ、料金を設定いたします。</p>
                        <dl class="ants-price-list">
                            <div><dt>カット</dt><dd>¥1,900〜</dd></div>
                            <div><dt>カット＋顔そり</dt><dd>¥2,700〜</dd></div>
                            <div><dt>カット＋シャンプー</dt><dd>¥2,700〜</dd></div>
                            <div><dt>カラー＋シャンプー</dt><dd>¥4,600〜</dd></div>
                            <div><dt>カット＋カラー＋シャンプー</dt><dd>¥6,500〜</dd></div>
                            <div><dt>パーマ＋シャンプー</dt><dd>¥4,600〜</dd></div>
                            <div><dt>カット＋パーマ＋シャンプー</dt><dd>¥6,500〜</dd></div>
                            <div><dt>ベッドサイド（1メニュー）</dt><dd>＋¥700〜</dd></div>
                        </dl>
                    </div>
                </article>

                <article class="ants-price-card reveal reveal-delay-1">
                    <div class="ants-price-image" style="background-image:url('${officialImages.visitHome}')" role="img" aria-label="在宅訪問美容の施術イメージ"></div>
                    <div class="ants-price-body">
                        <span class="ants-price-type">HOME VISIT</span>
                        <h3>在宅訪問</h3>
                        <p class="ants-price-note">ご本人様・ご家族様とのお打ち合わせのうえ、料金を設定いたします。</p>
                        <dl class="ants-price-list">
                            <div><dt>カット</dt><dd>¥4,860</dd></div>
                            <div><dt>カット＋顔そり</dt><dd>¥6,480</dd></div>
                            <div><dt>顔そり</dt><dd>¥2,160</dd></div>
                            <div><dt>ベッド上カット</dt><dd>¥6,480</dd></div>
                            <div><dt>シャンプー</dt><dd>¥2,160</dd></div>
                            <div><dt>パーマ・カラー（各メニュー）</dt><dd>¥6,480</dd></div>
                        </dl>
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
                <p class="ants-price-caution">※掲載料金は公式サイトの現行表示をもとにしています。施術内容・訪問条件・駐車料金等により異なる場合があります。</p>
            </div>
        `;

        const flowSection = Array.from(document.querySelectorAll('section')).find(section =>
            section.querySelector('.section-title')?.textContent.trim() === 'ご利用の流れ'
        );
        if (flowSection) flowSection.before(pricingSection);
    }

    /* ============================================================
       7. Smooth Scroll
    ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            event.preventDefault();
            const offset = header ? header.offsetHeight : 0;
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - offset,
                behavior: 'smooth'
            });
        });
    });

    /* ============================================================
       8. Scroll Reveal
    ============================================================ */
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        if (!('IntersectionObserver' in window)) {
            reveals.forEach(element => element.classList.add('is-visible'));
        } else {
            const observer = new IntersectionObserver((entries, revealObserver) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                });
            }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

            reveals.forEach(element => observer.observe(element));
        }
    }

    /* ============================================================
       9. Count-up Animation
    ============================================================ */
    const countUps = document.querySelectorAll('.count-up');
    if (countUps.length && 'IntersectionObserver' in window) {
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

        countUps.forEach(element => countUpObserver.observe(element));
    }
});
