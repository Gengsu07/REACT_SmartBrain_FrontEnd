import React from "react";
import "../style/Nav.css";

const Nav = ({ OnSigninOut, isSignIn, isRegister }) => {
  if (isSignIn === false && isRegister === false) {
    return (
      <div id="nav">
        <p onClick={() => OnSigninOut("register")}>Register</p>
      </div>
    );
  } else if (isSignIn === false && isRegister === true) {
    return <p onClick={() => OnSigninOut("home")}>Sign In</p>;
  } else {
    return (
      <div className="nav">
        <p id="nav" onClick={() => OnSigninOut("signin")}>
          Sign Out
        </p>
      </div>
    );
  }
};
export default Nav;
