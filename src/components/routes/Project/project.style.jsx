import styled from "styled-components";
import { CustomButtonGreen } from "../../custom-button/custom-button.style";

export const ProjectContainer = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .project-action-box {
    display: flex;
    align-items: center;
    font-size: 2.1rem;
  }

  ${CustomButtonGreen} {
    margin-right: 0.8rem;
  }
`;
