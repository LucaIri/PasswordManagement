import React, { useState } from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {

  const [action, setAction] = useState("Create Account");

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
          Create Account
        </button>
      </div>
    </div>
    
  )
}

export default LoginSignup