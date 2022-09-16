import "./../../../style/popularbrands.css";
import samsung from "./../../../img/popularBrands/samsung.png";
import oralb from "./../../../img/popularBrands/oralB.png";
import lg from "./../../../img/popularBrands/LG.png";
import iphone from "./../../../img/popularBrands/iphone.png";
import apc from "./../../../img/popularBrands/apc.png";
import xiaomi from "./../../../img/popularBrands/xiaomi.png";
import LGOled from "./../../../img/popularBrands/LGOled.png";
import digma from "./../../../img/popularBrands/digma.png";

function Popularbrands() {
  return (
    <section class="popular-brends container">
    <div class="popular-brends-top">
        <h2 class="popular-brends-top__title">Популярные бренды</h2>
        <button class="popular-brends-top__btn" type="button">Смотреть все</button>
    </div>
    <ul class="popular-brends-list">
        <li class="popular-brends-list__item">
            <img src={samsung} alt="samsung"/>
        </li>
        <li class="popular-brends-list__item">
            <img src={oralb} alt="oral-b"/>
        </li>
        <li class="popular-brends-list__item">
            <img src={lg} alt="lg"/>
        </li>
        <li class="popular-brends-list__item">
            <img src={iphone} alt="iphone"/>
        </li>
        <li class="popular-brends-list__item">
            <img src={apc} alt="apc"/>
        </li>
        <li class="popular-brends-list__item">
            <img src={xiaomi} alt="xiaomi"/>
        </li>
        <li class="popular-brends-list__item">
            <img src={LGOled} alt="lg_oled"/>
        </li>
        <li class="popular-brends-list__item">
            <img src={digma} alt="digma"/>
        </li>
    </ul>
    </section>
  );
}

export default Popularbrands;
