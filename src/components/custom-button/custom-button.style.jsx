import styled from "styled-components";

export const StyledCustomButton = styled.button`
  background-color: transparent;
  font-family: var(--font-text);
  padding: 0.3rem 1rem;
  outline: none;
  border-radius: 3px;
  transition: all 0.5s;
  font-size: 2.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: max-content;
`;

export const CustomButtonGreen = styled(StyledCustomButton)`
  border: 2px solid var(--color-green);
  color: black;

  & svg {
    margin-left: 0.5rem;
  }

  &:hover {
    color: white;
    background-color: var(--color-green);
  }
`;

export const CustomButtonRed = styled(StyledCustomButton)`
  border: 2px solid var(--color-red);
  background-color: var(--color-red);

  color: white;

  & svg {
    margin-left: 0.5rem;
  }
`;
