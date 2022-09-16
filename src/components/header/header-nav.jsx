import menuBtn from "./../../img/header-img/menu-icon.png";
import { Link } from "react-router-dom";


function HeaderNav(props) {
  // console.log(props);
  const { title } = props;
  return (
    <div className="header-nav__wrapper container">
      <div className="header-nav">
        <div className="header-nav-button">
          <Link to="/about">
            <button className="header-nav-button__btn">Каталог</button>
            <img className="header-nav-button__img" src={menuBtn} alt="" />
          </Link>
        </div>
        <nav className="header-bottom-nav">
          <ul className="header-bottom-nav-list">
            {title.map((item, index) => {
              return (
                <li key={index} className="header-bottom-nav-list__item">
                  <Link to="./about" className="header-bottom-nav-list__link">
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNav;
