import styled from "styled-components";
import { HeadingMain } from "../../universal-styles";

export const GuideContainer = styled.div`
  width: 100%;
  height: 100%;

  ${HeadingMain} {
    margin-top: 3rem;
  }

  .guide-text-container {
    max-width: 1100px;
    font-size: 2.3rem;
    font-weight: 400;
    margin: 6rem auto 0;
  }

  .guide-heading-main {
    font-family: var(--font-heading);
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
  }

  .guide-text {
    margin-bottom: 3rem;
  }

  .guide-text-img {
    display: block;
    max-width: 100%;
    max-width: 100%;
    width: 80%;
    margin: 0 auto 3rem;
    border: 1px solid rgba(200, 200, 200);
    border-radius: 3px;
  }

  .guide-text-section {
    margin-bottom: 8rem;
  }
`;
