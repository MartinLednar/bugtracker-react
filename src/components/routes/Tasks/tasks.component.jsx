import { ChevronRight, Tool } from "react-feather";
import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../../arrow-link/arrow-link.component";
import { Capsule, CAPSULE_STYLE_CLASSES } from "../../capsule/capsule.component";

const TasksPage = () => (
  <div className="main-content">
    <div className="tasks-wrapper">
      <div className="project-heading-box">
        <h1 className="main-heading">My tasks</h1>
      </div>

      <div className="responsive-table">
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
      </div>
    </div>
  </div>
);

export default TasksPage;
