import styled, { keyframes } from "styled-components";
import { HeadingMain } from "../universal-styles";

const loading = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;

export const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-box {
    display: flex;
    align-items: center;
    justify-content: center;

    ${HeadingMain} {
      font-size: 2.5rem;
      margin-right: 2rem;
    }

    svg {
      height: 3rem;
      width: 3rem;
      animation: ${loading} 1s infinite;
    }
  }
`;
