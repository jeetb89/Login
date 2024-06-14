import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';

function Home() {
  return (
    <div className="container">
      <img src={logo} alt="Company Logo" className="logo" />
      <h2 className="subtitle">
        ELEVATE YOUR
        <br />
        TRAVEL EXPERIENCE
      </h2>
      <p className="description">
        Become a member and enjoy exclusive perks and benefits.
      </p>
      <Link to="/registration">
        <button className="start">LET'S GET STARTED</button>
      </Link>
    </div>
  );
}

export default Home;
