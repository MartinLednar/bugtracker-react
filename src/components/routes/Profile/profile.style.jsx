import styled from "styled-components";
import { CustomButtonGreen } from "../../custom-button/custom-button.style";
import { StyledCustomInput } from "../../custom-input/custom-input.style";
import { HeadingSecondary, HeadingTerciary, ProfileImage } from "../../universal-styles";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${HeadingSecondary} {
    margin-top: 5rem;
  }

  .profile-img-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;

    ${ProfileImage} {
      height: 15rem;
      width: 15rem;
    }

    form {
      font-size: 1.5rem;

      ${HeadingTerciary} {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      ${StyledCustomInput} {
        margin-bottom: 1rem;
      }

      ${CustomButtonGreen}:last-of-type {
        margin-left: 1rem;
      }

      ${CustomButtonGreen}:first-of-type {
        margin-left: auto;
      }

      .button-group {
        display: flex;
      }
    }
  }

  .profile-delete-box {
    margin-top: 3rem;
    font-size: 2rem;

    p {
      margin-bottom: 1.5rem;
    }
  }
`;
