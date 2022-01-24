import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../../api/useLogin";
import Input from "../../components/Input/Input";
import { isString, useFormik } from "formik";
import * as Yup from "yup";
import ReactLoading from "react-loading";
import { LoginBody } from "./../../api/useLogin";

export interface loginUserType {
  identifier: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik<LoginBody>({
      initialValues: {
        identifier: "",
        password: "",
      },

      validationSchema: Yup.object({
        identifier: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
      }),

      onSubmit: (user) => {
        login(user)
          .then((res) => {
            localStorage.setItem("token", res.jwt);
            navigate("/");
          })
          .catch((error) => {
            error.response;
          });
      },
    });

  const { mutateAsync: login, isLoading } = useLogin();

  return (
    <div className="form__container">
      <h2 className="form__title">Log in</h2>

      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form__item">
          <Input
            type="email"
            name="identifier"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="example@mail.com"
            value={values.identifier}
          />
          {touched.identifier && errors.identifier && (
            <div className="error__message">{errors.identifier}</div>
          )}
        </div>

        <div className="form__item">
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="at least 8"
            value={values.password}
          />
          {touched.password && errors.password && (
            <div className="error__message">{errors.password}</div>
          )}
        </div>

        <div className="form__checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>

        <button className="product-page__btn" type="submit">
          Log in
        </button>

        <NavLink to="/forgot-password" className="forgot__btn">
          Forgot Password
        </NavLink>

        <hr />

        <div className="have-account">
          Dont have an account?
          <br />
          <NavLink to="/register">Register</NavLink>
        </div>
      </form>

      {isLoading && (
        <ReactLoading
          type={"bars"}
          color={"#45486e"}
          width={175}
          className="loading"
        />
      )}
    </div>
  );
};

export default Login;
