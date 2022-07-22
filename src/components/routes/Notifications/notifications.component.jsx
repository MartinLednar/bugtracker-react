import { X, Check } from "react-feather";
import "./notifications.style.scss";

const NotificationsPage = () => (
  <div className="main-content">
    <div className="notifications-wrapper">
      <div className="project-heading-box">
        <h1 className="main-heading">Notifications</h1>
      </div>

      <div className="responsive-table">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="notification-msg-box">
                  <div className="notification-sender-box">
                    <img src="/img/imgBig1.jpg" alt="Profile picture" className="profile-img" />
                    <h3 className="heading-terciary">Martin Lednár -</h3>
                  </div>

                  <p>Invited you to project: Tara react</p>
                </div>
              </td>

              <td>
                <div className="notification-action-box">
                  <p className="issue-action-btn issue-action-btn-green" title="Accept">
                    <Check />
                  </p>

                  <p className="issue-action-btn issue-action-btn-red" title="Reject">
                    <X />
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default NotificationsPage;
