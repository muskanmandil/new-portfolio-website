import React from "react";
import wheel from "../../assets/wheel.svg"
import "./WheelComponent.css";

const WheelComponent = () => {
  return (
    <div className="wheel-btn-container">
      <button className="wheel-btn">
        <img src={wheel} alt="" className="wheel-icon" />
        <span>click here</span>
      </button>
    </div>
  );
};

export default WheelComponent;
