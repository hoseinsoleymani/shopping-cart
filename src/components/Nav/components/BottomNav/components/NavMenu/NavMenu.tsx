import { navMenuItems, navMenuItemsRes } from "./../../../../data/navMenuItems";
import MenuItem from "../../../MenuItem/MenuItem";
import { NavLink } from "react-router-dom";
import { Li } from "./../../../MenuItem/menuItemStyles";
import {
  MenuDesktopWrapper,
  Wrapper,
  MenuResponsiveWrapper,
} from "./navMenuStyle";
import { FiHome } from "react-icons/fi";
import {
  MdProductionQuantityLimits,
  MdOutlineContactMail,
} from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";

interface Props {
  showMenu: boolean;
}

const NavMenu: React.FC<Props> = ({ showMenu }) => {
  return (
    <Wrapper>
      <MenuDesktopWrapper>
        {navMenuItems?.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </MenuDesktopWrapper>

      <MenuResponsiveWrapper showMenu={showMenu}>
        <h2>E-Comm</h2>
        <Li>
          <NavLink to="/">
            <FiHome />
            <span>Home</span>
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/products">
            <MdProductionQuantityLimits />
            <span>Products</span>
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/contact">
            <MdOutlineContactMail />
            <span>Contact</span>
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/about">
            <SiAboutdotme />
            <span>About us</span>
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/auth/login">
            <span>Login</span>
          </NavLink>
        </Li>
      </MenuResponsiveWrapper>
    </Wrapper>
  );
};

export default NavMenu;
