import SiteName from "./SiteName";
import UserWelcome from "./UserWelcome";

function Header() {
  return (
    <div>
      <h2>
        Header
      </h2>
      <hr/>
      <SiteName/>This is a site name
      <UserWelcome/>
      <hr/>
    </div>
  );
}

export default Header;