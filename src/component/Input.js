import React from "react";
import "../style/Input.css";

const InputImage = ({ onChange, onSubmit }) => {
  return (
    <div className="input">
      <div className="teks ">
        {`Deteksi muka dengan Artificial Intelegence. Coba sekarang`}
      </div>

      <div className="box pa2 br3 shadow-3 center w-70 ma3">
        <div className="flex flex-center pa2 ">
          <input
            className="f5 pa2  w-70 center bn"
            type="text"
            id="image_button"
            onChange={onChange}
          ></input>
          <button
            className="f5 pa2  w-30 center grow link  bg-light bn"
            id="image_button"
            onClick={onSubmit}
          >
            {" "}
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputImage;
