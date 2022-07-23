import { Link } from "react-router-dom";
import { LogoLinkContainer } from "./logo-link.style";

const LogoLink = () => (
  <LogoLinkContainer>
    <Link to="/" className="logo">
      <img src="/img/logo.svg" alt="Bugtracker logo" className="logo-img" />
      Bug Tracker
    </Link>
  </LogoLinkContainer>
);

export default LogoLink;
