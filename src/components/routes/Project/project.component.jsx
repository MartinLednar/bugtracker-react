import { Fragment, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Plus, Tool, CheckCircle, AlertTriangle, ChevronLeft, Trash2, UserPlus, X, Send, Star } from "react-feather";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../../arrow-link/arrow-link.component";
import { Capsule, CAPSULE_STYLE_CLASSES } from "../../capsule/capsule.component";

import "./project.style.scss";

const sidebarsInitialState = {
  sidebar1: false,
  sidebar2: false,
  sidebar3: false,
};

const ProjectPage = () => {
  const { projectID } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(sidebarsInitialState);

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

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen.sidebar1 || sidebarOpen.sidebar2 || sidebarOpen.sidebar3} onClick={toggleSidebar} />

      <SidebarModal isOpen={sidebarOpen.sidebar1}>
        <X onClick={toggleSidebar} name="sidebar1" />

        <h2 className="heading-secondary">New issue</h2>

        <form action="#" className="modal-form">
          <div className="input-group-column">
            <h3 className="heading-terciary">Type</h3>

            <div className="radio-group">
              <div className="input-group">
                <label htmlFor="project-type-1">
                  <Tool />
                  Fix
                </label>
                <input type="radio" name="type" id="project-type-1" />
              </div>

              <div className="input-group">
                <label htmlFor="project-type-2">
                  <CheckCircle />
                  To-do
                </label>
                <input type="radio" name="type" id="project-type-2" />
              </div>

              <div className="input-group">
                <label htmlFor="project-type-3">
                  <AlertTriangle />
                  Bug
                </label>
                <input type="radio" name="type" id="project-type-3" />
              </div>
            </div>
          </div>

          <div className="input-group-column">
            <h3 className="heading-terciary">Priority</h3>

            <div className="radio-group">
              <div className="input-group">
                <label htmlFor="issue-priority-1"> Low </label>
                <input type="radio" name="priority" id="issue-priority-1" />
              </div>

              <div className="input-group">
                <label htmlFor="issue-priority-2"> Medium </label>
                <input type="radio" name="priority" id="issue-priority-2" />
              </div>

              <div className="input-group">
                <label htmlFor="issue-priority-3"> High </label>
                <input type="radio" name="priority" id="issue-priority-3" />
              </div>
            </div>
          </div>

          <div className="input-group-column">
            <h3 className="heading-terciary">Title</h3>
            <input type="text" name="issueName" />
          </div>

          <div className="input-group-column">
            <h3 className="heading-terciary">Description</h3>
            <textarea name="issueDescription" rows="3"></textarea>
          </div>

          <button className="submit-form-btn" type="submit">
            Create issue
          </button>
        </form>
      </SidebarModal>

      <SidebarModal isOpen={sidebarOpen.sidebar2}>
        <X onClick={toggleSidebar} name="sidebar2" />

        <div className="results-container">
          <h2 className="heading-secondary">Members</h2>

          <div className="input-group-column">
            <input type="search" name="projectSearch" placeholder="Search people" />
            <div className="search-results-box">
              <div className="search-result">
                <div className="profile-info">
                  <img className="profile-img" src="/img/imgBig1.jpg" alt="Profile" />
                  <h4 className="profile-name-search">Martin Lednár</h4>
                </div>

                <Star title="Owner" />
              </div>
            </div>
          </div>
        </div>

        <div className="results-container">
          <h2 className="heading-secondary">Invite</h2>

          <div className="input-group-column">
            <input type="search" name="projectSearch" placeholder="Search people" />
            <div className="search-results-box">
              <div className="search-result">
                <div className="profile-info">
                  <img className="profile-img" src="/img/imgBig1.jpg" alt="Profile" />
                  <h4 className="profile-name-search">Martin Lednár</h4>
                </div>

                <p className="search-invite-btn" title="Send invite">
                  <Send />
                </p>
              </div>
            </div>
          </div>
        </div>
      </SidebarModal>

      <SidebarModal isOpen={sidebarOpen.sidebar3}>
        <X onClick={toggleSidebar} name="sidebar3" />

        <h2 className="heading-secondary">Delete project</h2>

        <form action="#" className="modal-form">
          <div className="input-group-column">
            <p className="modal-form-text">Be careful this step is irreversible!</p>

            <p className="project-delete-btn">
              Delete project
              <Trash2 />
            </p>
          </div>
        </form>
      </SidebarModal>

      <div className="main-content">
        <div className="project-wrapper">
          <ArrowLink to="/" linkType={ARROW_LINK_TYPE_CLASSES.arrowLeft}>
            <ChevronLeft />
            Go back
          </ArrowLink>

          <div className="project-heading-box">
            <h1 className="main-heading">Project: Tara react</h1>

            <div className="project-action-box">
              <p className="project-add-btn" onClick={toggleSidebar} name="sidebar1">
                Add
                <Plus />
              </p>

              <p className="project-add-btn" onClick={toggleSidebar} name="sidebar2">
                Invite
                <UserPlus />
              </p>
              <p className="project-add-btn project-delete-btn" onClick={toggleSidebar} name="sidebar3">
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
                    <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES.orange}>
                      Fix
                      <Tool />
                    </Capsule>
                  </td>
                  <td>
                    <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES.red}>High</Capsule>
                  </td>
                  <td>
                    <p style={{ color: "green" }}>Assigned</p>
                  </td>
                  <td>
                    <ArrowLink to={`/project/${projectID}/issue/165151`} linkType={ARROW_LINK_TYPE_CLASSES.arrowRight}>
                      See details
                      <ChevronRight />
                    </ArrowLink>
                  </td>
                </tr>

                <tr>
                  <td>2.</td>
                  <td>Add background color</td>
                  <td>
                    <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES.blue}>
                      To-do
                      <CheckCircle />
                    </Capsule>
                  </td>
                  <td>
                    <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES.green}>Low</Capsule>
                  </td>
                  <td>
                    <p style={{ color: "red" }}>Unassigned</p>
                  </td>
                  <td>
                    <ArrowLink to={`/project/${projectID}/issue/123456`} linkType={ARROW_LINK_TYPE_CLASSES.arrowRight}>
                      See details
                      <ChevronRight />
                    </ArrowLink>
                  </td>
                </tr>

                <tr>
                  <td>3.</td>
                  <td>Fix heading in Actions section</td>
                  <td>
                    <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES.red}>
                      Bug
                      <AlertTriangle />
                    </Capsule>
                  </td>
                  <td>
                    <p className="capsule capsule-orange"></p>

                    <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES.orange}>Medium</Capsule>
                  </td>
                  <td>
                    <p style={{ color: "green" }}>Closed</p>
                  </td>
                  <td>
                    <ArrowLink to={`/project/${projectID}/issue/515151`} linkType={ARROW_LINK_TYPE_CLASSES.arrowRight}>
                      See details
                      <ChevronRight />
                    </ArrowLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectPage;
