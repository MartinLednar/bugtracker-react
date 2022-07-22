import { Link } from "react-router-dom";
import "./logo-link.style.scss";

const LogoLink = () => (
  <div className="logo-box">
    <Link to="/" className="logo">
      <img src="/img/logo.svg" alt="Bugtracker logo" className="logo-img" />
      Bug Tracker
    </Link>
  </div>
);

export default LogoLink;
