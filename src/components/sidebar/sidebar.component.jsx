import { Link } from "react-router-dom";
import { Home, Briefcase, Bell, HelpCircle, LogIn, LogOut, ChevronRight } from "react-feather";
import "./sidebar.style.scss";

const SidebarMain = () => (
  <div className="sidebar">
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
        <Link to="/" className="nav-link">
          <Home />
          My projects
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/tasks" className="nav-link">
          <Briefcase />
          My tasks
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/notifications" className="nav-link">
          <Bell />
          Notifications
          <span className="notification">1</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/guide" className="nav-link">
          <HelpCircle />
          Guide
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          <LogIn />
          Login page
        </Link>
      </li>
      <li className="nav-item">
        <p className="nav-link">
          <LogOut />
          Sign out
        </p>
      </li>
    </nav>

    <h4 className="author">
      Site by{" "}
      <a href="https://martinlednar.netlify.app" target="_blank" rel="noreferrer" className="in-text-link">
        Martin Lednár
      </a>
    </h4>
    <h4 className="copyright">Copyright © 2022</h4>
  </div>
);

export default SidebarMain;
