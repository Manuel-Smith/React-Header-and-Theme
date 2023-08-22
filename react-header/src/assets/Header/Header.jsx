import AppUser from "./User/AppUser";
import DisplaySection from "./Display/DisplaySection";
import Menu from "./Menu/Menu";
const Header = () => {
  return (
    <>
      <Menu />
      <DisplaySection />
      <AppUser />
    </>
  );
};

export default Header;
