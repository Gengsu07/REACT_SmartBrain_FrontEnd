import React from "react";
import Tilt from "react-parallax-tilt";
import ailogo from "../assets/ailogo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Tilt style={style}>
        <img src={ailogo} alt="logo" width={"100%"} />
      </Tilt>
    </div>
  );
};
export default Logo;

const style = {
  heigh: "auto",
  width: "7vw",
  border: "1px solid #ffff",
  margin: "0rem 3rem",
  padding: "0.2rem 0rem",
  background: "linear-gradient(to right, rgb(78, 201, 239), rgb(247, 59, 212))"
};
