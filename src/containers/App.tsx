import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AuthLayout, MainLayout } from "../components/MainLayout";
import { useAuthStore } from "../store/store";
import { useGetUser } from "../api/useGetUser";
import { decodedToken } from "./../utils/decoded";

const Home = lazy(() => import("./Home/Home"));
const ProductPage = lazy(() => import("../components/ProductPage/ProductPage"));
const Register = lazy(() => import("./auth/Register/Register"));
const Login = lazy(() => import("./auth/Login/Login"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Products = lazy(() => import("./Products/Products"));
const Contact = lazy(() => import("./Contact/Contact"));
const About = lazy(() => import("./About/About"));
const Cart = lazy(() => import("./Cart/Cart"));

const App = () => {
  const logout = useAuthStore((state) => state.logout);
  const login = useAuthStore((state) => state.login);
  const authPayload = decodedToken();

   const { data: user } = useGetUser(authPayload?.id);

  useEffect(() => {
    if (authPayload == null) logout();
    if (user) login(user);
  }, [user, authPayload]);

  return (
    <Routes>
      <Route index element={<Home />}></Route>

      <Route path="auth/*" element={<AuthLayout />}>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<Navigate to="/auth/login" />}></Route>
      </Route>
    
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/cart" element={<Cart />}></Route>

      <Route path="/products/:id" element={<ProductPage />}></Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
