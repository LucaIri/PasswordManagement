import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='trueHeader'>
          Password Manager
        </div>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input type='email' placeholder='Enter your email...'/>
        </div>
        <div className='input'>
          <input type='password' placeholder='Enter your password...'/>
        </div>
        <div className='submit'>
          Create Account
        </div>
      </div>
    </div>
    
  )
}

export default LoginSignup