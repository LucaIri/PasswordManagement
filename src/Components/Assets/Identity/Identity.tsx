import React from "react";
import { useNavigate } from "react-router-dom";
import "./Identity.css";

const Identity = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="trueHeader">Identity Credentials</div>
      </div>
      <div>
        <button className="return" onClick={() => navigate("/home")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Identity;
