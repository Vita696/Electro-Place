import banner from "./../../../img/slider/banner.png";

function Banner() {
  return (
    <div class="main-slider-banner">
      <h2 className="main-slider-banner__title">
        Новая линейка телевизоров samsung
      </h2>
      <img className="main-slider-banner__img" src={banner} alt="" />
      <button className="main-slider-banner__btn">Смотреть каталог</button>
    </div>
  );
}

export default Banner;
