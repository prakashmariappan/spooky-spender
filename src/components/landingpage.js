import React from "react";
import LoginButton from "./loginbutton";
import LogoutButton from "./logoutbutton";

const Landingpage = () => {
  return (
    <>
      <div className="landing-container">
        <div className="animate-spooky"></div>
        <div className="content">
          <h1 className="logo-heading">Welcome to Spooky Spender</h1>
          <p className="landing-description">
            Haunt your finances no more. Track your spending and conjure a
            budget that won’t send chills down your spine!
          </p>
          <LoginButton/>
          <LogoutButton/>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
