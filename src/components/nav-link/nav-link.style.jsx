import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${({ linkdanger }) => (linkdanger ? "var(--color-red)" : "black")};
  display: flex;
  align-items: center;

  & svg {
    margin-right: 1rem;
  }
`;
