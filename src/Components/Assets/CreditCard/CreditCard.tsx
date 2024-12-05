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
      <div>
        <button className="return" onClick={() => navigate("/home")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default CreditCard;
