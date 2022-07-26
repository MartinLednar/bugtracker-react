import { X, Check } from "react-feather";
import { CircleButton, CIRCLE_BUTTON_TYPE_CLASSES } from "../../circle-button/circle-button.component";
import { MainContentContainer, HeadingContainer, HeadingMain, HeadingTerciary, TableContainer, ProfileImage } from "../../universal-styles";
import { NotificationsContainer } from "./notifications.style";

const NotificationsPage = () => (
  <MainContentContainer>
    <NotificationsContainer>
      <HeadingContainer>
        <HeadingMain>Notifications</HeadingMain>
      </HeadingContainer>

      <TableContainer>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="notification-msg-box">
                  <div className="notification-sender-box">
                    <ProfileImage src="/img/imgBig1.jpg" alt="Profile" className="profile-img" />
                    <HeadingTerciary>Martin Lednár -</HeadingTerciary>
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
      </TableContainer>
    </NotificationsContainer>
  </MainContentContainer>
);

export default NotificationsPage;
