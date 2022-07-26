import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeadingSecondary, HeadingTerciary } from "../../universal-styles.jsx";
import { CustomButton } from "../../custom-button/custom-button.component";
import CustomInput from "../../custom-input/custom-input.component.jsx";
import { LoginContainer } from "./login.style.jsx";
import { ArrowLink } from "../../arrow-link/arrow-link.component";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginToggle, setLoginToggle] = useState(true);

  const toggleLoginForm = () => setLoginToggle(!loginToggle);

  useEffect(() => {
    if (false) {
      return navigate("/");
    }
  });

  return (
    <LoginContainer>
      <div className="login-box">
        {loginToggle ? (
          <form className="login-form">
            <HeadingSecondary>Sign In</HeadingSecondary>

            <div className="input-group-column">
              <HeadingTerciary>Email</HeadingTerciary>
              <CustomInput type="email" name="userMail" />
            </div>

            <div className="input-group-column">
              <HeadingTerciary>Password</HeadingTerciary>
              <CustomInput type="password" name="userPassword" />
            </div>

            <CustomButton>Sign In</CustomButton>

            <ArrowLink as="p" linkType="basic" onClick={toggleLoginForm}>
              Don't have an account? Sign up now!
            </ArrowLink>
          </form>
        ) : (
          <form className="login-form">
            <HeadingSecondary>Sign Up</HeadingSecondary>

            <div className="input-group-column">
              <HeadingTerciary>Name</HeadingTerciary>
              <CustomInput type="text" name="userName" />
            </div>

            <div className="input-group-column">
              <HeadingTerciary>Email</HeadingTerciary>
              <CustomInput type="email" name="userMail" />
            </div>

            <div className="input-group-column">
              <HeadingTerciary>Password</HeadingTerciary>
              <CustomInput type="password" name="userPassword" />
            </div>

            <div className="input-group-column">
              <HeadingTerciary>Confirm Password</HeadingTerciary>
              <CustomInput type="password" name="userPasswordConfirm" />
            </div>

            <CustomButton>Sign Up</CustomButton>

            <ArrowLink as="p" linkType="basic" onClick={toggleLoginForm}>
              Already have an account? Sign in now!
            </ArrowLink>
          </form>
        )}
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
