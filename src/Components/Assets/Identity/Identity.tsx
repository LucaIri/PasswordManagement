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
      <div className="details">
        <ul className="list-group">
          <li className="list-group-item">Identity Credentials</li>
          <li className="list-group-item">State ID: I478890234901</li>
        </ul>
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
