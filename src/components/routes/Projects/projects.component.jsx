import { Link } from "react-router-dom";
import { ChevronRight, Plus, Users } from "react-feather";
import "./projects.style.scss";

const ProjectsPage = () => (
  // <div class="sidebar-shadow"></div>

  //     <div class="sidebar sidebar-modal">
  //       <svg class="feather close-modal-btn">
  //         <use href="/feather-sprite.svg#x" />
  //       </svg>

  //       <h2 class="heading-secondary">New project</h2>

  //       <form action="#" class="modal-form">
  //         <div class="input-group-column">
  //           <h3 class="heading-terciary">Name</h3>
  //           <input type="text" name="projectName" />
  //         </div>

  //         <button class="submit-form-btn" type="submit">Create project</button>
  //       </form>
  //     </div>
  <div className="main-content" id="no-padding">
    <div className="projects-wrapper">
      <div className="project-heading-box">
        <h1 className="main-heading">My Projects</h1>

        <div className="project-action-box">
          <p className="project-add-btn">
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
);

export default ProjectsPage;
