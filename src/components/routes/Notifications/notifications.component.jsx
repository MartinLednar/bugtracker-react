import { X, Check } from "react-feather";
import { CircleButton, CIRCLE_BUTTON_TYPE_CLASSES } from "../../circle-button/circle-button.component";
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
                    <img src="/img/imgBig1.jpg" alt="Profile" className="profile-img" />
                    <h3 className="heading-terciary">Martin Lednár -</h3>
                  </div>

                  <p>Invited you to project: Tara react</p>
                </div>
              </td>

              <td>
                <div className="notification-action-box">
                  <CircleButton buttonStyle={CIRCLE_BUTTON_TYPE_CLASSES.green} title="Accept">
                    <Check />
                  </CircleButton>

                  <CircleButton buttonStyle={CIRCLE_BUTTON_TYPE_CLASSES.red} title="Reject">
                    <X />
                  </CircleButton>
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
