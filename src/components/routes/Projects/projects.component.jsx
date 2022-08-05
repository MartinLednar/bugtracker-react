import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import SidebarMain from "../../sidebar/sidebar.component";
import { Plus, X, Menu } from "react-feather";
import ProjectPreview from "../../project-preview/project-preview.component";
import { CustomButton } from "../../custom-button/custom-button.component";
import CustomInput from "../../custom-input/custom-input.component";
import { MainContentContainer, HeadingContainer, HeadingMain, HeadingSecondary, HeadingTerciary, InputGroupColumn, FormMessage } from "../../universal-styles";
import { ProjectsContainer } from "./projects.style";
import Loader from "../../loading/loading.component";

import { selectCurrentUser } from "../../../store/slices/user-slice/user.selector";
import { updateProjects } from "../../../utils/firebase/firebase.utils";

const sidebarsInitialState = {
  sidebar1: false,
  sidebarMain: false,
};

const ProjectsPage = () => {
  const { id, projects = null, displayName } = useSelector(selectCurrentUser);
  const [sidebarOpen, setSidebarOpen] = useState(sidebarsInitialState);
  const [projectName, setProjectName] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const toggleSidebar = (e) => {
    const name = e.currentTarget.getAttribute("name");
    if (name) {
      return setSidebarOpen({
        ...sidebarOpen,
        [name]: !sidebarOpen[name],
      });
    }

    return setSidebarOpen(sidebarsInitialState);
  };

  const handleChange = (e) => setProjectName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCreated = projects.some((project) => project.title.toLowerCase() === projectName.toLowerCase());

    if (isCreated) {
      setFormMessage({ textColor: "red", text: "Project with this name already exists!" });
      setProjectName("");
    } else {
      const newProjectData = {
        id: new Date().getTime().toString(),
        title: projectName.slice(0, 1).toUpperCase() + projectName.slice(1).toLowerCase(),
        owner: displayName,
        created: new Date().toLocaleDateString(),
        issues: [],
        users: [
          {
            id: 1,
            role: "owner",
            displayName,
          },
        ],
      };
      setFormMessage({ textColor: "green", text: "Project created!" });
      updateProjects(id, [...projects, newProjectData]);
      setSidebarOpen(sidebarsInitialState);
      setProjectName("");
    }
  };

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen.sidebar1 || sidebarOpen.sidebarMain} onClick={toggleSidebar} />
      <SidebarModal isOpen={sidebarOpen.sidebar1}>
        <X onClick={toggleSidebar} name="sidebar1" />

        <HeadingSecondary>New project</HeadingSecondary>

        <form onSubmit={handleSubmit} className="modal-form">
          {formMessage && <FormMessage textColor={formMessage.textColor}>{formMessage.text}</FormMessage>}
          <InputGroupColumn>
            <HeadingTerciary>Name</HeadingTerciary>
            <CustomInput type="text" name="projectName" onChange={handleChange} value={projectName} />
          </InputGroupColumn>
          <CustomButton type="submit">Create project</CustomButton>
        </form>
      </SidebarModal>

      <SidebarMain navModal toggleMethod={toggleSidebar} isOpen={sidebarOpen.sidebarMain} />

      <MainContentContainer>
        <ProjectsContainer>
          <HeadingContainer>
            <HeadingMain>My Projects</HeadingMain>

            <div className="project-action-box">
              <CustomButton onClick={toggleSidebar} name="sidebar1">
                New
                <Plus />
              </CustomButton>

              <CustomButton id="menu-btn" onClick={toggleSidebar} name="sidebarMain">
                Menu
                <Menu />
              </CustomButton>
            </div>
          </HeadingContainer>

          {!projects ? (
            <Loader />
          ) : (
            <div className="projects-grid">
              {projects.map((projectData) => (
                <ProjectPreview key={projectData.id} project={projectData} />
              ))}
            </div>
          )}
        </ProjectsContainer>
      </MainContentContainer>
    </Fragment>
  );
};

export default ProjectsPage;
