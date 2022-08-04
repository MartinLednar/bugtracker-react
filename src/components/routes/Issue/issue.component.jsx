import { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Trash2, Unlock, Lock } from "react-feather";
import { Capsule, CAPSULE_STYLE_CLASSES } from "../../capsule/capsule.component";
import { CircleButton, CIRCLE_BUTTON_TYPE_CLASSES } from "../../circle-button/circle-button.component";
import { MainContentContainer, HeadingTerciary, HeadingMain, HeadingSecondary, HeadingContainer } from "../../universal-styles";
import { ArrowLink, ARROW_LINK_TYPE_CLASSES } from "../../arrow-link/arrow-link.component";
import { CustomButton } from "../../custom-button/custom-button.component";
import { IssueContainer } from "./issue.style";

import { useSelector } from "react-redux";
import { selectCurrentUser, selectIssue, selectProject } from "../../../store/slices/user-slice/user.selector";
import { updateProjects } from "../../../utils/firebase/firebase.utils";
import Loader from "../../loading/loading.component";

const IssuePage = () => {
  const navigate = useNavigate();
  const { issueID, projectID } = useParams();
  const { id, projects } = useSelector(selectCurrentUser);
  const projectData = useSelector((state) => selectProject(state, projectID));
  const { issue, projectTitle, issues } = useSelector((state) => selectIssue(state, { projectID, issueID }));

  const handleDelete = async () => {
    const newIssuesArr = issues.filter((issue) => issue.id !== issueID);
    const newProjectsArr = projects.filter((project) => project.id !== projectID);

    navigate(`/project/${projectID}`);
    await updateProjects(id, [...newProjectsArr, { ...projectData, issues: newIssuesArr }]);
  };

  const toggleStatus = async () => {
    const newIssuesArr = issues.filter((issue) => issue.id !== issueID);
    const newProjectsArr = projects.filter((project) => project.id !== projectID);

    await updateProjects(id, [...newProjectsArr, { ...projectData, issues: [...newIssuesArr, { ...issue, closed: !issue.closed }] }]);
  };

  return (
    <MainContentContainer>
      <IssueContainer>
        <ArrowLink to={`/project/${projectID}`} linkType={ARROW_LINK_TYPE_CLASSES.arrowLeft}>
          <ChevronLeft />
          Go back
        </ArrowLink>

        {!issue ? (
          <Loader />
        ) : (
          <Fragment>
            <HeadingContainer>
              <div className="issue-title-box">
                <div className="issue-title-subbox">
                  <HeadingTerciary>Project: {projectTitle}</HeadingTerciary>
                  <h3 className="issue-number">#{issueID}</h3>
                </div>
                <HeadingMain>{issue.title}</HeadingMain>
                <div className="issue-type-box">
                  <div className="issue-type-group">
                    <h3>Type:</h3>

                    <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES[issue.type]} />
                  </div>

                  <div className="issue-type-group">
                    <h3>Priority:</h3>

                    <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES[issue.priority]} />
                  </div>

                  {
                    //   <CircleButton buttonStyle={CIRCLE_BUTTON_TYPE_CLASSES.green} title="Join">
                    //   <UserPlus />
                    // </CircleButton>
                  }

                  {
                    //<CircleButton buttonStyle={CIRCLE_BUTTON_TYPE_CLASSES.red} title="Join">
                    //<UserMinus />
                    //</CircleButton>
                  }

                  <CircleButton buttonStyle={CIRCLE_BUTTON_TYPE_CLASSES.red} title="Delete issue" onClick={handleDelete}>
                    <Trash2 />
                  </CircleButton>
                </div>
              </div>

              <div className="issue-details">
                <h2 className="issue-detail">
                  <span className="text-bold">Created by:</span> {issue.author}
                </h2>
                <h2 className="issue-detail">
                  <span className="text-bold">Date:</span> {issue.created}
                </h2>
              </div>
            </HeadingContainer>

            <HeadingSecondary>Description</HeadingSecondary>
            <p className="issue-description">{issue.description}</p>

            {
              //   <HeadingSecondary>Workers</HeadingSecondary>
              // <TableContainer>
              //   <table className="issue-table">
              //     <thead>
              //       <tr>
              //         <th>Name</th>
              //         <th>Mail</th>
              //         <th>Joined</th>
              //       </tr>
              //     </thead>
              //     <tbody>
              //       <tr>
              //         <td>Jessi Lednárová</td>
              //         <td>jessi.lednarova@gmail.com</td>
              //         <td>14.6.2022</td>
              //       </tr>
              //       <tr>
              //         <td>Lucka Lednárová</td>
              //         <td>lucka.lednarova@gmail.com</td>
              //         <td>18.6.2022</td>
              //       </tr>
              //     </tbody>
              //   </table>
              // </TableContainer>
              // <HeadingSecondary>Manage Issue</HeadingSecondary>
            }

            <div className="issue-manage-group">
              {issue.closed ? (
                <Fragment>
                  <HeadingTerciary>Re-open Issue</HeadingTerciary>
                  <p>In case the issue wasn't fixed.</p>

                  <CustomButton onClick={toggleStatus}>
                    Re-open issue
                    <Unlock />
                  </CustomButton>
                </Fragment>
              ) : (
                <Fragment>
                  <HeadingTerciary>Close Issue</HeadingTerciary>
                  <p>In case the issue was resolved.</p>

                  <CustomButton onClick={toggleStatus}>
                    Close issue
                    <Lock />
                  </CustomButton>
                </Fragment>
              )}
            </div>
          </Fragment>
        )}
      </IssueContainer>
    </MainContentContainer>
  );
};

export default IssuePage;
