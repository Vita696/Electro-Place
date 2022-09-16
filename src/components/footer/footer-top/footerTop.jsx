import { Formik, Form } from "formik";
import * as yup from "yup";
import "./../../../style/footerTop.css";

function FooterTop() {
  const REG_EXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .matches(REG_EXP, "Не соответствует правилу") // Проверка на соответствие регулярному выражению.
      .email("Введите верный email")
      .required("Обязательно"),
  });
  return (
    <div className="footer-topzone">
      <div className="footer-topzone-search container">
        <h2 className="footer-topzone-search__title">
          Получайте самые интересные предложения первыми!
        </h2>

        <Formik
          initialValues={{
            email: "",
          }}
          validateOnBlur
          onSubmit={(values) => console.log(values)}
          validationsSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <Form className="footer-topzone-search-input">
              <input
                type={"text"}
                name={"email"}
                className={"footer-topzone-search-input__mail"}
                placeholder={"Введите ваш e-mail"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {touched.email && errors.email ? (
                <p className={"error"}>{errors.email}</p>
              ) : null}
              <button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type={"submit"}
                className={"footer-topzone-search-input__btn"}
              >
                Подписаться
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FooterTop;
