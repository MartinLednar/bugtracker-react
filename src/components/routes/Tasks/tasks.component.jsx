import { Link } from "react-router-dom";
import { ChevronRight, Tool } from "react-feather";

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
                <p className="capsule capsule-orange">
                  Fix
                  <Tool />
                </p>
              </td>

              <td>
                <p className="capsule capsule-red">High</p>
              </td>

              <td>
                <Link to="/project/1515151/issue/123456" className="table-link">
                  Go to issue
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

export default TasksPage;
