import "./catalogModal.css";

function ModalWindow() {
  const hendlerClose = () => {
    const modalWindow = document.querySelector(".modal-window-catalog");
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
  };
  return (
    <div className="modal-window-catalog">
      <div className="modal-window-catalog__info">
        <h2 className="modal-window-catalog__title">
          Товар добавлен в корзину!
        </h2>
        <form
          className="modal-window-catalog-info-form"
          action="#"
          method="post"
        >
          <button className="getGift modal-window-catalog__btn">
            Оформить заказ
          </button>

          <button
            className="deginerShoping modal-window-catalog__btn"
            type="submit"
          >
            Продолжить покупки
          </button>
        </form>
        <div className="modal-exit-btn" onClick={hendlerClose}>
          <span className="span1"></span>
          <span className="span2"></span>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
