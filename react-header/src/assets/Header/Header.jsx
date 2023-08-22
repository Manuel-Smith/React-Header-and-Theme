import AppUser from "./User/AppUser";
import DisplaySection from "./Display/DisplaySection";
import Menu from "./Menu/Menu";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
const Header = () => {
  return (
    <>
      <Menu />
      <DashboardHeader />
      <DisplaySection className="InteractiveDisplay" />
      <AppUser />
    </>
  );
};

export default Header;
