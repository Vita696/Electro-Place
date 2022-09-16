import logo from "./../../img/header-img/Logo.png";
import { Link } from "react-router-dom";

function HeaderCenter() {
  return (

    <div className="header-center">
      <div className="header-center-logo">
          <Link className="header-center-logo__link" to="/">
            <img src={logo} alt="logo" />
          </Link>
      </div>
      <div className="header-center-search">
          <form action="#" method="get">
            <input
                className="header-center-search__input"
                type="text"
                placeholder="Поиск..."
              />  
            </form> 
      </div>
      <ul className="header-center-right-list">
          <li className="header-center-right-list__item">
              <a href="/#" className="header-center-right-list__favorite">
              Избранное (0)
              </a>
          </li>
          <li className="header-center-right-list__item">
              <a href="/#" className="header-center-right-list__basket">
                Корзина (0)
              </a>
          </li>
      </ul>
</div>
  );
}

export default HeaderCenter;
