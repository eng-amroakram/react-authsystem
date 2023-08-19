import React from "react";
import register from "../assets/css/modules/login.module.css";
import logo from "../assets/images/logo-blue.svg";
import quotes from "../assets/images/quotes.svg";
import control from "../assets/images/control.svg";
import twitter from "../assets/images/twitter.svg";
import github from "../assets/images/github.svg";
import google from "../assets/images/google.svg";
import linkedin from "../assets/images/linkedin.svg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className={register.layout}>
      <div className={register.leftLayout}>
        <div className={register.logoContent}>
          <img src={logo} alt="logo" />
          <h1 className={register.title}>Games</h1>
        </div>

        <div className={register.textContent}>
          <img src={quotes} alt="quotes" />
          <p className={register.paragraphText}>
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </p>

          <div className={register.logoTextContent}>
            <p className={register.paragraphText}>
              <span>Hideo Kojima</span>
            </p>
            <img
              src={control}
              className={register.controlImage}
              alt="control"
            />
          </div>
        </div>
      </div>

      <div className={register.rightLayout}>
        <div className={register.headerContent}>
          <h1 className={register.rightTitle}>Join the game!</h1>
          <p className={register.paragraphTextTitle}>
            Go inside the best gamers social network!
          </p>
          <div className={register.headerButtonsContent}>
            <button className={register.loginButton}>
              <img src={google} alt="google" />
            </button>
            <button className={register.loginButton}>
              <img src={twitter} alt="twitter" />
            </button>
            <button className={register.loginButton}>
              <img src={linkedin} alt="linkedin" />
            </button>
            <button className={register.loginButton}>
              <img src={github} alt="github" />
            </button>
          </div>

          <form className={register.form}>
            <div className={register.formGroup}>
              <label htmlFor="email" className={register.label}>
                Email Address*
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Write your email"
                className={register.input}
              />

              <label htmlFor="password" className={register.label}>
                Create password*
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Write your password"
                className={register.input}
              />

              <button className={register.loginButtonSubmit}>Login</button>

              <p className={register.paragraphRegisterText}>
                If you don't have an account, please{" "}
                <span onClick={goToRegister} className={register.spanText}>
                  register
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
