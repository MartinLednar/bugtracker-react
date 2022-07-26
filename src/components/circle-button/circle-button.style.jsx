import styled from "styled-components";

const CircleButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: 0.6rem;

  & svg {
    height: 2.3rem;
    width: 2.3rem;
  }
`;

export const CircleButtonGreen = styled(CircleButton)`
  border: 1px solid var(--color-green);
  color: var(--color-green);

  &:hover {
    background-color: var(--color-green);
    color: white;
  }
`;

export const CircleButtonRed = styled(CircleButton)`
  border: 1px solid var(--color-red);
  color: var(--color-red);

  &:hover {
    background-color: var(--color-red);
    color: white;
  }
`;
