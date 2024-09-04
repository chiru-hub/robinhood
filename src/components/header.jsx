import React from "react";
import Logo from "../assets/logo.png";

const MyNavbar = () => {
  return (
    <div className="nav d-flex justify-content-between w-100">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="" />
        <div className="ms-5">Planner</div>
        <div className="ms-5">Calculators</div>
        <div className="ms-5">Portfolio Review</div>
      </div>
      <div className="d-flex align-items-center">
        <div>Log In</div>
        <button className="btn btn-outline-success ms-5"> Get Started</button>
      </div>
    </div>
  );
};

export default MyNavbar;
