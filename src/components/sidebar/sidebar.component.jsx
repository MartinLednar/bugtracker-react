import { Link } from "react-router-dom";
import { Home, Briefcase, Bell, HelpCircle, LogIn, LogOut, ChevronRight } from "react-feather";
import CustomNavLink from "../nav-link/nav-link.component";
import { SidebarMainContainer } from "./sidebar.style";

const SidebarMain = () => (
  <SidebarMainContainer>
    <div className="profile-box">
      <img className="profile-img" src="/img/basicProfile.svg" alt="Profile" />

      <div className="profile-text-box">
        <h2 className="profile-name">Martin Lednár</h2>

        <Link to="/profile" className="under-text-link">
          View profile
          <ChevronRight />
        </Link>
      </div>
    </div>

    <nav>
      <li className="nav-item">
        <CustomNavLink to="/">
          <Home />
          My projects
        </CustomNavLink>
      </li>
      <li className="nav-item">
        <CustomNavLink to="/tasks">
          <Briefcase />
          My tasks
        </CustomNavLink>
      </li>
      <li className="nav-item">
        <CustomNavLink to="/notifications">
          <Bell />
          Notifications
          <span className="notification">1</span>
        </CustomNavLink>
      </li>
      <li className="nav-item">
        <CustomNavLink to="/guide">
          <HelpCircle />
          Guide
        </CustomNavLink>
      </li>
      <li className="nav-item">
        <CustomNavLink to="/login">
          <LogIn />
          Login page
        </CustomNavLink>
      </li>
      <li className="nav-item">
        <CustomNavLink to="/" style={{ color: "var(--color-red)" }}>
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

export default SidebarMain;
