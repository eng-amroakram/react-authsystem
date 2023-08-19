import React from "react";
import homeStyles from "../assets/css/modules/homeStyles.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={homeStyles.layout}>
      <h1 className={homeStyles.title}>Home Screen</h1>
      <p className={homeStyles.text}>
        This is the home page. You can login or register from here.
      </p>

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
