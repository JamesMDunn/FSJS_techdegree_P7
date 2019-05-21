import React from "react";
import ReactLoading from "react-loading";

const Spinner = () => {
  return (
    <div className="photo-container">
      <ReactLoading
        className="spinner"
        type={"spin"}
        color={"blue"}
        height={"30%"}
        width={"20%"}
      />
      <h2>Loading...</h2>
    </div>
  );
};

export default Spinner;
