import React from "react";
import "../style/Rank.css";

const Rank = ({ user }) => {
  return (
    <div className="Rank center">
      <div className="f3 center">{`${user.name}, your current entries is`}</div>
      <div className="f2 center">{`#${user.entries}`}</div>
    </div>
  );
};
export default Rank;
