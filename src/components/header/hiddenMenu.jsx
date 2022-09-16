import menuBtn from "./../../img/header-img/menu-icon.png";

function HiddenMenu() {
  return (
    <div className="header-center__hidden container">
      <div className="header-nav-button">
        <button className="header-nav-button__btn">Каталог</button>
        <img className="header-nav-button__img" src={menuBtn} alt="" />
      </div>
      <div className="header-center-input">
        <input
          className="header-center-input__search"
          type="text"
          placeholder="Поиск..."
        />
        <span className="header-center-input__btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7796 16.7216L13.4522 12.3943C14.5249 11.0865 15.1714 9.41143 15.1714 7.58571C15.1714 3.39796 11.7735 0 7.58571 0C3.39429 0 0 3.39796 0 7.58571C0 11.7735 3.39429 15.1714 7.58571 15.1714C9.41143 15.1714 11.0829 14.5286 12.3906 13.4559L16.718 17.7796C17.0118 18.0735 17.4857 18.0735 17.7796 17.7796C18.0735 17.4894 18.0735 17.0118 17.7796 16.7216ZM7.58571 13.6616C4.23184 13.6616 1.50612 10.9359 1.50612 7.58571C1.50612 4.23551 4.23184 1.50612 7.58571 1.50612C10.9359 1.50612 13.6653 4.23551 13.6653 7.58571C13.6653 10.9359 10.9359 13.6616 7.58571 13.6616Z"
              fill="#005AAB"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
export default HiddenMenu;
