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
