import styled from "styled-components";
import { HeadingContainer } from "../../universal-styles";
import { CustomButtonGreen } from "../../custom-button/custom-button.style";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .project-action-box {
    display: flex;
    align-items: center;
    font-size: 2.1rem;
  }

  ${CustomButtonGreen}:first-of-type {
    margin-right: 0.8rem;
  }

  & ${HeadingContainer} {
    padding: 0 0 1rem;
    margin-top: 0;
  }

  .projects-grid {
    padding: 6rem 0 1.5rem;
    max-height: max-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
    column-gap: 2.5rem;
    row-gap: 4rem;
    max-height: 100%;
    overflow: hidden;
    overflow-y: visible;
  }
`;
