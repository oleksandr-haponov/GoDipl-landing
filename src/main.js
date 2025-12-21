import './style.scss';
import Header from '@/components/header';
import Hero from '@/sections/hero';
import About from '@/sections/about';
import Feedback from '@/sections/feedback';
import Request from '@/sections/request';
import Footer from './components/footer';

import { initHeaderMenu } from './components/header/initHeaderMenu';
import { initFeedbackSlider } from './sections/feedback/initFeedbackSwiper';
import { initRequestForm } from './sections/request/initRequestForm';

import bg01 from '@/assets/bg-01.png';
import bg02 from '@/assets/bg-02.png';
import bg03 from '@/assets/bg-03.png';
import bg04 from '@/assets/bg-04.png';

const App = () => /*html*/ `
  ${Header()}
  <main>
    ${Hero()}
    <img class='bg01' src="${bg01}" alt='Фон - 01' />
    <img class='bg02' src="${bg02}" alt='Фон - 02' />
    ${About()}
    <img class='bg03' src="${bg03}" alt='Фон - 03' />
    ${Feedback()}
    ${Request()}
    <img class='bg04' src="${bg04}" alt='Фон - 04' />
  </main>
  ${Footer()}

`;

document.querySelector('#app').innerHTML = App();
initHeaderMenu();
initFeedbackSlider();
initRequestForm();
