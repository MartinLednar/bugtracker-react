import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import { Plus, X } from "react-feather";
import ProjectPreview from "../../project-preview/project-preview.component";
import { CustomButton } from "../../custom-button/custom-button.component";
import CustomInput from "../../custom-input/custom-input.component";
import { MainContentContainer, HeadingContainer, HeadingMain, HeadingSecondary, HeadingTerciary, InputGroupColumn, FormMessage } from "../../universal-styles";
import { ProjectsContainer } from "./projects.style";
import Loader from "../../loading/loading.component";

import { selectCurrentUser } from "../../../store/slices/user-slice/user.selector";
import { updateProjects } from "../../../utils/firebase/firebase.utils";

const ProjectsPage = () => {
  const { id, projects = null, displayName } = useSelector(selectCurrentUser);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
      setSidebarOpen(false);
      setProjectName("");
    }
  };

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen} onClick={toggleSidebar} />
      <SidebarModal isOpen={sidebarOpen}>
        <X onClick={toggleSidebar} name="sidebar" />

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

      <MainContentContainer id="no-padding">
        <ProjectsContainer>
          <HeadingContainer>
            <HeadingMain>My Projects</HeadingMain>

            <div className="project-action-box">
              <CustomButton onClick={toggleSidebar}>
                New
                <Plus />
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
