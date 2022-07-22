import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.style.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (false) {
      return navigate("/");
    }
  });

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <form className="login-form">
          <h2 className="heading-secondary">Sign In</h2>

          <div className="input-group-column">
            <h3 className="heading-terciary">Email</h3>
            <input type="email" name="userMail" />
          </div>

          <div className="input-group-column">
            <h3 className="heading-terciary">Password</h3>
            <input type="password" name="userPassword" />
          </div>

          <button className="submit-form-btn">Sign In</button>

          <p className="under-login-link under-text-link">Don't have an account? Sign up now!</p>
        </form>

        {/* <form className="login-form">
          <h2 className="heading-secondary">Sign Up</h2>
  
          <div className="input-group-column">
            <h3 className="heading-terciary">Name</h3>
            <input type="text" name="userName" />
          </div>
  
          <div className="input-group-column">
            <h3 className="heading-terciary">Email</h3>
            <input type="email" name="userMail" />
          </div>
  
          <div className="input-group-column">
            <h3 className="heading-terciary">Password</h3>
            <input type="password" name="userPassword" />
          </div>
  
          <div className="input-group-column">
            <h3 className="heading-terciary">Confirm Password</h3>
            <input type="password" name="userPasswordConfirm" />
          </div>
  
          <button className="submit-form-btn">Sign Up</button>
  
          <a className="under-login-link under-text-link" href="#">Already have an account? Sign in now!</a>
        </form>  */}
      </div>
    </div>
  );
};

export default LoginPage;
