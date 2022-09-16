import "./../../style/modalWindow.css";
import InputMask from "react-input-mask";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function Modal() {
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  // const [phones, setPhone] = useState("");
  const hendlerClose = (event) => {
    const modalWindow = document.querySelector(".modal-window");
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
    // html.style.marginRight = "";
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    handleSubmit,
    dirty,
  } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      massage: "",
    },
    validationsSchema: yup.object().shape({
      name: yup
        .string()
        .min(3, "min три символа")
        .typeError("Должно быть строкой")
        .required("Обязательно"),
      phone: yup
        .number()
        .typeError("Должны быть цифры")
        .required("Обязательно"),
      massage: yup
        .string()
        .max(20, "shot massage")
        .typeError("Должно быть строкой")
        .required("Обязательно"),
    }),
  });

  return (
    <div className="modal-window">
      <div className="modal-window-info">
        <h2 className="modal-window-info-form__title">Написать нам</h2>

        <form className={"modal-window-info-form"} onSubmit={handleSubmit}>
          <input
            className="modal-window-info-form__name"
            name="name"
            type="text"
            placeholder="Ваше имя"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && (
            <div className={"errorsmsg"}>{errors.name}</div>
          )}
          <InputMask
            className="modal-window-info-form__phone"
            name="phone"
            placeholder="Ввидите phone"
            type="tel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            mask={"+7(999) 999-9999"}
            maskChar={" "}
          />
          {touched.phone && errors.phone && (
            <div className={"errorsmsg"}>{errors.phone}</div>
          )}
          <textarea className="modal-window-info-form__textarea"
            name={"massage"}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.massage}
            cols={"50"}
            rows={"4"}
          >
            Сообщение
          </textarea>
          {touched.massage && errors.massage && (
            <p className={"errorsmsg"}>{errors.massage}</p>
          )}
          <button
            disabled={!isValid || !dirty}
            onClick={handleSubmit}
            className={"modal-window-info-form__btn"}
            type={"submit"}
          >
            Отправить
          </button>
        </form>

        <div className="modal-exit-btn" onClick={hendlerClose}>
        </div>
      </div>
    </div>
  );
}

export default Modal;
