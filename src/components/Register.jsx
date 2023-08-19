import React from "react";
import login from "../assets/css/modules/register.module.css";
import logo from "../assets/images/logo.svg";
import quotes from "../assets/images/quotes.svg";
import square from "../assets/images/square.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={login.layout}>
      <div className={login.leftBackgroundLayout}>
        <div className={login.leftContent}>
          <div className={login.content}>
            <div className={login.logoContent}>
              <img src={logo} alt="logo" />
              <span className={login.logoText}>Games</span>
            </div>

            <div className={login.paragraphContainer}>
              <img src={quotes} alt="quote" />
              <p className={login.paragraphText}>
                I always observe the people who pass by when I ride an
                escalator. I'll never see most of them again, so I imagine a lot
                of things about their lives... about the day ahead of them.
              </p>

              <p className={login.paragraphText}>
                <span>Hideo Kojima</span>
              </p>
            </div>

            <div className={login.square}>
              <div className={login.squareItem}>
                <img src={square} alt="square" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={login.rightSide}>
        <div className={login.rightContent}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z"
              fill="#8692A6"
            />
          </svg>
          <button onClick={goToHome} className={login.backButton}>
            Back
          </button>

          <div className={login.formContent}>
            <h1 className={login.title}>Register Individual Account!</h1>
            <p className={login.subtitle}>
              For the purpose of gamers regulation, your details are required.
            </p>

            <form className={login.form}>
              <div className={login.formGroup}>
                <label htmlFor="email" className={login.label}>
                  Email Address*
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Write your email"
                  className={login.input}
                />

                <label htmlFor="password" className={login.label}>
                  Create password*
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Write your password"
                  className={login.input}
                />

                <label htmlFor="confirmPassword" className={login.label}>
                  Confirm Password*
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Write your password"
                  className={login.input}
                />

                {/* //checkbox */}
                <div className={login.checkboxContainer}>
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className={login.checkbox}
                  />
                  <label htmlFor="checkbox" className={login.checkboxLabel}>
                    I agree to terms & conditions
                  </label>
                </div>

                <button className={login.submitButton}>Register</button>
                <button onClick={goToLogin} className={login.loginButton}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
