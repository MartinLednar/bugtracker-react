import styled from "styled-components";
import { StyledCapsule } from "../../capsule/capsule.style";
import { CircleButton } from "../../circle-button/circle-button.style";
import { CustomButtonGreen } from "../../custom-button/custom-button.style";
import { HeadingContainer, HeadingTerciary, TableContainer } from "../../universal-styles";

export const IssueContainer = styled.div`
  height: 100%;

  .issue-title-subbox {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${HeadingTerciary} {
      font-family: var(--font-text);
      font-size: 3rem;
      font-weight: 400;
    }
  }

  .issue-number {
    font-family: var(--font-heading);
    margin-left: 2rem;
    font-size: 2.1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.44);
  }

  & ${HeadingContainer} {
    margin-top: 3rem;
    margin-bottom: 8rem;
    flex-wrap: wrap-reverse;
    overflow: hidden;
    overflow-x: visible;
  }

  .issue-detail {
    font-size: 2.1rem;
    font-weight: 400;
  }

  .issue-detail:first-child {
    margin-right: 0.5rem;
  }

  .issue-name-box {
    width: max-content;
  }

  .issue-type-box {
    margin: 2rem 0 0;
    display: flex;
    align-items: center;
  }

  .issue-type-group:not(:first-child) {
    margin: 0 4rem 0 2rem;
  }

  .issue-type-group {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 300;
  }

  .issue-type-group ${StyledCapsule} {
    margin: 0 0 0 1rem;
    font-weight: 400;
  }

  .issue-type-group h3 {
    font-size: 2.5rem;
    font-weight: 400;
    font-family: var(--font-text);
  }

  .issue-type-box ${CircleButton} {
    margin-left: auto;
    /* margin-right: 1rem; */
  }

  .issue-description {
    font-weight: 400;
    font-size: 2.3rem;
    margin: 1.5rem 0 8rem;
  }

  .issue-wrapper ${TableContainer} {
    margin-top: 5rem;
  }

  .issue-table {
    width: 98%;
    margin: 0 auto 8rem;
  }

  .issue-manage-group {
    margin-top: 3rem;
    padding-bottom: 4rem;
  }

  .issue-manage-group p:first-of-type {
    font-size: 2.1rem;
    margin-top: 0.5rem;
  }

  ${CustomButtonGreen} {
    color: white;
    background-color: var(--color-green);
    margin-top: 1.5rem;
    font-size: 1.8rem;

    svg {
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 1232px) {
    .issue-details {
      margin-bottom: 1rem;
    }
  }
`;
