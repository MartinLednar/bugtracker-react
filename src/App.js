import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentUser } from "./store/slices/user-slice/user.slice";
import LogoLink from "./components/logo-link/logo-link.component";
import "./App.css";

import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";

import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (userAuth) => {
      if (userAuth) {
        const userData = await createUserDocumentFromAuth(userAuth);
        return dispatch(setCurrentUser(userData.data()));
      }
      dispatch(setCurrentUser(userAuth));
    });

    return () => unsubscribe();
  });

  return (
    <Fragment>
      <LogoLink />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<LoginPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
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
