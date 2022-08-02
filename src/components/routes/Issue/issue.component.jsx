import { useParams } from "react-router-dom";
import { ChevronLeft, UserPlus, Check, Tool, Trash2 } from "react-feather";
import { Capsule, CAPSULE_STYLE_CLASSES } from "../../capsule/capsule.component";
import { CircleButton, CIRCLE_BUTTON_TYPE_CLASSES } from "../../circle-button/circle-button.component";
import { MainContentContainer, HeadingTerciary, TableContainer, HeadingMain, HeadingSecondary, HeadingContainer } from "../../universal-styles";
import { ArrowLink, ARROW_LINK_TYPE_CLASSES } from "../../arrow-link/arrow-link.component";
import { CustomButton } from "../../custom-button/custom-button.component";
import { IssueContainer } from "./issue.style";

import { useSelector } from "react-redux";
import { selectIssue } from "../../../store/slices/user-slice/user.selector";

const IssuePage = () => {
  const { issueID, projectID } = useParams();
  const { issue, projectTitle } = useSelector((state) => selectIssue(state, { projectID, issueID }));

  return (
    <MainContentContainer>
      <IssueContainer>
        <ArrowLink to={`/project/${projectID}`} linkType={ARROW_LINK_TYPE_CLASSES.arrowLeft}>
          <ChevronLeft />
          Go back
        </ArrowLink>

        <HeadingContainer>
          <div className="issue-title-box">
            <div className="issue-title-subbox">
              <HeadingTerciary>Project: {projectTitle}</HeadingTerciary>
              <h3 className="issue-number">#{issueID}</h3>
            </div>
            <HeadingMain>{issue && issue.title}</HeadingMain>
            <div className="issue-type-box">
              <div className="issue-type-group">
                <h3>Type:</h3>

                <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES[issue ? issue.type : "fix"]} />
              </div>

              <div className="issue-type-group">
                <h3>Priority:</h3>

                <Capsule capsuleStyle={CAPSULE_STYLE_CLASSES[issue ? issue.priority : "low"]} />
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

              <CircleButton buttonStyle={CIRCLE_BUTTON_TYPE_CLASSES.red} title="Delete issue">
                <Trash2 />
              </CircleButton>
            </div>
          </div>

          <div className="issue-details">
            <h2 className="issue-detail">
              <span className="text-bold">Created by:</span> Martin Lednár
            </h2>
            <h2 className="issue-detail">
              <span className="text-bold">Date:</span> 12.6.2022
            </h2>
          </div>
        </HeadingContainer>

        <HeadingSecondary>Description</HeadingSecondary>
        <p className="issue-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, exercitationem! Quis neque vero mollitia reprehenderit obcaecati, magnam necessitatibus voluptate
          quasi fuga dicta dolores autem, perspiciatis tenetur laudantium. Consequatur quidem ex illo rerum minima natus, iure molestias rem sed beatae fugiat obcaecati aperiam
          nam, architecto eaque soluta fugit animi similique sunt!
        </p>

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
          <HeadingTerciary>Close Issue</HeadingTerciary>
          <p>In case the issue was resolved. Once the issue is closed it can't be re-opened!</p>

          <CustomButton>
            Close issue
            <Check />
          </CustomButton>
        </div>
      </IssueContainer>
    </MainContentContainer>
  );
};

export default IssuePage;
