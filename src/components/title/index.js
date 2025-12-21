import './title.scss';

export default function Title({ text = '', className = '', tag = 'h2' } = {}) {
  const baseClass = 'title';
  const fullClass = `${baseClass} ${className}`.trim();

  return /*html*/ `<${tag} class="${fullClass}">${text}</${tag}>`;
}
