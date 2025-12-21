import './feedback.scss';

import Badge from '@/components/badge';
import Button from '@/components/button';
import Title from '@/components/title';

import user from '@/assets/svg/user.svg';

export default () => /*html*/ `
  <section class='section feedback' id='feedback' aria-labelledby='feedback-title'>
    <div class='container'>

      <div class='feedback-inner'>

        <div class='feedback-heading'>
          ${Badge({
            text: 'Відгуки',
            className: 'feedback-badge',
            ariaLabel: 'Позначка секції Відгуки',
          })}
          ${Title({ text: '👩🏻‍🎓👨🏻‍🎓Відгуки щасливих студентів', className: 'feedback-title' })}
        </div>

        <div class='feedback-slider' role='region' aria-label='Слайдер з відгуками студентів'>

            <div class='swiper-button-prev' aria-label='Попередній відгук'></div>
            <div class='swiper'>
              <div class='swiper-wrapper'>

                <div class='swiper-slide' role='group' aria-label='Відгук Сергія'>
                  <div class='feedback-slide'>
                    <img src="${user}" alt='Перший слайд' loading='lazy' />
                    <div>
                      <h5 class='benefits-title'>Сергрій</h5>
                      <p class='benefits-desc'>“Супер задоволений роботою команди, двічі переписували висновок безкоштовно, бо викладач не приймав роботу. Ще надали поради з приводу того, як краще захистити.”</p>
                    </div>
                  </div>
                </div>
                
                <div class='swiper-slide' role='group' aria-label='Відгук Валі'>
                  <div class='feedback-slide'>
                    <img src="${user}" alt='Другий слайд' loading='lazy' />
                    <div>
                      <h5 class='benefits-title'>Валя</h5>
                      <p class='benefits-desc'>“Не можу нарадуватись, треба було писати роботу англійською мовою, адже я вчуся в англомовній групі. Думала вже не знайду нікого, щоб помогли, проте серед команди StudentHelp знайшася спеціаліст Ангеліна, яка не лише допомогла а ще і проконсультувала з приводу стилю та оформлення. Я здала та щаслива, що цей етап позаду”</p>
                    </div>
                  </div>
                </div>

                <div class='swiper-slide' role='group' aria-label='Відгук Андрія'>
                  <div class='feedback-slide'>
                    <img src="${user}" alt='Третій слайд' loading='lazy' />
                    <div>
                      <h5 class='benefits-title'>Андрій</h5>
                      <p class='benefits-desc'>“Знайов на сайті ментора Михайла, задоволений. Він знає німецьку на високому рівні, а я шукав спеціаліста, який не просто сам все зробить, а саме буде менторити мене під час написання роботи для університету в Мюнхені.”</p>
                    </div>
                  </div>
                </div>

                <div class='swiper-slide' role='group' aria-label='Відгук Марини'>
                  <div class='feedback-slide'>
                    <img src="${user}" alt='Четвертий слайд' loading='lazy' />
                    <div>
                      <h5 class='benefits-title'>Марина</h5>
                      <p class='benefits-desc'>“Мені потрібно було терміново здати курсову, часу залишалося менше доби. Написала в StudentHelp о 23:00, і вже зранку мала готову роботу. Все грамотно, без води, ще й допомогли з оформленням згідно вимог мого ВНЗ. Це просто спасіння!”</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class='swiper-button-next' aria-label='Наступний відгук'></div>

        </div>

        ${Button({ className: 'feedback-button' })}
      </div>

    </div>
  </section>
`;
