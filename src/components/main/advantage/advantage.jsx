import "./../../../style/advantage.css";
import first from "./../../../img/advantage/first.svg";
import second from "./../../../img/advantage/second.svg";
import fird from "./../../../img/advantage/fird.svg";

function Advantage() {
  return (
    // <section className="main-advantage">
    //   <div className="main-advantage-contain container">
    //     <h2 className="main-advantage-contain__title main-title">
    //       Преимущества
    //     </h2>
    //     <div className="main-advantage-contain-info">
    //       <div className="main-advantage-contain-info__item">
    //         <img
    //           className="main-advantage-contain-info__img"
    //           src={first}
    //           alt=""
    //         />
    //         <h3 className="main-advantage-contain-info__title">
    //           Простая и удобная система заказа товара
    //         </h3>
    //         <p className="main-advantage-contain-info__desc">
    //           Мы знаем, как важна простая система регистрации и оформления
    //           заказа, поэтому делаем все для того, чтобы оформить заказ было
    //           удобно (и быстро!).
    //         </p>
    //       </div>
    //       <div className="main-advantage-contain-info__item">
    //         <img
    //           className="main-advantage-contain-info__img"
    //           src={second}
    //           alt=""
    //         />
    //         <h3 className="main-advantage-contain-info__title">
    //           Оповещаем о состоянии заказа по SMS
    //         </h3>
    //         <p className="main-advantage-contain-info__desc">
    //           Для тех, кто всегда хочет быть в курсе: вы сами можете
    //           контролировать свой заказ, получая статус о его формировании
    //           посредством sms-сообщений.
    //         </p>
    //       </div>
    //       <div className="main-advantage-contain-info__item">
    //         <img
    //           className="main-advantage-contain-info__img"
    //           src={fird}
    //           alt=""
    //         />
    //         <h3 className="main-advantage-contain-info__title">
    //           Оперативная доставка
    //         </h3>
    //         <p className="main-advantage-contain-info__desc">
    //           Мы привыкли работать с большими объемами заказов, поэтому вам не
    //           стоит беспокоиться о том, что ваш заказ будет обработан не
    //           вовремя.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section class="advantages">
            <div class="advantages-list container">
            <h2 class="advantages-list__title">Преимущества</h2>
            <ul class="advantages-list-items">
                <li class="advantages-list__item">
                    <img src={first} class="advantages-list__icon" alt=""/>
                    <h4 class="advantage-list__title">Простая и удобная система заказа товара</h4>
                    <p class="advantage-list__text">Мы знаем, как важна простая система регистрации и оформления заказа, поэтому делаем все для того, чтобы оформить заказ было удобно (и быстро!).</p>
                </li>
                <li class="advantages-list__item">
                    <img src={second} class="advantages-list__icon" alt=""/>
                    <h4 class="advantage-list__title">Оповещаем о состоянии заказа по SMS</h4>
                    <p class="advantage-list__text">Для тех, кто всегда хочет быть в курсе: вы сами можете контролировать свой заказ, получая статус о его формировании посредством sms-сообщений.</p>
                </li>
                <li class="advantages-list__item">
                    <img src={fird} class="advantages-list__icon" alt=""/>
                    <h4 class="advantage-list__title">Оперативная доставка</h4>
                    <p class="advantage-list__text">Мы привыкли работать с большими объемами заказов, поэтому вам не стоит беспокоиться о том, что ваш заказ будет обработан не вовремя.</p>
                </li>
            </ul>
        </div>
        </section>
  );
}

export default Advantage;
