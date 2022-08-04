import styled from "styled-components";
import { HeadingContainer } from "../../universal-styles";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & ${HeadingContainer} {
    padding: 0 5rem 1rem;
  }

  .projects-grid {
    padding: 6rem 5rem 1.5rem;
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
