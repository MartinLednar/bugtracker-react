import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus, Users } from "react-feather";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import { X } from "react-feather";
import "./projects.style.scss";
import { Fragment } from "react";

const ProjectsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen} />
      <SidebarModal isOpen={sidebarOpen}>
        <X onClick={toggleSidebar} />

        <h2 className="heading-secondary">New project</h2>

        <form action="#" className="modal-form">
          <div className="input-group-column">
            <h3 className="heading-terciary">Name</h3>
            <input type="text" name="projectName" />
          </div>

          <button className="submit-form-btn" type="submit">
            Create project
          </button>
        </form>
      </SidebarModal>

      <div className="main-content" id="no-padding">
        <div className="projects-wrapper">
          <div className="project-heading-box">
            <h1 className="main-heading">My Projects</h1>

            <div className="project-action-box">
              <p className="project-add-btn" onClick={toggleSidebar}>
                New
                <Plus />
              </p>
            </div>
          </div>

          <div className="projects-grid">
            <Link to="/project/156155" className="project-box">
              <h2 className="project-title">Tara react</h2>

              <h2 className="project-subtitle">Owner: Martin Lednár</h2>
              <h2 className="project-subtitle">Created: 12.6.2022</h2>
              <h2 className="project-subtitle">
                <Users />: 14
              </h2>

              <p className="project-link">
                Go to project
                <ChevronRight />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectsPage;
