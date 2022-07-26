import styled from "styled-components";

export const StyledCustomInput = styled.input`
  font-size: inherit;
  font-family: var(--font-text);
  font-weight: 400;
  padding: 0.5rem 0.8rem;
  outline: none;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 3px;

  &[type="textarea"] {
    resize: vertical;
  }

  &:focus {
    border-color: rgb(130, 130, 130);
  }
`;
