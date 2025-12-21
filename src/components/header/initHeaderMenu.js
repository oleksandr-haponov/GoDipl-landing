export function initHeaderMenu() {
  const menu = document.querySelector('[data-menu]');
  const trigger = menu?.querySelector('[data-menu-trigger]');
  const list = menu?.querySelector('[data-menu-list]');

  if (!menu || !trigger || !list) return;

  trigger.addEventListener('click', () => {
    const isOpen = list.classList.contains('is-open');

    if (isOpen) {
      list.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    } else {
      list.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });

  // Закриваємо меню при кліку поза ним
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
      list.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  list.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) {
      list.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
}
