import styled from "styled-components";

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

  .profile-text-box .under-text-link svg {
    height: 2rem;
    width: 2rem;
    margin-left: -1px;
    margin-right: -5px;
  }

  .profile-img {
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    margin-right: 3rem;
  }

  .profile-name {
    font-size: 2.3rem;
    font-family: var(--font-heading);
    font-weight: 500;
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
