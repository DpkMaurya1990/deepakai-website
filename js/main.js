/* ============================================
   deepakai.in — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ===== NAVBAR: Mobile Toggle =====
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen.toString());
      // Swap icon
      menuBtn.innerHTML = isOpen
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
           </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
           </svg>`;
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>`;
      });
    });
  }

  // ===== NAVBAR: Scroll shadow + shrink =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.style.boxShadow = '0 4px 32px rgba(0,0,0,0.4)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ===== ACTIVE NAV LINK =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active-nav');
    }
  });

  // ===== SCROLL ANIMATIONS (Intersection Observer) =====
  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in-up').forEach(el => fadeObserver.observe(el));

  // ===== COUNT-UP ANIMATION =====
  const countObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.counter').forEach(el => countObserver.observe(el));

  function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const startTime = performance.now();
    const isDecimal = el.dataset.decimal === 'true';

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = target * eased;
      el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString('en-IN')) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // ===== INDUSTRY TABS =====
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) {
        panel.classList.add('active');
        // Re-trigger animations inside the panel
        panel.querySelectorAll('.fade-in-up').forEach(el => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), 50);
        });
      }

      // Scroll active tab into view on mobile
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');
    const icon     = item.querySelector('.faq-icon');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = answer.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotated'));

      if (!isOpen) {
        answer.classList.add('open');
        if (icon) icon.classList.add('rotated');
      }
    });
  });

  // ===== CONTACT FORM — WhatsApp Redirect =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name     = contactForm.querySelector('[name="name"]')?.value || '';
      const phone    = contactForm.querySelector('[name="phone"]')?.value || '';
      const email    = contactForm.querySelector('[name="email"]')?.value || '';
      const business = contactForm.querySelector('[name="business"]')?.value || '';
      const industry = contactForm.querySelector('[name="industry"]')?.value || '';
      const plan     = contactForm.querySelector('[name="plan"]')?.value || '';
      const message  = contactForm.querySelector('[name="message"]')?.value || '';

      // Validate required fields
      if (!name.trim() || !phone.trim() || !business.trim() || !industry) {
        showFormError('Please fill in all required fields.');
        return;
      }

      // Validate Indian phone number (10 digits)
      const phoneDigits = phone.replace(/\D/g, '');
      if (phoneDigits.length < 10 || phoneDigits.length > 12) {
        showFormError('Please enter a valid WhatsApp number.');
        return;
      }

      const text = `🤖 *New Demo Request — Deepak AI*

👤 Name: ${name}
📱 WhatsApp: ${phone}
📧 Email: ${email || 'Not provided'}
🏢 Business: ${business}
🏭 Industry: ${industry}
📦 Plan: ${plan || 'Not sure yet'}
💬 Message: ${message || 'No additional info'}

_Request via deepakai.in_`;

      const waURL = `https://wa.me/919999517081?text=${encodeURIComponent(text)}`;
      window.open(waURL, '_blank', 'noopener,noreferrer');

      // Show success message
      showFormSuccess();
    });
  }

  function showFormError(msg) {
    let el = document.getElementById('form-error');
    if (!el) {
      el = document.createElement('div');
      el.id = 'form-error';
      el.style.cssText = 'background:#7F1D1D;border:1px solid #EF4444;color:#FCA5A5;padding:12px 16px;border-radius:8px;font-size:14px;margin-top:12px;';
      document.getElementById('contact-form').appendChild(el);
    }
    el.textContent = msg;
    el.style.display = 'block';
    setTimeout(() => { if (el) el.style.display = 'none'; }, 4000);
  }

  function showFormSuccess() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.innerHTML = `
      <div style="text-align:center;padding:48px 24px;">
        <div style="font-size:56px;margin-bottom:16px;">🎉</div>
        <h3 style="font-family:'Poppins',sans-serif;font-size:22px;font-weight:700;color:#fff;margin-bottom:8px;">
          WhatsApp is opening!
        </h3>
        <p style="color:#94A3B8;font-size:15px;margin-bottom:24px;">
          Complete the message to Deepak AI. We'll call you back within 2 hours.
        </p>
        <a href="index.html" class="btn-green" style="display:inline-flex;">← Back to Home</a>
      </div>`;
  }

  // ===== SMOOTH REVEAL on load (hero) =====
  document.querySelectorAll('.hero-reveal').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 150 + i * 120);
  });

});
