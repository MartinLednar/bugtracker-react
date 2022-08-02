import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronRight, Plus, Tool, CheckCircle, AlertTriangle, ChevronLeft, Trash2, UserPlus, X, Send, Star } from "react-feather";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../../arrow-link/arrow-link.component";
import CustomInput from "../../custom-input/custom-input.component";
import { Capsule, CAPSULE_STYLE_CLASSES } from "../../capsule/capsule.component";
import { CustomButton, CUSTOM_BUTTON_TYPE_CLASSES } from "../../custom-button/custom-button.component";
import {
  MainContentContainer,
  HeadingContainer,
  HeadingMain,
  HeadingTerciary,
  TableContainer,
  ProfileImage,
  HeadingSecondary,
  InputGroupColumn,
  RadioGroup,
  InputGroup,
} from "../../universal-styles";
import { ProjectContainer } from "./project.style";

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

        <HeadingSecondary>New issue</HeadingSecondary>

        <form action="#" className="modal-form">
          <InputGroupColumn>
            <HeadingTerciary>Type</HeadingTerciary>

            <RadioGroup>
              <InputGroup>
                <label htmlFor="project-type-1">
                  <Tool />
                  Fix
                </label>
                <CustomInput type="radio" name="type" id="project-type-1" />
              </InputGroup>

              <InputGroup>
                <label htmlFor="project-type-2">
                  <CheckCircle />
                  To-do
                </label>
                <CustomInput type="radio" name="type" id="project-type-2" />
              </InputGroup>

              <InputGroup>
                <label htmlFor="project-type-3">
                  <AlertTriangle />
                  Bug
                </label>
                <CustomInput type="radio" name="type" id="project-type-3" />
              </InputGroup>
            </RadioGroup>
          </InputGroupColumn>

          <InputGroupColumn>
            <HeadingTerciary>Priority</HeadingTerciary>

            <RadioGroup>
              <InputGroup>
                <label htmlFor="issue-priority-1"> Low </label>
                <CustomInput type="radio" name="priority" id="issue-priority-1" />
              </InputGroup>

              <InputGroup>
                <label htmlFor="issue-priority-2"> Medium </label>
                <CustomInput type="radio" name="priority" id="issue-priority-2" />
              </InputGroup>

              <InputGroup>
                <label htmlFor="issue-priority-3"> High </label>
                <CustomInput type="radio" name="priority" id="issue-priority-3" />
              </InputGroup>
            </RadioGroup>
          </InputGroupColumn>

          <InputGroupColumn>
            <HeadingTerciary>Title</HeadingTerciary>
            <CustomInput type="text" name="issueName" />
          </InputGroupColumn>

          <InputGroupColumn>
            <HeadingTerciary>Description</HeadingTerciary>
            <CustomInput as="textarea" type="textarea" name="issueDescription" rows="3" />
          </InputGroupColumn>

          <CustomButton type="submit">Create issue</CustomButton>
        </form>
      </SidebarModal>

      <SidebarModal isOpen={sidebarOpen.sidebar2}>
        <X onClick={toggleSidebar} name="sidebar2" />

        <HeadingSecondary>Members</HeadingSecondary>

        <InputGroupColumn>
          <CustomInput type="search" name="projectSearch" placeholder="Search people" />
          <div className="search-results-box">
            <div className="search-result">
              <div className="profile-info">
                <ProfileImage className="profile-img" src="/img/imgBig1.jpg" alt="Profile" />
                <h4 className="profile-name-search">Martin Lednár</h4>
              </div>

              <p title="Owner">
                <Star />
              </p>
            </div>
          </div>
        </InputGroupColumn>

        <HeadingSecondary>Invite</HeadingSecondary>

        <InputGroupColumn>
          <CustomInput type="search" name="projectSearch" placeholder="Search people" />
          <div className="search-results-box">
            <div className="search-result">
              <div className="profile-info">
                <ProfileImage className="profile-img" src="/img/imgBig1.jpg" alt="Profile" />
                <h4 className="profile-name-search">Martin Lednár</h4>
              </div>

              <p className="search-invite-btn" title="Send invite">
                <Send />
              </p>
            </div>
          </div>
        </InputGroupColumn>
      </SidebarModal>

      <SidebarModal isOpen={sidebarOpen.sidebar3}>
        <X onClick={toggleSidebar} name="sidebar3" />

        <HeadingSecondary>Delete project</HeadingSecondary>

        <form action="#" className="modal-form">
          <InputGroupColumn>
            <p className="modal-form-text">Be careful this step is irreversible!</p>

            <CustomButton buttonType={CUSTOM_BUTTON_TYPE_CLASSES.red}>
              Delete project
              <Trash2 />
            </CustomButton>
          </InputGroupColumn>
        </form>
      </SidebarModal>

      <MainContentContainer>
        <ProjectContainer>
          <ArrowLink to="/projects" linkType={ARROW_LINK_TYPE_CLASSES.arrowLeft}>
            <ChevronLeft />
            Go back
          </ArrowLink>

          <HeadingContainer>
            <HeadingMain>Project: Tara react</HeadingMain>

            <div className="project-action-box">
              <CustomButton onClick={toggleSidebar} name="sidebar1">
                Add
                <Plus />
              </CustomButton>

              <CustomButton onClick={toggleSidebar} name="sidebar2">
                Invite
                <UserPlus />
              </CustomButton>

              <CustomButton onClick={toggleSidebar} buttonType={CUSTOM_BUTTON_TYPE_CLASSES.red} name="sidebar3">
                Delete project
                <Trash2 />
              </CustomButton>
            </div>
          </HeadingContainer>

          <TableContainer>
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
          </TableContainer>
        </ProjectContainer>
      </MainContentContainer>
    </Fragment>
  );
};

export default ProjectPage;
