import { ChevronRight, Tool } from "react-feather";
import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../../arrow-link/arrow-link.component";
import { Capsule, CAPSULE_STYLE_CLASSES } from "../../capsule/capsule.component";
import { MainContentContainer, TableContainer, HeadingMain } from "../../universal-styles";

const TasksPage = () => (
  <MainContentContainer>
    <div className="tasks-wrapper">
      <div className="project-heading-box">
        <HeadingMain>My tasks</HeadingMain>
      </div>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Issue name</th>
              <th>Type</th>
              <th>Priority</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tara react</td>
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
                <ArrowLink to="/project/1515151/issue/123456" linkType={ARROW_LINK_TYPE_CLASSES.arrowRight}>
                  Go to issue
                  <ChevronRight />
                </ArrowLink>
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </div>
  </MainContentContainer>
);

export default TasksPage;
