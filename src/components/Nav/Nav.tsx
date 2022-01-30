import { useState } from "react";
import TopNav from "./components/TopNav/TopNav";
import BottomNav from "./components/BottomNav/BottomNav";
import { Container } from "react-bootstrap";
import { MenuLine, NavWrapper } from "./navStyles";

const Nav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <NavWrapper className="nav">
        <Container>
          <TopNav handleShowMenu={handleShowMenu} />
        </Container>

        <MenuLine />

        <Container>
          <BottomNav showMenu={showMenu}/>
        </Container>
      </NavWrapper>
    </>
  );
};

export default Nav;
