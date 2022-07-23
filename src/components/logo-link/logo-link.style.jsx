import styled from "styled-components";

export const LogoLinkContainer = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 0 0 40px;

  .logo {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-weight: 600;
  }

  .logo-img {
    height: 100%;
    width: 2.3rem;
    transform: rotate(15deg);
    margin-right: 1rem;
  }
`;
