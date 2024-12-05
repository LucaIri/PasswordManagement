import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="trueHeader">Login Credentials</div>
      </div>
      <div className="details">
        <ul className="list-group">
          <li className="list-group-item">Login Credentials</li>
          <li className="list-group-item">Username: lucaniri@umich.edu</li>
          <li className="list-group-item">Password: Bapbap12!</li>
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

export default Login;
