import React from "react";
import { useNavigate } from 'react-router-dom'
import './CreditCard.css'

const CreditCard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className='trueHeader'>
           Credit Card Credentials
        </div>
      </div>
      <div className="details">
        <ul className="list-group">
          <li className="list-group-item">Credit Card Credentials</li>
          <li className="list-group-item">CC Number: 5467 5467 9901 4504</li>
          <li className="list-group-item">PIN: 9012</li>
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

export default CreditCard;
