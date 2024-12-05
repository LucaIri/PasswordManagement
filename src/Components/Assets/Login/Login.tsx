import React from "react";
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className='trueHeader'>
           Login Credentials
        </div>
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
