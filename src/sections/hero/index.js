import './hero.scss';

import Badge from '@/components/badge';
import Button from '@/components/button';
import Stats from '@/components/stats';

import clock from '@/assets/svg/clock.svg';
import handCoin from '@/assets/svg/hand-coin.svg';
import academicCap from '@/assets/svg/academic-cap.svg';
import hero from '@/assets/hero.webp';

export default () => /*html*/ `
  <section class='section hero'>
    <div class='container'>

      <div class='hero-inner'>
        <div class='hero-text'>
          ${Badge({ text: 'Анонімно, якісно та вчасно', className: 'hero-badge' })}
          <h1 class='hero-title'>Студентські роботи будь-якої складності</h1>
          <ul class='hero-list'>
            <li class='hero-list-item'>
              <img src="${clock}" alt='Термін' />
              <span>Термін виконання  - від 2х годин</span>
            </li>
            <li class='hero-list-item'>
              <img src="${handCoin}" alt='Ціна' />
              <span>Від 12 грн за сторінку</span>
            </li>
            <li class='hero-list-item'>
              <img src="${academicCap}" alt='Спеціалісти' />
              <span>Пишуть - кваліфіковані спеціалісти</span>
            </li>
          </ul>
          ${Button({ className: 'hero-button' })}
        </div>

        <div class='hero-image'>
          <img src="${hero}" alt='Головне зобрадення' />
        </div>
      </div>

    </div>
    ${Stats()}
  </section>
`;
