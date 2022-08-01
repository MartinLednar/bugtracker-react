import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import SidebarMain from "../../sidebar/sidebar.component";
import { MainBoxContainer } from "../../universal-styles";

//SELECTORS
import { selectCurrentUser } from "../../../store/slices/user-slice/user.selector";
//SELECTORS

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  console.log(currentUser);

  useEffect(() => {
    if (!currentUser && location.pathname !== "/") {
      return navigate("/");
    }
    if (currentUser && location.pathname === "/") {
      return navigate("/projects");
    }
  });

  return (
    <MainBoxContainer>
      {location.pathname !== "/" && <SidebarMain />}

      <Outlet />
    </MainBoxContainer>
  );
};

export default HomePage;
