// //Urobit 1 hlavny styled komponent a z neho 3 (bez sipky, sipka vlavo, sipka vpravo)
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledArrowLink = styled(Link)`
  width: max-content;
  font-size: 2.1rem;
  color: var(--color-blue);
  text-decoration: none;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  & svg {
    width: 2rem;
    height: 2rem;
  }
  & * {
    transition: all 0.5s;
  }
`;

export const ArrowLinkStatic = styled(StyledArrowLink)`
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid var(--color-blue);
  }
`;

export const ArrowLinkRight = styled(StyledArrowLink)`
  &:hover svg {
    transform: translateX(3px);
  }
`;

export const ArrowLinkLeft = styled(StyledArrowLink)`
  &:hover svg {
    transform: translateX(-3px);
  }
`;

// .back-link {
//   text-decoration: none;
//   color: var(--color-blue);
//   display: flex;
//   align-items: center;
//   font-size: 2.1rem;
//   margin-bottom: 1rem;
// }

// .back-link svg {
//   width: 2rem;
//   height: 2rem;
//   transition: all 0.5s;
// }

// .back-link:hover svg {
//   transform: translateX(-3px);
// }

// .project-link {
//   margin-left: auto;
//   margin-top: 3rem;
//
// }

// .project-link svg {
//   transition: all 0.5s;
//}
