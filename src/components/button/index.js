import './button.scss';
import chevronRightWhite from '@/assets/svg/chevron-right-white.svg';


export default function Button({
  as = 'link',
  text = 'Залишити заявку',
  href = '#request',
  type = 'button',
  className = '',
  target = '',
  ariaLabel = 'Залишити заявку на допомогу з роботою',
} = {}) {
  const baseClass = 'button';
  const fullClass = `${baseClass} ${className}`.trim();

  if (as === 'link') {
    return /*html*/ `
      <a href="${href}" class="${fullClass}" target="${target}" aria-label="${ariaLabel}">
        ${text}
        <img src="${chevronRightWhite}" alt='Шеврон праворуч' />
      </a>
    `;
  }

  return /*html*/ `
    <button type="${type}" class="${fullClass}" aria-label="${ariaLabel}">
      ${text}
      <img src="${chevronRightWhite}" alt='Шеврон праворуч' />
    </button>
  `;
}
