import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SidebarMain from "../../sidebar/sidebar.component";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (false) {
      return navigate("/login");
    }
  });

  return (
    <div className="main-box">
      <SidebarMain />

      <Outlet />
    </div>
  );
};

export default HomePage;
