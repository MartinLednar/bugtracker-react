import { Fragment, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentUser } from "./store/slices/user-slice/user.slice";
import LogoLink from "./components/logo-link/logo-link.component";
import "./App.css";
import { doc, onSnapshot } from "firebase/firestore";
import { createUserDocumentFromAuth, firestore } from "./utils/firebase/firebase.utils";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

//MAIN PAGES
import HomePage from "./components/pages/Homepage/homepage.component";
//MAIN PAGES

//PAGES
import GuidePage from "./components/routes/Guide/guide.component";
import IssuePage from "./components/routes/Issue/issue.component";
import LoginPage from "./components/routes/Login/login.component";
import ProfilePage from "./components/routes/Profile/profile.component";
import ProjectPage from "./components/routes/Project/project.component";
import ProjectsPage from "./components/routes/Projects/projects.component";
//PAGES

function App() {
  const dispatch = useDispatch();
  const userUnubscribeRef = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (userAuth) => {
      if (userAuth) {
        const userId = await createUserDocumentFromAuth(userAuth);
        userUnubscribeRef.current = onSnapshot(doc(firestore, "users", userId), (userDoc) => dispatch(setCurrentUser(userDoc.data())));
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => {
      userUnubscribeRef.current?.();
      unsubscribe();
    };
  });

  return (
    <Fragment>
      <LogoLink />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<LoginPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
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
