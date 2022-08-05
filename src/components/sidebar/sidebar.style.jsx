import styled from "styled-components";
import { ArrowLinkStatic } from "../arrow-link/arrow-link.style";
import { CustomButtonGreen } from "../custom-button/custom-button.style";
import { StyledNavLink } from "../nav-link/nav-link.style";
import { HeadingSecondary } from "../universal-styles";

const Sidebar = styled.div`
  min-width: 370px;
  min-height: 500px;
  border: 1px solid rgb(200, 200, 200);
  border-bottom: none;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 3.5rem 1.5rem;
  border-radius: 0 14px 0;
  border-left: none;
`;

//Urobit z profile img vseobecny styled komponent

export const SidebarMainContainer = styled(Sidebar)`
  .profile-box {
    display: flex;
    align-items: center;
  }

  ${ArrowLinkStatic} {
    font-size: 1.8rem;
    margin-top: 0.8rem;

    & svg {
      margin-left: -1px;
      margin-right: -5px;
    }
  }

  .profile-name {
    font-size: 2.3rem;
    font-family: var(--font-heading);
    font-weight: 500;
  }

  nav {
    display: inline-block;
    margin: 5rem 0 auto;
  }

  .nav-item {
    width: max-content;
    list-style: none;
    font-weight: 400;
    font-size: 2.3rem;
  }

  .nav-item:not(:last-child) {
    margin-bottom: 2rem;
  }

  .nav-item:last-child .nav-link {
    color: var(--color-red);
  }

  .nav-item:hover ${StyledNavLink} {
    opacity: 0.6;
  }

  .author {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
  }

  .author a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: all 0.5s;
  }

  .author a:hover {
    color: var(--color-green);
  }

  .copyright {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export const SidebarModal = styled(Sidebar)`
  width: 370px;
  overflow: hidden;
  font-size: 2rem;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  z-index: 999;
  transition-delay: 0.8s;
  transition: transform 0.5s;

  svg[name] {
    display: block;
    text-align: right;
    cursor: pointer;
    min-height: 2.8rem;
    min-width: 2.8rem;
    transition: all 0.5s;
    margin: 0 0 0 auto;

    &:hover {
      color: var(--color-red);
    }
  }

  .close-modal-btn {
    display: block;
    text-align: right;
    cursor: pointer;
    min-height: 2.8rem;
    min-width: 2.8rem;
    transition: all 0.5s;
    margin: 0 0 0 auto;
  }

  .close-modal-btn:hover {
    color: var(--color-red);
  }

  ${HeadingSecondary}:not(:first-of-type) {
    margin-top: 3rem;
  }

  .profile-info {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .profile-info .profile-img {
    height: 100%;
    width: 4.3rem;
    margin-right: 1rem;
  }

  .profile-info .profile-name-search {
    font-weight: 400;
  }

  .modal-form {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    overflow-y: visible;
    scrollbar-width: none;

    ${CustomButtonGreen} {
      margin: 4rem 0 0 auto;
    }
  }

  .search-results-box {
    margin-top: 1.5rem;
    max-height: 180px;
    overflow: hidden;
    overflow-y: visible;
    scrollbar-width: thin;
  }

  #result-box-big {
    max-height: 360px;
  }

  .search-result {
    padding: 0.8rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    border-bottom: 1px solid rgb(218, 218, 218);
  }

  .search-result .search-invite-btn {
    color: var(--color-green);
    cursor: pointer;
  }

  .search-invite-sent-btn {
    display: flex;
    align-items: center;
  }

  .search-invite-sent-btn svg {
    margin-left: 0.3rem;
  }

  .profile-box {
    display: flex;
    align-items: center;
  }

  ${ArrowLinkStatic} {
    font-size: 1.8rem;
    margin-top: 0.8rem;

    & svg {
      margin-left: -1px;
      margin-right: -5px;
    }
  }

  .profile-name {
    font-size: 2.3rem;
    font-family: var(--font-heading);
    font-weight: 500;
  }

  nav {
    display: inline-block;
    margin: 5rem 0 auto;
  }

  .nav-item {
    width: max-content;
    list-style: none;
    font-weight: 400;
    font-size: 2.3rem;
  }

  .nav-item:not(:last-child) {
    margin-bottom: 2rem;
  }

  .nav-item:last-child .nav-link {
    color: var(--color-red);
  }

  .nav-item:hover ${StyledNavLink} {
    opacity: 0.6;
  }

  .author {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
  }

  .author a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: all 0.5s;
  }

  .author a:hover {
    color: var(--color-green);
  }

  .copyright {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export const SidebarModalShadow = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100% + 90px);
  margin-top: -90px;
  background-color: rgba(0, 0, 0, 0.19);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "998" : "-998")};
  transition: opacity 0.5s, z-index 0.1s;
`;
