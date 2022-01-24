import { ReactNode } from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
interface Props {
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export const AuthLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
