import Logo from "../../../Logo/Logo";
import NavMenu from "./components/NavMenu/NavMenu";
import { Wrapper } from "./bottomNavStyles";
interface Props {
  showMenu: boolean;
}

const BottomNav: React.FC<Props> = ({ showMenu }) => {
  return (
    <Wrapper>
      <Logo link="/" />

      <NavMenu showMenu={showMenu} />
    </Wrapper>
  );
};

export default BottomNav;
