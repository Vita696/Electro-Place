function HeaderTop() {
  return (
    <div className="header-top__wrapper">
      <div className="header-top">
        <div className="header-top-menu">
            <ul className="header-top-menu-items">
                <li className="header-top-menu-items__item">
                    <a href="/#" className="header-top-menu-items__link">Магазины</a>
                </li>
                <li className="header-top-menu-items__item">
                    <a href="/#" className="header-top-menu-items__link">Доставка и оплата</a>
                </li>
                <li className="header-top-menu-items__item">
                    <a href="/#" className="header-top-menu-items__link">Кредиты и рассрочка</a>
                </li>
            </ul>
            <a href="tel:84954448885" className="header-top-menu-items__contact">8 (495) 444-888-5</a>
        </div>
      </div>
    </div>
  );

}

export default HeaderTop;
