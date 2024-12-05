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
      <div className="details">
        <ul className="list-group">
          <li className="list-group-item">SecureNotes Details</li>
          <li className="list-group-item">Kid's Wishlist</li>
          <li className="list-group-item">Kid's Phone Passwords</li>
          <li className="list-group-item">Bank passwords</li>
        </ul>
      </div>
      <div></div>
      <div>
        <button className="return" onClick={() => navigate("/home")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default SecureNotes;
