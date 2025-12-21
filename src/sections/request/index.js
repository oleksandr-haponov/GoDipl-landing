import './request.scss';

import Title from '@/components/title';
import Button from '@/components/button';

import request from '@/assets/request.webp';

export default () => /*html*/ `
  <section class='section request' id="request" aria-labelledby='request-title'>
    <div class='container'>

      <div class='request-inner'>

        <form class='request-form' id='request-form' action="https://formspree.io/f/xwvebrbe" method="POST" noValidate aria-describedby='request-desc'>    
          <div class='request-heading'>
            ${Title({ text: '📋 Залиши заявку' })}
            <p>Наші менеджери якнайшвидше зв’яжуться з тобою</p>
          </div>

          <div class='request-fields'>
            <div class='input'>
              <label class='input-label' for='name'>Твоє ім\'я&nbsp;<span class='input-require' aria-hidden='true'>*</span></label>
              <input class='input-field' id='name' name='name' type='text' placeholder='Ваня' required autocomplete='name' aria-required='true' />
            </div>
            <div class='input'>
              <label class='input-label' for='contact'>Номер телефону або Telegram-нік&nbsp;<span class='input-require' aria-hidden='true'>*</span></label>
              <input class='input-field' id='contact' name='contact' type='text' placeholder='@student_help' required aria-required='true'>
            </div>
            <div class='input'>
              <label class='input-label' for='project'>Вид та тема проекту&nbsp;<span class='input-require' aria-hidden='true'>*</span></label>
              <textarea class='input-field' id='project' name='project' placeholder='Визначення осідань фундаментів споруд методами високоточної нівеляції (дипломка - бакалавр)' required aria-describedby='project-hint' aria-required='true'></textarea>
            </div>
            <div class='input honeypot' aria-hidden='true'>
              <label for='website'>Не заповнювати це поле</label>
              <input type='text' id='website' name='website' tabindex='-1' autocomplete='off' />
            </div>
          </div>

          ${Button({
            text: 'Дізнатися ціну своєї роботи',
            className: 'request-button',
            as: 'button',
            type: 'submit',
          })}
        </form>


        <div class='request-image'>
          <img src="${request}" alt='Зображення заявки' loading='lazy'  />
        </div>

      </div>

    </div>
  </section>
`;
