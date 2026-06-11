document.addEventListener('DOMContentLoaded', () => {
  // --- STICKY HEADER ---
  const header = document.querySelector('.header');
  const scrollThreshold = 50;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once in case page loads scrolled

  // --- MOBILE NAV TOGGLE ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('mobile-toggle--active');
      nav.classList.toggle('nav--active');
    });

    // Close menu when clicking navigation links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('mobile-toggle--active');
        nav.classList.remove('nav--active');
      });
    });
  }

  // --- SCROLL REVEAL ANIMATIONS (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // --- ACCORDION (RECRUITMENT POSITIONS) ---
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');

    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('accordion-item--active');
        
        // Close all other items
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('accordion-item--active');
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('accordion-item--active');
        }
      });
    }
  });

  // --- MODAL (RECRUITMENT APPLY) ---
  const modal = document.getElementById('applyModal');
  const openButtons = document.querySelectorAll('.open-apply-modal');
  const closeButton = document.querySelector('.modal__close');
  const overlay = document.querySelector('.modal__overlay');
  const positionSelect = document.getElementById('jobPosition');

  const openModal = (defaultPosition = '') => {
    if (modal) {
      modal.classList.add('modal--active');
      document.body.style.overflow = 'hidden'; // Stop background scrolling
      
      if (defaultPosition && positionSelect) {
        positionSelect.value = defaultPosition;
      }
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('modal--active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const position = btn.getAttribute('data-position') || '';
      openModal(position);
    });
  });

  if (closeButton) closeButton.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });

  // --- TOAST NOTIFICATIONS ---
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  const showToast = (message, duration = 4000) => {
    if (toast && toastMessage) {
      toastMessage.textContent = message;
      toast.classList.add('toast--active');

      setTimeout(() => {
        toast.classList.remove('toast--active');
      }, duration);
    }
  };

  // --- FORM SUBMISSION HANDLING (Contact & Recruitment) ---
  const contactForm = document.getElementById('contactForm');
  const recruitmentForm = document.getElementById('recruitmentForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      
      if (!name || !email) {
        showToast('お名前とメールアドレスをご入力ください。');
        return;
      }

      // Simulate API submit
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '送信中... <i class="fas fa-spinner fa-spin"></i>';

      setTimeout(() => {
        showToast('お問い合わせを受け付けました。ご連絡をお待ちください。');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1500);
    });
  }

  if (recruitmentForm) {
    recruitmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const name = recruitmentForm.querySelector('[name="applyName"]').value.trim();
      const phone = recruitmentForm.querySelector('[name="applyPhone"]').value.trim();
      const position = recruitmentForm.querySelector('[name="applyPosition"]').value;

      if (!name || !phone || !position) {
        showToast('必須項目をご入力ください。');
        return;
      }

      // Simulate API submit
      const submitBtn = recruitmentForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '送信中... <i class="fas fa-spinner fa-spin"></i>';

      setTimeout(() => {
        closeModal();
        showToast('エントリーが完了しました。担当者よりご連絡いたします。');
        recruitmentForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1500);
    });
  }
});
