import { NavLink, useNavigate } from "react-router-dom";
import { useRegister } from "../../../api/useRegister";
import Input from "../../../components/Input/Input";
import ReactLoading from "react-loading";
import { useFormik } from "formik";
import { Wrapper, InputContainer } from "../loginStyles";
import * as Yup from "yup";
import { RegisterBody } from "./../../../api/useRegister";

const Register = () => {
  const navigate = useNavigate();

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik<RegisterBody>({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string().email("Email is invalid").required("Required"),
        password: Yup.string()
          .min(8, "At Least 8 Characters")
          .max(12, "Maximum 8 Characters")
          .required("Required"),
      }),
      onSubmit: (user) => {
        register(user, {
          onSuccess() {
            navigate("/auth/login");
          },
        });
      },
    });

  const { mutate: register, isLoading } = useRegister();

  return (
    <>
      <Wrapper>
        <h2>Register</h2>
        <form action="" onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="User Name"
              value={values.username}
              label="User Name"
            />

            {touched.username && errors.username && (
              <div className="text-danger">{errors.username}</div>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="example@mail.com"
              value={values.email}
              label="Email"
            />
            {touched.email && errors.email && (
              <div className="text-danger">{errors.email}</div>
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
              label="Password"
            />
            {touched.password && errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </InputContainer>

          <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>

          <button type="submit">Register</button>

          <hr />

          <div>
            Already have an account
            <br />
            <NavLink to="/register">Login</NavLink>
          </div>
        </form>
        {isLoading && (
          <ReactLoading type={"bars"} color={"#45486e"} width={175} />
        )}
      </Wrapper>
      )
    </>
  );
};

export default Register;
