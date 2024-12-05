import React, { useState } from 'react'
import './TrueLogin.css'
import { useNavigate } from 'react-router-dom'

const TrueLogin = () => {

  const [action, setAction] = useState("Login");

  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className='header'>
        <div className='trueHeader'>
          Password Manager
        </div>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input type='email' placeholder='Enter your email...'/>
        </div>
        <div className='input'>
          <input type='password' placeholder='Enter your password...'/>
        </div>
        <button className='submit' onClick={()=> navigate('/home')}>
          Login
        </button>
      </div>
    </div>
    
  )
}

export default TrueLogin