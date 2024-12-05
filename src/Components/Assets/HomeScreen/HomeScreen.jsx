import React from 'react'
import './HomeScreen.css'
import { useNavigate } from 'react-router-dom'
import ListGroup from '../../ListGroup'


const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className='trueHeader'>
           Password Manager - Home
        </div>
      </div>
      
      <div>
        <button className = 'return' onClick={() => navigate('/login')}>
          Go To Login
          </button>
      </div>
      <div>
        <ListGroup className='list'/>
      </div>
    </div>
  )
}

export default HomeScreen