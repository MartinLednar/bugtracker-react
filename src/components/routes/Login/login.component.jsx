import { useState } from "react";
import { HeadingSecondary, HeadingTerciary, InputGroupColumn } from "../../universal-styles.jsx";
import { CustomButton } from "../../custom-button/custom-button.component";
import CustomInput from "../../custom-input/custom-input.component.jsx";
import { LoginContainer } from "./login.style.jsx";
import { ArrowLink } from "../../arrow-link/arrow-link.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils.js";

const loginFormInitialState = {
  mail: "",
  password: "",
};

const registerFormInitialState = {
  displayName: "",
  mail: "",
  password: "",
  passwordConfirm: "",
};

const LoginPage = () => {
  const [loginToggle, setLoginToggle] = useState(true);
  const [loginForm, setLoginForm] = useState(loginFormInitialState);
  const [registerForm, setregisterForm] = useState(registerFormInitialState);

  const toggleLoginForm = () => setLoginToggle(!loginToggle);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (loginToggle) {
      setLoginForm({ ...loginForm, [name]: value });
    } else {
      setregisterForm({ ...registerForm, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginToggle) {
      await signInAuthUserWithEmailAndPassword(loginForm.mail, loginForm.password);
    } else {
      const { user } = await createAuthUserWithEmailAndPassword(registerForm.mail, registerForm.password);

      await createUserDocumentFromAuth(user, { displayName: registerForm.displayName });
    }
  };

  return (
    <LoginContainer>
      <div className="login-box">
        {loginToggle ? (
          <form className="login-form" onSubmit={handleSubmit}>
            <HeadingSecondary>Sign In</HeadingSecondary>

            <InputGroupColumn>
              <HeadingTerciary>Email</HeadingTerciary>
              <CustomInput type="email" name="mail" onChange={handleChange} value={loginForm.mail} />
            </InputGroupColumn>

            <InputGroupColumn>
              <HeadingTerciary>Password</HeadingTerciary>
              <CustomInput type="password" name="password" onChange={handleChange} value={loginForm.password} />
            </InputGroupColumn>

            <CustomButton>Sign In</CustomButton>

            <ArrowLink as="p" linkType="basic" onClick={toggleLoginForm}>
              Don't have an account? Sign up now!
            </ArrowLink>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <HeadingSecondary>Sign Up</HeadingSecondary>

            <InputGroupColumn>
              <HeadingTerciary>Name</HeadingTerciary>
              <CustomInput type="text" name="displayName" onChange={handleChange} value={registerForm.displayName} />
            </InputGroupColumn>

            <InputGroupColumn>
              <HeadingTerciary>Email</HeadingTerciary>
              <CustomInput type="email" name="mail" onChange={handleChange} value={registerForm.mail} />
            </InputGroupColumn>

            <InputGroupColumn>
              <HeadingTerciary>Password</HeadingTerciary>
              <CustomInput type="password" name="password" onChange={handleChange} value={registerForm.password} />
            </InputGroupColumn>

            <InputGroupColumn>
              <HeadingTerciary>Confirm Password</HeadingTerciary>
              <CustomInput type="password" name="passwordConfirm" onChange={handleChange} value={registerForm.passwordConfirm} />
            </InputGroupColumn>

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
