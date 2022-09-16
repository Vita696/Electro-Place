import "./../../../style/footerSocial.css";
import logo from "./../../../img/footer/Footer/Logo.png";
import face from "./../../../img/footer/icon/face.svg";
import insta from "./../../../img/footer/icon/insta.svg";
import wk from "./../../../img/footer/icon/wk.svg";
import yuotube from "./../../../img/footer/icon/yuotube.svg";

function FooterSocial() {
  return (
    <div className="footer-blackzone">
      <div className="footer-blackzone-contain container">
        <div className="footer-blackzone-left">
          <img className="footer-blackzone-left__logo" src={logo} alt="footer-logo" />
          <p className="footer-blackzone-left__address">
            7-я Кожуховская ул., 9, Москва (этаж 1)
          </p>
        </div>
        <ul className="footer-blackzone-items">
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Скидки
            </a>
          </li>
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Акции
            </a>
          </li>
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Покупателям
            </a>
          </li>
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Информация
            </a>
          </li>
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Доставка
            </a>
          </li>
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Гарантия
            </a>
          </li>
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Кредит и рассрочка
            </a>
          </li>
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Новости
            </a>
          </li>
          <li className="footer-blackzone-items__item">
            <a href="/#" className="footer-blackzone-items__link">
              Вакансии
            </a>
          </li>
        </ul>
        <ul className="footer-blackzone-socialicons">
          <li className="footer-blackzone-socialicons__icon">
            <a className="footer-blackzone-socialicons__link" href="/#">
              <img src={face} alt="" />
            </a>
          </li>
          <li className="footer-blackzone-socialicons__icon">
            <a className="footer-blackzone-socialicons__link" href="/#">
              <img src={insta} alt="" />
            </a>
          </li>
          <li className="footer-blackzone-socialicons__icon">
            <a className="footer-blackzone-socialicons__link" href="/#">
              <img src={wk} alt="" />
            </a>
          </li>
          <li className="footer-blackzone-socialicons__icon">
            <a className="footer-blackzone-socialicons__link" href="/#">
              <img src={yuotube} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterSocial;
