import { useSelector } from "react-redux";
import { Home, HelpCircle, LogOut, ChevronRight } from "react-feather";
import CustomNavLink from "../nav-link/nav-link.component";
import { SidebarMainContainer } from "./sidebar.style";
import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../arrow-link/arrow-link.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/slices/user-slice/user.selector";

const SidebarMain = () => {
  const { displayName = "Loading..." } = useSelector(selectCurrentUser);
  const handleClick = async () => await signOutUser();
  return (
    <SidebarMainContainer>
      <div className="profile-box">
        <img className="profile-img" src="/img/basicProfile.svg" alt="Profile" />

        <div className="profile-text-box">
          <h2 className="profile-name">{displayName}</h2>

          <ArrowLink to="/profile" linkType={ARROW_LINK_TYPE_CLASSES.basic}>
            View profile
            <ChevronRight />
          </ArrowLink>
        </div>
      </div>

      <nav>
        <li className="nav-item">
          <CustomNavLink to="/projects">
            <Home />
            My projects
          </CustomNavLink>
        </li>

        <li className="nav-item">
          <CustomNavLink to="/guide">
            <HelpCircle />
            Guide
          </CustomNavLink>
        </li>

        <li className="nav-item">
          <CustomNavLink as="p" onClick={handleClick} style={{ color: "var(--color-red)" }}>
            <LogOut />
            Sign out
          </CustomNavLink>
        </li>
      </nav>

      <h4 className="author">
        Site by{" "}
        <a href="https://martinlednar.netlify.app" target="_blank" rel="noreferrer" className="in-text-link">
          Martin Lednár
        </a>
      </h4>
      <h4 className="copyright">Copyright © 2022</h4>
    </SidebarMainContainer>
  );
};

export default SidebarMain;
