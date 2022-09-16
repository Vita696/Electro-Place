import "./../../../style/contact.css";
import { YMaps, Map, Placemark, SearchControl } from "react-yandex-maps";

function Contact() {
  const hendlerOpen = (event) => {
    event.preventDefault();
    // const btnOpen = document.querySelector(".main-contact-content-info__btn");
    const modalWindow = document.querySelector(".modal-window");
    // const closeBtn = document.querySelector(".modal-exit-btn");
    modalWindow.classList.add("modal-opacity");

    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log(event);
  };
  const toggleBgc = (e) => {
    alert("Спасибо за клик))))))");
  };
  return (
    <section className="main-contact">
      <h2 className="main-contact__title container main-title">Контакты</h2>
      <div className="main-contact-content container">
        <div id="main-contact__map">
          <YMaps>
            <div>
              <Map
                defaultState={{
                  center: [55.75, 37.57],
                  zoom: 9,
                }}
                // width="700px"
                // height="356px"
                width="750px"
                height="356px"
              >
                <Placemark
                  geometry={[55.75, 37.67]}
                  onClick={(e) => toggleBgc(e)}
                />
                <SearchControl
                  options={{
                    float: "left",
                    provider: "yandex#search",
                    size: "large",
                  }}
                />
              </Map>
            </div>
          </YMaps>
        </div>

        <div className="main-contact-content-info">
          <div className="main-contact-content-info-adress flex">
            <span className="main-contact-content-info-adress__adress">
              Адрес
            </span>
            <span className="main-contact-content-info-adress__info">
              7-я Кожуховская ул., 9, Москва (этаж 1)
            </span>
          </div>
          <div className="main-contact-content-info-phone flex">
            <span className="main-contact-content-info-phone__adress">
              Телефон
            </span>
            <span className="main-contact-content-info-phone__info">
              8 (495) 444-888-5
            </span>
          </div>
          <div className="main-contact-content-info-work flex">
            <span className="main-contact-content-info-work__adress">
              График работы
            </span>
            <span className="main-contact-content-info-work__info">
              Пн-Пт 9:00 до 20:00
            </span>
          </div>

          <button
            className="main-contact-content-info__btn"
            onClick={hendlerOpen}
          >
            Написать нам
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
