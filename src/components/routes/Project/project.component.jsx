import { useParams, Link } from "react-router-dom";
import { ChevronRight, Plus, Tool, CheckCircle, AlertTriangle, ChevronLeft, Trash2, UserPlus } from "react-feather";
import "./project.style.scss";

const ProjectPage = () => {
  const { projectID } = useParams();

  // <div class="sidebar-shadow"></div>

  // <div class="sidebar sidebar-modal">
  //   <svg class="feather close-modal-btn">
  //     <use href="/feather-sprite.svg#x" />
  //   </svg>

  //   <h2 class="heading-secondary">New issue</h2>

  //   <form action="#" class="modal-form">
  //     <div class="input-group-column">
  //       <h3 class="heading-terciary">Type</h3>

  //       <div class="radio-group">
  //         <div class="input-group">
  //           <label for="project-type-1">
  //             <svg class="feather">
  //               <use href="/feather-sprite.svg#tool" />
  //             </svg>
  //             Fix
  //           </label>
  //           <input type="radio" name="type" id="project-type-1" />
  //         </div>

  //         <div class="input-group">
  //           <label for="project-type-2">
  //             <svg class="feather">
  //               <use href="/feather-sprite.svg#check-circle" />
  //             </svg>
  //             To-do
  //           </label>
  //           <input type="radio" name="type" id="project-type-2" />
  //         </div>

  //         <div class="input-group">
  //           <label for="project-type-3">
  //             <svg class="feather">
  //               <use href="/feather-sprite.svg#alert-triangle" />
  //             </svg>
  //             Bug
  //           </label>
  //           <input type="radio" name="type" id="project-type-3" />
  //         </div>
  //       </div>
  //     </div>

  //     <div class="input-group-column">
  //       <h3 class="heading-terciary">Priority</h3>

  //       <div class="radio-group">
  //         <div class="input-group">
  //           <label for="issue-priority-1"> Low </label>
  //           <input type="radio" name="priority" id="issue-priority-1" />
  //         </div>

  //         <div class="input-group">
  //           <label for="issue-priority-2"> Medium </label>
  //           <input type="radio" name="priority" id="issue-priority-2" />
  //         </div>

  //         <div class="input-group">
  //           <label for="issue-priority-3"> High </label>
  //           <input type="radio" name="priority" id="issue-priority-3" />
  //         </div>
  //       </div>
  //     </div>

  //     <div class="input-group-column">
  //       <h3 class="heading-terciary">Title</h3>
  //       <input type="text" name="issueName" />
  //     </div>

  //     <div class="input-group-column">
  //       <h3 class="heading-terciary">Description</h3>
  //       <textarea name="issueDescription" rows="3"></textarea>
  //     </div>

  //     <button class="submit-form-btn" type="submit">Create issue</button>
  //   </form>
  // </div>

  // <div class="sidebar sidebar-modal">
  //   <svg class="feather close-modal-btn">
  //     <use href="/feather-sprite.svg#x" />
  //   </svg>

  //   <div class="results-container">
  //     <h2 class="heading-secondary">Members</h2>

  //     <div class="input-group-column">
  //       <input type="search" name="projectSearch" placeholder="Search people" />
  //       <div class="search-results-box">
  //         <div class="search-result">
  //           <div class="profile-info">
  //             <img class="profile-img" src="/imgBig1.jpg" alt="Profile picture" />
  //             <h4 class="profile-name-search">Martin Lednár</h4>
  //           </div>

  //           <svg class="feather" title="Owner">
  //             <use href="/feather-sprite.svg#star" />
  //           </svg>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   <div class="results-container">
  //     <h2 class="heading-secondary">Invite</h2>

  //     <div class="input-group-column">
  //       <input type="search" name="projectSearch" placeholder="Search people" />
  //       <div class="search-results-box">
  //         <div class="search-result">
  //           <div class="profile-info">
  //             <img class="profile-img" src="/imgBig1.jpg" alt="Profile picture" />
  //             <h4 class="profile-name-search">Martin Lednár</h4>
  //           </div>

  //           <p class="search-invite-btn" title="Send invite">
  //             <svg class="feather">
  //               <use href="/feather-sprite.svg#send" />
  //             </svg>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  // <div class="sidebar sidebar-modal">
  //   <svg class="feather close-modal-btn">
  //     <use href="/feather-sprite.svg#x" />
  //   </svg>

  //   <h2 class="heading-secondary">Delete project</h2>

  //   <form action="#" class="modal-form">
  //     <div class="input-group-column">
  //       <p class="modal-form-text">Be careful this step is irreversible!</p>

  //       <p class="project-delete-btn">
  //         Delete project
  //         <svg class="feather">
  //           <use href="/feather-sprite.svg#trash-2" />
  //         </svg>
  //       </p>
  //     </div>
  //   </form>
  // </div>

  return (
    <div className="main-content">
      <div className="project-wrapper">
        <Link to="/" className="back-link">
          <ChevronLeft />
          Go back
        </Link>
        <div className="project-heading-box">
          <h1 className="main-heading">Project: Tara react</h1>

          <div className="project-action-box">
            <p className="project-add-btn">
              Add
              <Plus />
            </p>
            <p className="project-add-btn">
              Invite
              <UserPlus />
            </p>
            <p className="project-add-btn project-delete-btn">
              Delete project
              <Trash2 />
            </p>
          </div>
        </div>

        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Type</th>

                <th>Priority</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1.</td>
                <td>Fix heading in Actions section</td>
                <td>
                  <p className="capsule capsule-orange">
                    Fix
                    <Tool />
                  </p>
                </td>
                <td>
                  <p className="capsule capsule-red">High</p>
                </td>
                <td>
                  <p style={{ color: "green" }}>Assigned</p>
                </td>
                <td>
                  <Link to={`/project/${projectID}/issue/165151`} className="table-link">
                    See details
                    <ChevronRight />
                  </Link>
                </td>
              </tr>

              <tr>
                <td>2.</td>
                <td>Add background color</td>
                <td>
                  <p className="capsule capsule-blue">
                    To-do
                    <CheckCircle />
                  </p>
                </td>
                <td>
                  <p className="capsule capsule-green">Low</p>
                </td>
                <td>
                  <p style={{ color: "red" }}>Unassigned</p>
                </td>
                <td>
                  <Link to={`/project/${projectID}/issue/123456`} className="table-link">
                    See details
                    <ChevronRight />
                  </Link>
                </td>
              </tr>

              <tr>
                <td>3.</td>
                <td>Fix heading in Actions section</td>
                <td>
                  <p className="capsule capsule-red">
                    Bug
                    <AlertTriangle />
                  </p>
                </td>
                <td>
                  <p className="capsule capsule-orange">Medium</p>
                </td>
                <td>
                  <p style={{ color: "green" }}>Closed</p>
                </td>
                <td>
                  <Link to={`/project/${projectID}/issue/515151`} className="table-link">
                    See details
                    <ChevronRight />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
