import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LogoLink from "./components/logo-link/logo-link.component";
import "./App.css";

//MAIN PAGES
import HomePage from "./components/pages/Homepage/homepage.component";
//MAIN PAGES

//PAGES
import GuidePage from "./components/routes/Guide/guide.component";
import IssuePage from "./components/routes/Issue/issue.component";
import LoginPage from "./components/routes/Login/login.component";
import NotificationsPage from "./components/routes/Notifications/notifications.component";
import ProfilePage from "./components/routes/Profile/profile.component";
import ProjectPage from "./components/routes/Project/project.component";
import ProjectsPage from "./components/routes/Projects/projects.component";
import TasksPage from "./components/routes/Tasks/tasks.component";
//PAGES

function App() {
  return (
    <Fragment>
      <LogoLink />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />}>
          <Route index element={<ProjectsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/project/:projectID">
            <Route index element={<ProjectPage />} />
            <Route path="issue/:issueID" element={<IssuePage />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
