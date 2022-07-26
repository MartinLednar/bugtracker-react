import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SidebarMain from "../../sidebar/sidebar.component";
import { MainBoxContainer } from "../../universal-styles";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (false) {
      return navigate("/login");
    }
  });

  return (
    <MainBoxContainer>
      <SidebarMain />

      <Outlet />
    </MainBoxContainer>
  );
};

export default HomePage;
