import { useState } from "react";
import { FormMessage, HeadingSecondary, HeadingTerciary, InputGroupColumn } from "../../universal-styles.jsx";
import { CustomButton } from "../../custom-button/custom-button.component";
import CustomInput from "../../custom-input/custom-input.component.jsx";
import { LoginContainer } from "./login.style.jsx";
import { ArrowLink } from "../../arrow-link/arrow-link.component";
import { checkEmail, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils.js";

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
  const [registerForm, setRegisterForm] = useState(registerFormInitialState);
  const [formMessage, setFormMessage] = useState("");

  const toggleLoginForm = () => setLoginToggle(!loginToggle);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (loginToggle) {
      setLoginForm({ ...loginForm, [name]: value });
    } else {
      setRegisterForm({ ...registerForm, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginToggle) {
      const user = await signInAuthUserWithEmailAndPassword(loginForm.mail, loginForm.password);
      if (!user) {
        setLoginForm(loginFormInitialState);
        setFormMessage({ text: "Incorrect password or email!", textColor: "red" });
      } else {
        setFormMessage({ text: "Signed in!", textColor: "green" });
      }
    } else {
      if (registerForm.password !== registerForm.passwordConfirm) {
        setRegisterForm({ ...registerForm, passwordConfirm: "" });
        setFormMessage({ text: "Passwords don't match!", textColor: "red" });
        return;
      } else {
        if (await checkEmail(registerForm.mail)) {
          setRegisterForm({ ...registerForm, mail: "" });
          setFormMessage({ text: "Email is taken!", textColor: "red" });
          return;
        } else {
          const { user } = await createAuthUserWithEmailAndPassword(registerForm.mail, registerForm.password);

          setFormMessage({ text: "Registered!", textColor: "green" });

          await createUserDocumentFromAuth(user, { displayName: registerForm.displayName });
        }
      }
    }
  };

  return (
    <LoginContainer>
      <div className="login-box">
        {loginToggle ? (
          <form className="login-form" onSubmit={handleSubmit}>
            <HeadingSecondary>Sign In</HeadingSecondary>
            {formMessage && <FormMessage textColor={formMessage.textColor}>{formMessage.text}</FormMessage>}
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

            {formMessage && <FormMessage textColor={formMessage.textColor}>{formMessage.text}</FormMessage>}

            <InputGroupColumn>
              <HeadingTerciary>Name</HeadingTerciary>
              <CustomInput type="text" required name="displayName" onChange={handleChange} value={registerForm.displayName} />
            </InputGroupColumn>

            <InputGroupColumn>
              <HeadingTerciary>Email</HeadingTerciary>
              <CustomInput type="email" required name="mail" onChange={handleChange} value={registerForm.mail} />
            </InputGroupColumn>

            <InputGroupColumn>
              <HeadingTerciary>Password</HeadingTerciary>
              <CustomInput type="password" required name="password" onChange={handleChange} value={registerForm.password} />
            </InputGroupColumn>

            <InputGroupColumn>
              <HeadingTerciary>Confirm Password</HeadingTerciary>
              <CustomInput type="password" required name="passwordConfirm" onChange={handleChange} value={registerForm.passwordConfirm} />
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
