import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Home, HelpCircle, LogOut, ChevronRight } from "react-feather";
import CustomNavLink from "../nav-link/nav-link.component";
import { SidebarMainContainer, SidebarModal } from "./sidebar.style";
import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../arrow-link/arrow-link.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { X } from "react-feather";
import { ProfileImage } from "../universal-styles";
import { selectCurrentUser } from "../../store/slices/user-slice/user.selector";

const SidebarMain = ({ navModal, toggleMethod, isOpen }) => {
  const { displayName = "Loading...", profileImage = {} } = useSelector(selectCurrentUser);
  const handleClick = async () => await signOutUser();
  return (
    <Fragment>
      {navModal ? (
        <SidebarModal isOpen={isOpen}>
          <X onClick={toggleMethod} name="sidebarMain" />

          <div className="profile-box">
            <ProfileImage imgSrc={profileImage.imgURL} />

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
        </SidebarModal>
      ) : (
        <SidebarMainContainer>
          <div className="profile-box">
            <ProfileImage imgSrc={profileImage.imgURL} />

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
      )}
    </Fragment>
  );
};

export default SidebarMain;
