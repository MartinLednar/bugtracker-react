import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import { ChevronRight, Plus, Users, X } from "react-feather";
import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../../arrow-link/arrow-link.component";
import "./projects.style.scss";

const ProjectsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen} onClick={toggleSidebar} />
      <SidebarModal isOpen={sidebarOpen}>
        <X onClick={toggleSidebar} name="sidebar" />

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

              <ArrowLink as="p" linkType={ARROW_LINK_TYPE_CLASSES.arrowRight}>
                Go to project
                <ChevronRight />
              </ArrowLink>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectsPage;
