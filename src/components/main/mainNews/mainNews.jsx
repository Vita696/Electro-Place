import "./../../../style/mainNews.css";

function MainNews() {
  return (
    <section class="news-promotion container">
            <div class="news-promotion-top">
                <h2 class="news-promotion-top__title">Новости и акции</h2>
                <button class="news-promotion-top__btn" type="button">Смотреть все</button>
            </div>
            <div class="news-promotion-items">
                <div class="news-promotion__item-big">
                    <div class="news-promotion__item-text">
                        <a href="/#" class="news-promotion__item-link">Бренд BLOODY представил мышь W60 Pro
                        <span>Популярный бренд компьютерных аксессуаров</span>
                        </a>
                    <button type="button" class="news-promotion__btn-big">Подробнее</button>
                    </div>
                </div>
                <div class="news-promotion__item">
                    <a href="/#" class="news-promotion__item-text">Плата asus</a>
                    <button type="button" class="news-promotion__btn">Подробнее</button>
                </div>
                <div class="news-promotion__item">
                    <a href="/#" class="news-promotion__item-text">Системный блок acer</a>
                    <button type="button" class="news-promotion__btn">Подробнее</button>
                </div>
                <div class="news-promotion__item">
                    <a href="/#" class="news-promotion__item-text">Планшет samsung</a>
                <button type="button" class="news-promotion__btn">Подробнее</button>
                </div>
                <div class="news-promotion__item">
                        <a href="/#" class="news-promotion__item-text">Новые наушники Razer</a>
                    <button type="button" class="news-promotion__btn">Подробнее</button>
                </div>
                <div class="news-promotion__item">
                    <a href="/#" class="news-promotion__item-text">Мультипекарь Redmond плюс</a>
                <button type="button" class="news-promotion__btn">Подробнее</button>
                </div>
            </div>
        </section>
  );
}

export default MainNews;
