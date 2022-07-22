import { useParams, Link } from "react-router-dom";
import { ChevronLeft, UserPlus, Check, Tool, Trash2 } from "react-feather";
import "./issue.style.scss";

const IssuePage = () => {
  const { issueID, projectID } = useParams();

  return (
    <div className="main-content">
      <div className="issue-wrapper">
        <Link to={`/project/${projectID}`} className="back-link">
          <ChevronLeft />
          Go back
        </Link>

        <div className="project-heading-box">
          <div className="issue-title-box">
            <div className="issue-title-subbox">
              <h1 className="heading-terciary">Project: Tara react</h1>
              <h3 className="issue-number">#{issueID}</h3>
            </div>
            <h1 className="main-heading">Fix heading in Actions section</h1>
            <div className="issue-type-box">
              <div className="issue-type-group">
                <h3>Type:</h3>
                <p className="capsule capsule-orange">
                  Fix
                  <Tool />
                </p>
              </div>

              <div className="issue-type-group">
                <h3>Priority:</h3>
                <p className="capsule capsule-red">High</p>
              </div>

              <p className="issue-action-btn issue-action-btn-green" title="Join">
                <UserPlus />
              </p>

              {/* <p className="issue-action-btn issue-action-btn-red" title="Leave">
                <UserMinus />
              </p> */}

              <p className="issue-action-btn issue-action-btn-red" title="Delete issue">
                <Trash2 />
              </p>
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
        </div>

        <h2 className="heading-secondary">Description</h2>
        <p className="issue-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, exercitationem! Quis neque vero mollitia reprehenderit obcaecati, magnam
          necessitatibus voluptate quasi fuga dicta dolores autem, perspiciatis tenetur laudantium. Consequatur quidem ex illo rerum minima natus,
          iure molestias rem sed beatae fugiat obcaecati aperiam nam, architecto eaque soluta fugit animi similique sunt!
        </p>

        <h2 className="heading-secondary">Workers</h2>

        <div className="responsive-table">
          <table className="issue-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mail</th>
                <th>Joined</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Jessi Lednárová</td>
                <td>jessi.lednarova@gmail.com</td>
                <td>14.6.2022</td>
              </tr>

              <tr>
                <td>Lucka Lednárová</td>
                <td>lucka.lednarova@gmail.com</td>
                <td>18.6.2022</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="heading-secondary">Manage Issue</h2>

        <div className="issue-manage-group">
          <h3 className="heading-terciary">Close Issue</h3>
          <p>In case the issue was resolved. Once the issue is closed it can't be re-opened!</p>

          <p className="close-issue-btn">
            Close issue
            <Check />
          </p>
        </div>
      </div>
    </div>
  );
};

export default IssuePage;
