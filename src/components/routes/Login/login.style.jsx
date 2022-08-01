import styled from "styled-components";
import { HeadingSecondary, HeadingTerciary, InputGroupColumn } from "../../universal-styles";
import { CustomButtonGreen } from "../../custom-button/custom-button.style";
import { ArrowLinkStatic } from "../../arrow-link/arrow-link.style";

export const LoginContainer = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${process.env.PUBLIC_URL}/img/logBg.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .login-box {
    display: flex;
    flex-direction: column;
  }

  .login-box ${HeadingSecondary} {
    text-align: center;
  }

  .login-form {
    width: 350px;
    background-color: white;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    padding: 1.3rem 3rem 2rem;
    border: 1px solid rgb(200, 200, 200);

    ${HeadingTerciary} {
      margin-bottom: 0.8rem;
    }

    ${InputGroupColumn}:first-of-type {
      margin-top: 2.5rem;
    }

    ${CustomButtonGreen} {
      margin-top: 2rem;
      margin-left: 0;
      width: 100%;
      justify-content: center;
    }
  }

  ${ArrowLinkStatic} {
    margin: 2rem auto 0;
  }
`;
