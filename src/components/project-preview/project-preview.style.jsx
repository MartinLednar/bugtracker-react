import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowLinkRight } from "../arrow-link/arrow-link.style";

export const ProjectPreviewContainer = styled(Link)`
  border: 1px solid rgb(200, 200, 200);
  border-radius: 3px;
  padding: 2rem;
  transition: all 0.5s;
  text-decoration: none;
  color: black;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.093);
  }

  .project-title {
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
    font-family: var(--font-heading);
  }

  .project-subtitle {
    font-size: 2.1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  .project-subtitle svg {
    margin-right: 0.5rem;
  }

  ${ArrowLinkRight} {
    margin-left: auto;
    margin-top: 3rem;
  }
`;
