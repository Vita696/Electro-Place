import "./../../../style/bestsellers.css";
import { Link } from "react-router-dom";
import like from "./../../../img/bestsellers/like.svg";
import newFing from "./../../../img/bestsellers/new.svg";
import kettle from "./../../../img/bestsellers/kettle.png";
import multivar from "./../../../img/bestsellers/multivar.png";
import phone from "./../../../img/bestsellers/phone.png";
import vac from "./../../../img/bestsellers/vacuumClear.png";

function Bestsellers() {
  return (
    <section className="sailes-hits container">
            <div className="sailes-hits-top">
                <h2 className="sailes-hits-top__title">Хиты продаж</h2>
                <button className="sailes-hits-top__btn" type="button">Смотреть все</button>
            </div>
            <ul className="hits-list">
                <li className="hits-list-products__item">
                        <button className="hits-list-product-prices__btn" type="button">
                            <img src={like} className="hits-list-product-prices__like" alt="like"/>
                        </button>
                        <a href="/#" className="hits-list-products__link">
                            <img src={multivar} className="hits-list-products__img" alt=""/>
                            <h4 className="hits-list-products__text">Мультиварка Redmond</h4>
                        </a>
                        <div className="hits-list-product-prices">
                            <span className="hits-list-product-prices__old-price">6 990 ₽</span>
                            <span className="hits-list-product-prices__discount-price">5 533 ₽</span>
                        </div>
                </li>
                <li className="hits-list-products__item">
                    <div className="hits-list-products">
                        <button className="hits-list-product-prices__btn" type="button">
                            <img src={like}  className="hits-list-product-prices__like" alt=""/>
                        </button>
                        <a href="/#" className="hits-list-products__link">
                            <img src={phone} className="hits-list-products__img" alt=""/>
                            <h4 className="hits-list-products__text">Смартфон Huawei Mate 40 Pro Mystic Silver</h4>
                        </a>
                        <div className="hits-list-product-prices">
                            <span className="hits-list-product-prices-discount__price">36 990 ₽</span>
                        </div>
                    </div>
                </li>
                <li className="hits-list-products__item">
                    <div className="hits-list-products">
                        <button className="hits-list-product-prices__btn" type="button">
                            <img src={like}  className="hits-list-product-prices__like" alt=""/>
                        </button>
                        <a href="/#" className="hits-list-products__link">
                            <img src={kettle} className="hits-list-products__img" alt=""/>
                            <h4 className="hits-list-products__text">Электрочайник Moulinex</h4>
                        </a>
                        <div className="hits-list-product-prices">
                            <span className="hits-list-product-prices__old-price">3 990 ₽</span>
                            <span className="hits-list-product-prices__discount-price">1 990 ₽</span>
                        </div>
                    </div>
                </li>
                <li className="hits-list-products__item">
                    <div className="hits-list-products">
                        <img src="" className="hits-list-products__flash" alt=""/>
                        <button className="hits-list-product-prices__btn" type="button">
                            <img src={like}  className="hits-list-product-prices__like" alt=""/>
                        </button>
                        <a href="/#" className="hits-list-products__link">
                            <img src={vac} className="hits-list-products__img" alt=""/>
                            <h4 className="hits-list-products__text">Пылесос с контейнером для пыли Tefal City Space</h4>
                        </a>
                        <div className="hits-list-product-prices">
                            <span className="hits-list-product-prices__old-price">16 990 ₽</span>
                            <span className="hits-list-product-prices__discount-price">14 990 ₽</span>
                        </div>
                    </div>
                </li> 
            </ul>
      </section>
  );
}

export default Bestsellers;
