(() => {
  const burger = document.getElementById('burger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    burger.classList.toggle('is-active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
})();

(() => {
  if (!location.hash) return;
  let target;
  try {
    target = document.querySelector(location.hash);
  } catch (e) {
    return;
  }
  if (!target) return;
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'start' });
    });
  });
})();

(() => {
  const strip = document.getElementById('cuisine-strip');
  if (!strip) return;

  const wrap = strip.closest('.cuisine-strip-wrap');
  const prevBtn = wrap.querySelector('[data-strip-prev]');
  const nextBtn = wrap.querySelector('[data-strip-next]');
  const scrollByPage = (dir) => {
    const item = strip.querySelector('.cuisine-strip__item');
    const step = item ? item.getBoundingClientRect().width + 14 : 200;
    strip.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
  };

  prevBtn.addEventListener('click', () => scrollByPage(-1));
  nextBtn.addEventListener('click', () => scrollByPage(1));
})();
