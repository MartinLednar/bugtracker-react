import { Link } from "react-router-dom";
import { ChevronRight, Tool } from "react-feather";

const TasksPage = () => (
  <div className="main-content">
    <div class="tasks-wrapper">
      <div class="project-heading-box">
        <h1 class="main-heading">My tasks</h1>
      </div>

      <div class="responsive-table">
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
                <p class="capsule capsule-orange">
                  Fix
                  <Tool />
                </p>
              </td>

              <td>
                <p class="capsule capsule-red">High</p>
              </td>

              <td>
                <Link to="/project/1515151/issue/123456" class="table-link">
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
