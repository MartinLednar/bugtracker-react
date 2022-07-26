import styled from "styled-components";
import { HeadingTerciary, TableContainer } from "../../universal-styles";
import { CircleButtonGreen } from "../../circle-button/circle-button.style";

export const NotificationsContainer = styled.div`
  overflow: hidden;

  & ${TableContainer} {
    margin-top: 4rem;
    max-height: 100%;
    overflow-y: visible;
  }

  .notification-msg-box {
    display: flex;
    align-items: center;
    min-width: max-content;
  }

  .notification-sender-box {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    font-family: var(--font-heading);
  }

  .notification-sender-box .profile-img {
    margin-right: 0.8rem;
    height: 5rem;
    width: 5rem;
  }

  .notification-sender-box ${HeadingTerciary} {
    font-size: 2rem;
  }

  .notification-sender-box p {
    font-size: 2rem;
  }

  .notification-action-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  ${CircleButtonGreen} {
    margin-right: 1rem;
  }
`;
