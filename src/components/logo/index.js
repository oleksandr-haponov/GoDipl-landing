import './logo.scss';
import logo from '@/assets/logo.webp';
import logoFooter from '@/assets/logo-footer.webp';

export default ({ variant = 'default' } = {}) => {
  const src = variant === 'footer' ? logoFooter : logo;
  const alt = variant === 'footer' ? 'Логотип Student Help у футері' : 'Логотип Student Help';

  return /*html*/ `
    <a class='logo logo--${variant}' href='/'>
      <img src="${src}" alt="${alt}" />
    </a>
  `;
};
