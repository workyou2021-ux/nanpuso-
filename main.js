(() => {
  const burger = document.getElementById('burger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
})();

(() => {
  const carousel = document.getElementById('cuisine-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.cuisine-carousel__slide');
  const dots = carousel.querySelectorAll('.cuisine-carousel__dot');
  let index = 0;

  const show = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => slide.classList.toggle('is-active', n === index));
    dots.forEach((dot, n) => dot.classList.toggle('is-active', n === index));
  };

  carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => show(index - 1));
  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => show(index + 1));
  dots.forEach((dot, n) => dot.addEventListener('click', () => show(n)));
})();
