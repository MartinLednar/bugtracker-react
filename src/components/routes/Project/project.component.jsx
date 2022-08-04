import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChevronRight, Plus, Tool, CheckCircle, AlertTriangle, ChevronLeft, Trash2, Users, X, Star, Lock, Unlock } from "react-feather";
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
import Loader from "../../loading/loading.component";

import { selectProject, selectCurrentUser } from "../../../store/slices/user-slice/user.selector";
import { updateProjects } from "../../../utils/firebase/firebase.utils";

const sidebarsInitialState = {
  sidebar1: false,
  sidebar2: false,
  sidebar3: false,
};

const issueFormInitialState = {
  title: "",
  type: "",
  priority: "",
  description: "",
};

const ProjectPage = () => {
  const navigate = useNavigate();
  const { projectID } = useParams();
  const { id, displayName, projects } = useSelector(selectCurrentUser);
  const projectData = useSelector((state) => selectProject(state, projectID));
  const [sidebarOpen, setSidebarOpen] = useState(sidebarsInitialState);
  const [issueForm, setIssueForm] = useState(issueFormInitialState);
  const [issuesToSort, setIssuesToSort] = useState();
  const { type, priority, description } = issueForm;

  useEffect(() => {
    if (projectData?.issues) {
      setIssuesToSort([...projectData.issues]);
    }
  }, [projectData]);

  const sortIssues = (a, b) => (a.closed && !b.closed ? 1 : b.closed && !a.closed ? -1 : 0);

  const toggleSidebar = (e) => {
    const name = typeof e !== "string" ? e.currentTarget.getAttribute("name") : e;
    if (name) {
      return setSidebarOpen({
        ...sidebarOpen,
        [name]: !sidebarOpen[name],
      });
    }

    return setSidebarOpen(sidebarsInitialState);
  };

  const handleDelete = async () => {
    const newProjectsArr = projects.filter((project) => project.id !== projectID);
    navigate("/projects");
    await updateProjects(id, newProjectsArr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isCreated = projectData.issues.some((issue) => issue.title === "title");

    if (isCreated) {
      return setIssueForm(issueFormInitialState);
    } else {
      const newIssue = {
        id: Math.trunc(Math.random() * 1000000).toString(),
        created: new Date().toLocaleDateString(),
        author: displayName,
        title: issueForm.title.slice(0, 1).toUpperCase() + issueForm.title.slice(1).toLowerCase(),
        type: type,
        priority: priority,
        description: description,
        closed: false,
      };

      const newIssuesArr = [...projectData.issues, newIssue];
      const newProjectsArr = projects.filter((project) => project.id !== projectID);

      await updateProjects(id, [...newProjectsArr, { ...projectData, issues: newIssuesArr }]);

      setIssueForm(issueFormInitialState);
      toggleSidebar("sidebar1");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setIssueForm({ ...issueForm, [name]: value });
  };

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen.sidebar1 || sidebarOpen.sidebar2 || sidebarOpen.sidebar3} onClick={toggleSidebar} />

      <SidebarModal isOpen={sidebarOpen.sidebar1}>
        <X onClick={toggleSidebar} name="sidebar1" />

        <HeadingSecondary>New issue</HeadingSecondary>

        <form onSubmit={handleSubmit} className="modal-form">
          <InputGroupColumn>
            <HeadingTerciary>Type</HeadingTerciary>

            <RadioGroup>
              <InputGroup>
                <label htmlFor="project-type-1">
                  <Tool />
                  Fix
                </label>
                <CustomInput type="radio" required checked={type === "fix"} value="fix" name="type" id="project-type-1" onChange={handleChange} />
              </InputGroup>

              <InputGroup>
                <label htmlFor="project-type-2">
                  <CheckCircle />
                  To-do
                </label>
                <CustomInput type="radio" checked={type === "todo"} value="todo" name="type" id="project-type-2" onChange={handleChange} />
              </InputGroup>

              <InputGroup>
                <label htmlFor="project-type-3">
                  <AlertTriangle />
                  Bug
                </label>
                <CustomInput type="radio" checked={type === "bug"} value="bug" name="type" id="project-type-3" onChange={handleChange} />
              </InputGroup>
            </RadioGroup>
          </InputGroupColumn>

          <InputGroupColumn>
            <HeadingTerciary>Priority</HeadingTerciary>

            <RadioGroup>
              <InputGroup>
                <label htmlFor="issue-priority-1"> Low </label>
                <CustomInput type="radio" required checked={priority === "low"} value="low" name="priority" id="issue-priority-1" onChange={handleChange} />
              </InputGroup>

              <InputGroup>
                <label htmlFor="issue-priority-2"> Medium </label>
                <CustomInput type="radio" checked={priority === "medium"} value="medium" name="priority" id="issue-priority-2" onChange={handleChange} />
              </InputGroup>

              <InputGroup>
                <label htmlFor="issue-priority-3"> High </label>
                <CustomInput type="radio" checked={priority === "high"} value="high" name="priority" id="issue-priority-3" onChange={handleChange} />
              </InputGroup>
            </RadioGroup>
          </InputGroupColumn>

          <InputGroupColumn>
            <HeadingTerciary>Title</HeadingTerciary>
            <CustomInput type="text" name="title" required value={issueForm.title} onChange={handleChange} />
          </InputGroupColumn>

          <InputGroupColumn>
            <HeadingTerciary>Description</HeadingTerciary>
            <CustomInput as="textarea" type="textarea" required name="description" rows="3" value={description} onChange={handleChange} />
          </InputGroupColumn>

          <CustomButton type="submit">Create issue</CustomButton>
        </form>
      </SidebarModal>

      <SidebarModal isOpen={sidebarOpen.sidebar2}>
        <X onClick={toggleSidebar} name="sidebar2" />

        <HeadingSecondary>Members</HeadingSecondary>

        <InputGroupColumn>
          <div className="search-results-box">
            {projectData?.users &&
              projectData.users.map((user, index) => (
                <div key={index} className="search-result">
                  <div className="profile-info">
                    <ProfileImage className="profile-img" src="/img/imgBig1.jpg" alt="Profile" />
                    <h4 className="profile-name-search">{user.displayName}</h4>
                  </div>

                  <p title="Owner">
                    <Star />
                  </p>
                </div>
              ))}
          </div>
        </InputGroupColumn>
      </SidebarModal>

      <SidebarModal isOpen={sidebarOpen.sidebar3}>
        <X onClick={toggleSidebar} name="sidebar3" />

        <HeadingSecondary>Delete project</HeadingSecondary>

        <InputGroupColumn>
          <p className="modal-form-text">Be careful this step is irreversible!</p>

          <CustomButton onClick={handleDelete} buttonType={CUSTOM_BUTTON_TYPE_CLASSES.red}>
            Delete project
            <Trash2 />
          </CustomButton>
        </InputGroupColumn>
      </SidebarModal>

      <MainContentContainer>
        <ProjectContainer>
          <ArrowLink to="/projects" linkType={ARROW_LINK_TYPE_CLASSES.arrowLeft}>
            <ChevronLeft />
            Go back
          </ArrowLink>

          {!projectData ? (
            <Loader />
          ) : (
            <Fragment>
              <HeadingContainer>
                <HeadingMain>Project: {projectData.title}</HeadingMain>

                <div className="project-action-box">
                  <CustomButton onClick={toggleSidebar} name="sidebar1">
                    Add
                    <Plus />
                  </CustomButton>

                  <CustomButton onClick={toggleSidebar} name="sidebar2">
                    Members
                    <Users />
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
                      <th>#</th>
                      <th>Name</th>
                      <th>Type</th>

                      <th>Priority</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {issuesToSort &&
                      issuesToSort.sort(sortIssues).map((issue, index) => (
                        <tr key={issue.id}>
                          <td>{index + 1}.</td>
                          <td>{issue.title}</td>
                          <td>
                            <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES[issue.type]} />
                          </td>
                          <td>
                            <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES[issue.priority]} />
                          </td>
                          <td>
                            {issue.closed ? (
                              <span title="Closed">
                                <Lock style={{ color: "red" }} />
                              </span>
                            ) : (
                              <span title="Opened">
                                <Unlock style={{ color: "green" }} />
                              </span>
                            )}
                          </td>
                          <td>
                            <ArrowLink to={`/project/${projectID}/issue/${issue.id}`} linkType={ARROW_LINK_TYPE_CLASSES.arrowRight}>
                              See details
                              <ChevronRight />
                            </ArrowLink>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </TableContainer>
            </Fragment>
          )}
        </ProjectContainer>
      </MainContentContainer>
    </Fragment>
  );
};

export default ProjectPage;
