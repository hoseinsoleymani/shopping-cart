import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../../../api/useLogin";
import Input from "../../../components/Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactLoading from "react-loading";
import { LoginBody } from "../../../api/useLogin";
import { Wrapper, RememberPass , InputContainer} from "../loginStyles";

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
            console.log(error.response);
          });
      },
    });

  const { mutateAsync: login, isLoading } = useLogin();

  return (
    <Wrapper>
      <h3>Log in</h3>

      <form action="" onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="email"
            name="identifier"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="example@mail.com"
            value={values.identifier}
          />
          {touched.identifier && errors.identifier && (
            <div className="text-danger">{errors.identifier}</div>
          )}
        </InputContainer>

        <InputContainer>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="at least 8"
            value={values.password}
          />
          {touched.password && errors.password && <div className="text-danger">{errors.password}</div>}
        </InputContainer>

        <RememberPass>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </RememberPass>

        <button type="submit" className="button">Log in</button>

        <NavLink to="/forgot-password">Forgot Password</NavLink>

        <hr />

        <p className="last">
          Dont have an account?
          <br />
          <NavLink to="/register">Register</NavLink>
        </p>
      </form>

      {isLoading && (
        <ReactLoading
          type={"bars"}
          color={"#45486e"}
          width={175}
          className="loading"
        />
      )}
    </Wrapper>
  );
};

export default Login;
