import './about.scss';

import Badge from '@/components/badge';
import Button from '@/components/button';
import Title from '@/components/title';

import a01 from '@/assets/a01.webp';
import a02 from '@/assets/a02.webp';
import a03 from '@/assets/a03.webp';
import academicCap from '@/assets/svg/academic-cap.svg';
import calendar from '@/assets/svg/calendar.svg';
import percent from '@/assets/svg/percent.svg';
import support from '@/assets/svg/support.svg';

export default () => /*html*/ `
  <section class='section about' id='about' aria-labelledby='about-title'>
    <div class='container'>

      <div class='about-inner'>
      
        <ul class='photos' aria-label='Фото команди StudentHelp'>
          <li class='photos-item'>
            <img src="${a01}" alt='Фахівець StudentHelp — фото 1' loading="lazy" />
          </li>
          <li class='photos-item'>
            <img src="${a02}" alt='Фахівець StudentHelp — фото 2' loading="lazy" />
          </li>
          <li class='photos-item'>
            <img src="${a03}" alt='Фахівець StudentHelp — фото 3' loading="lazy" />
          </li>
          <li class='photos-item'>
            <div class='photos-stats' aria-hidden="true">
              <span>112+</span>
              <span>спеціалістів</span>
            </div>
          </li>
        </ul>

        ${Badge({
          text: 'Про нас',
          className: 'about-badge',
          ariaLabel: 'Позначка секції Про нас',
        })}
        ${Title({ text: '👋 Нумо знайомитись!', className: 'about-title' })}
        <p class='about-desc'><strong>StudentHelp</strong> - це більше 100 людей, які працюють 24/7, щоб у тебе, студенте, був шанс трішечки поспати 💤</p>
        <ul class='benefits'>
          <li class='benefits-item' aria-label='Переваги співпраці зі StudentHelp'>
            <img src="${academicCap}" alt='Іконка досвідчених фахівців' loading='lazy' />
            <div>
              <h5 class='benefits-title'>Досвідчені фахівці</h5>
              <p class='benefits-desc'>Над твоєю роботою працюватимуть лише спеціалісти, які мають вищу освіту</p>
            </div>
          </li>
          <li class='benefits-item'>
            <img src="${calendar}" alt='Іконка календаря — правки' loading='lazy' />
            <div>
              <h5 class='benefits-title'>Правки протягом 30 днів</h5>
              <p class='benefits-desc'>Якщо під час здачі виникли питання - ми безкоштовно внесемо правки чи проконсультуємо</p>
            </div>
          </li>
          <li class='benefits-item'>
            <img src="${percent}" alt='Іконка передплати 50%' loading='lazy' />
            <div>
              <h5 class='benefits-title'>50% передплата</h5>
              <p class='benefits-desc'>Оплачуй повністю після фактичного завершення робіт</p>
            </div>
          </li>
          <li class='benefits-item'>
            <img src="${support}" alt='Іконка підтримки — менеджер' loading='lazy' />
            <div>
              <h5 class='benefits-title'>Завжди на зв’язку</h5>
              <p class='benefits-desc'>Твій особистий менеджер зможе відповісти на всі твої запитання 7 днів на тиждень</p>
            </div>
          </li>
        </ul>

        ${Button({ className: 'about-button' })}
      </div>

    </div>
  </section>
`;
