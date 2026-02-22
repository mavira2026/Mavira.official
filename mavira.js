// --- Copyright Year ---
    document.getElementById('copyright').textContent =
      '\u00A9 ' + new Date().getFullYear() + ' Mavira. All rights reserved.';

    // --- HERO ENTRANCE ANIMATION ---
    window.addEventListener('DOMContentLoaded', function () {
      var letters = document.querySelectorAll('#heroTitle span');
      letters.forEach(function (letter, i) {
        setTimeout(function () {
          letter.classList.add('show');
        }, 300 + i * 100);
      });

      setTimeout(function () {
        document.getElementById('heroTagline').classList.add('show');
      }, 1000);
      setTimeout(function () {
        document.getElementById('heroSubtitle').classList.add('show');
      }, 1200);
      setTimeout(function () {
        document.getElementById('heroButtons').classList.add('show');
      }, 1400);
      setTimeout(function () {
        document.getElementById('heroScroll').classList.add('show');
      }, 1700);
    });

    // --- NAVBAR: Scroll hide/show + active section ---
    var navbar = document.getElementById('navbar');
    var lastScrollY = 0;
    var navLinksDesktop = document.querySelectorAll('#navLinks a');
    var navLinksMobile = document.querySelectorAll('#mobileMenu a[data-section]');
    var sections = ['home', 'about', 'products', 'contact'];

    window.addEventListener('scroll', function () {
      var currentY = window.scrollY;

      if (currentY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      if (currentY > lastScrollY && currentY > 200) {
        navbar.classList.add('hidden-nav');
      } else {
        navbar.classList.remove('hidden-nav');
      }
      lastScrollY = currentY;

      var activeId = 'home';
      for (var i = sections.length - 1; i >= 0; i--) {
        var el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          activeId = sections[i];
          break;
        }
      }

      navLinksDesktop.forEach(function (link) {
        if (link.getAttribute('data-section') === activeId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      navLinksMobile.forEach(function (link) {
        if (link.getAttribute('data-section') === activeId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, { passive: true });

    // --- MOBILE MENU ---
    var mobileToggle = document.getElementById('mobileToggle');
    var mobileMenu = document.getElementById('mobileMenu');
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');
    var mobileOpen = false;

    mobileToggle.addEventListener('click', function () {
      mobileOpen = !mobileOpen;
      if (mobileOpen) {
        mobileMenu.classList.add('open');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        mobileToggle.setAttribute('aria-label', 'Close menu');
      } else {
        closeMobile();
      }
    });

    function closeMobile() {
      mobileOpen = false;
      mobileMenu.classList.remove('open');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      mobileToggle.setAttribute('aria-label', 'Open menu');
    }

    // --- SCROLL-REVEAL (IntersectionObserver) ---
    var revealElements = document.querySelectorAll('.scroll-reveal');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });