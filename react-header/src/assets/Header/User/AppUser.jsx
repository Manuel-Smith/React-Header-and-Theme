import Logout from "./Logout";
import Profile from "./Profile";
import Settings from "./Settings";
import Status from "./Status";
const AppUser = () => {
  return (
    <div>
      <Profile />
      <Settings />
      <Status />
      <Logout />
    </div>
  );
};

export default AppUser;
