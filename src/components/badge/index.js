import './badge.scss';

export default function Badge({ text = '', className = '', ariaLabel }) {
  const baseClass = 'badge';
  const fullClass = `${baseClass} ${className}`.trim();

  return /*html*/ `
    <div class="${fullClass}" aria-label="${ariaLabel}">
      <span class="badge-text">
        ${text}
      </span>
    </div>
  `;
}
