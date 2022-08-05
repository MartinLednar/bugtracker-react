import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import SidebarMain from "../../sidebar/sidebar.component";
import { MainPageContainer } from "./homepage.style";

//SELECTORS
import { selectCurrentUser } from "../../../store/slices/user-slice/user.selector";
//SELECTORS

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (Array.isArray(currentUser) && location.pathname !== "/") {
      return navigate("/");
    } else if (!Array.isArray(currentUser) && location.pathname === "/") {
      return navigate("/projects");
    }
  });

  return (
    <MainPageContainer>
      {location.pathname !== "/" && <SidebarMain />}

      <Outlet />
    </MainPageContainer>
  );
};

export default HomePage;
