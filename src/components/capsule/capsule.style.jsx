import styled from "styled-components";

export const StyledCapsule = styled.p`
  margin: 0 auto;
  border-radius: 50px;
  width: max-content;
  padding: 0.3rem 2rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: white;

  & svg {
    margin-left: 0.5rem;
  }
`;

export const CapsuleGreen = styled(StyledCapsule)`
  background-color: var(--color-green);
`;

export const CapsuleRed = styled(StyledCapsule)`
  background-color: var(--color-red);
`;

export const CapsuleOrange = styled(StyledCapsule)`
  background-color: var(--color-orange);
`;

export const CapsuleBlue = styled(StyledCapsule)`
  background-color: var(--color-blue);
`;

export const CapsuleYellow = styled(StyledCapsule)`
  background-color: var(--color-yellow);
`;
