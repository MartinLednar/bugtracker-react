import styled from "styled-components";
import { ArrowLinkRight } from "./arrow-link/arrow-link.style";
import { StyledCustomButton } from "./custom-button/custom-button.style";
import { StyledCustomInput } from "./custom-input/custom-input.style";

//HEADINGS
export const HeadingMain = styled.h1`
  font-size: 4.8rem;
  font-weight: 600;
  font-family: var(--font-heading);
`;

export const HeadingSecondary = styled.h2`
  font-weight: 500;
  font-size: 3.5rem;
  font-family: var(--font-heading);
`;

export const HeadingTerciary = styled.h3`
  font-weight: 400;
  font-size: 2.3rem;
  font-family: var(--font-heading);
`;
//HEADINGS

//MAIN WRAPPERS
export const MainBoxContainer = styled.div`
  position: relative;
  display: flex;
  height: calc(100vh - 90px);
  min-height: 500px;
`;

export const MainContentContainer = styled.div`
  min-height: 500px;
  position: relative;
  flex-grow: 1;
  padding: 0 5rem 5rem;
  overflow: hidden;
  overflow-y: visible;

  @media screen and (max-width: 860px) {
    padding: 0 2rem 5rem;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;

  #menu-btn {
    display: none;
  }

  @media screen and (max-width: 860px) {
    #menu-btn {
      display: flex;
    }
  }
  @media screen and (max-width: 1276px) {
    .project-action-box {
      margin-top: 1rem;
    }
  }
`;

//MAIN WRAPPERS

//TABLE
export const TableContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  flex-grow: 1;
  overflow-x: auto;
  overflow-y: visible;

  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  th,
  td {
    min-width: max-content;
  }

  th {
    padding: 1rem;
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 500;
    border-bottom: 1px solid rgb(100, 100, 100);
  }

  td {
    font-size: 2.1rem;
    padding: 1.8rem 1rem;
    border-bottom: 1px solid rgb(201, 201, 201);

    p {
      min-width: max-content;
    }
  }

  ${ArrowLinkRight} {
    margin: 0 auto;
  }
`;

//TABLE

//PROFILE IMG
export const ProfileImage = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  margin-right: 3rem;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

//PROFILE IMG

//FORM STYLES
export const InputGroup = styled.div`
  display: flex;
  align-items: center;

  ${StyledCustomInput} {
    margin-left: 1rem;
  }

  label {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const RadioGroup = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & ${InputGroup}:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const InputGroupColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  ${HeadingTerciary} {
    font-family: var(--font-text);
    margin-bottom: 0.3rem;
    font-size: 2.5rem;
  }

  ${RadioGroup} {
    margin-top: 0.5rem;
    justify-content: space-between;

    ${InputGroup} {
      margin-right: 0;
    }
  }

  ${StyledCustomButton} {
    margin-top: 1.5rem;
    margin-right: auto;
    font-size: 2rem;
  }
`;

export const FormMessage = styled(HeadingTerciary)`
  margin-top: 2rem;
  font-weight: 400;
  color: ${({ textColor }) => textColor};
  text-align: center;
`;

//FORM STYLES
