import React from "react";
import "../style/FaceRecog.css";

const FaceRecog = ({ imageUrl, box }) => {
  return (
    <div className="relative mt2 center w-70 flex justify-center">
      <img id="image" src={imageUrl} alt="" />
      <div
        className="bounding-box"
        style={{
          top: box.top_row,
          bottom: box.bottom_row,
          left: box.left_col,
          right: box.right_col
        }}
      ></div>
    </div>
  );
};

export default FaceRecog;
