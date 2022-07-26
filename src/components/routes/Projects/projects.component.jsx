import { Fragment, useState } from "react";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import { Plus, X } from "react-feather";
import ProjectPreview from "../../project-preview/project-preview.component";
import { CustomButton } from "../../custom-button/custom-button.component";
import CustomInput from "../../custom-input/custom-input.component";
import { MainContentContainer, HeadingContainer, HeadingMain, HeadingSecondary, HeadingTerciary, InputGroupColumn } from "../../universal-styles";
import { ProjectsContainer } from "./projects.style";

export const projectsDummyData = [
  {
    id: 121565,
    title: "Tara react",
    owner: "Martin Lednár",
    date: "12.5.2022",
    users: ["User1", "User2", "User3"],
  },
  {
    id: 123456,
    title: "Bug tracker",
    owner: "Martin Lednár",
    date: "3.4.2022",
    users: ["User1"],
  },
  {
    id: 654132,
    title: "To-do react app",
    owner: "Martin Lednár",
    date: "3.1.2022",
    users: ["User1", "User2"],
  },
];

const ProjectsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen} onClick={toggleSidebar} />
      <SidebarModal isOpen={sidebarOpen}>
        <X onClick={toggleSidebar} name="sidebar" />

        <HeadingSecondary>New project</HeadingSecondary>

        <form action="#" className="modal-form">
          <InputGroupColumn>
            <HeadingTerciary>Name</HeadingTerciary>
            <CustomInput type="text" name="projectName" />
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

          <div className="projects-grid">
            {projectsDummyData.map((projectData) => (
              <ProjectPreview key={projectData.id} project={projectData} />
            ))}
          </div>
        </ProjectsContainer>
      </MainContentContainer>
    </Fragment>
  );
};

export default ProjectsPage;
