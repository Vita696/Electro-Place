import "./style.css";
import "./../../../style/bestsellers.css";
import like from "./../../../img/bestsellers/like.svg";
import newFing from "./../../../img/bestsellers/new.svg";
import basket from "./img/Product card/Group 4181.png";

function CatalogContent({
  phone,
  title,
  price,
  delPrice = "",
  isLike = false,
}) {
  const hendlerOpen = (event) => {
    event.preventDefault();
    // const btnOpen = document.querySelector(".main-contact-content-info__btn");
    const modalWindow = document.querySelector(".modal-window-catalog");
    // const closeBtn = document.querySelector(".modal-exit-btn");
    modalWindow.classList.add("modal-opacity");

    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
  };
  return (
    <li className="hits-list-products__item">
                        <button className="hits-list-product-prices__btn" type="button">
                            <img src={like} className="hits-list-product-prices__like" alt="like"/>
                        </button>
                        <a href="/#" className="hits-list-products__link">
                            <img src={phone} className="hits-list-products__img" alt=""/>
                            <h4 className="hits-list-products__text">{title}</h4>
                        </a>
                        <div className="hits-list-product-prices">
                            <span className="hits-list-product-prices__old-price">{delPrice}</span>
                            <span className="hits-list-product-prices__discount-price">{price}</span>
                        </div>
                </li>
  );
}

export default CatalogContent;
