import './header.scss';
import Logo from '@/components/logo';
import chevronRight from '@/assets/svg/chevron-right.svg';
import menu from '@/assets/svg/menu.svg';
import Button from '@/components/button';

export default () => /*html*/ `
  <header class='header' role='banner'>
    <div class='container'>
      
      <div class='header-inner'>

        ${Logo()}

        <nav class='header-right' role='navigation' aria-label='Головна навігація'>
          <a class='header-btn' href='#request' aria-label='Залишити заявку'>
            Залишити заявку
            <img src="${chevronRight}" alt='Шеврон праворуч' />
          </a>

          <div class='menu' data-menu>
            <button class='menu-btn' data-menu-trigger aria-expanded='false' aria-controls='menu-list' aria-label='Відкрити меню'>
              <img src="${menu}" alt='Іконка меню' />
            </button>
            <ul class='menu-list' id='menu-list' data-menu-list>
              <li><a class='menu-link' href='#about'>Про нас</a></li>
              <li><a class='menu-link' href='#feedback'>Відгуки</a></li>
              <li>${Button()}</li>
            </ul>
          </div>
        </nav>

      </div>

    </div>
  </header>
`;
