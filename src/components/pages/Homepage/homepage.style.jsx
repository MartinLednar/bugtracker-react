import styled from "styled-components";
import { MainBoxContainer } from "../../universal-styles";
import { SidebarMainContainer } from "../../sidebar/sidebar.style";

export const MainPageContainer = styled(MainBoxContainer)`
  @media screen and (max-width: 860px) {
    ${SidebarMainContainer} {
      display: none;
    }
  }
`;
