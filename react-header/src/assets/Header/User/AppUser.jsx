import Logout from "./Logout";
import Profile from "./Profile";
import Settings from "./Settings";
import Status from "./Status";
const AppUser = () => {
  return (
    <div className="userProfile">
      <div className="userIcon"></div>
      <div className="profileMenu">
        <Profile />
        <Settings />
        <Status />
        <Logout />
      </div>
    </div>
  );
};

export default AppUser;
