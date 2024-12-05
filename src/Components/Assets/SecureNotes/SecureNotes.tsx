import React from "react";
import { useNavigate } from 'react-router-dom'
import './SecureNotes.css'

const SecureNotes = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className='trueHeader'>
           SecureNotes Credentials
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

export default SecureNotes;
