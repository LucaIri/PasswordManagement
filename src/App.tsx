import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LoginSignup from './Components/Assets/LoginSignup/LoginSignup';
import HomeScreen from './Components/Assets/HomeScreen/HomeScreen';
import Login from './Components/Assets/Login/Login';
import CreditCard from './Components/Assets/CreditCard/CreditCard';
import Identity from './Components/Assets/Identity/Identity';
import SecureNotes from './Components/Assets/SecureNotes/SecureNotes';


function App() {
  // const subNumbers = (num1: number, num2: number) => {
  //   const result = num1 - num2;
  //   return result
  // }


  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/creditcard' element={<CreditCard />} />
        <Route path='/identity' element={<Identity />} />
        <Route path='/securenotes' element={<SecureNotes />} />
        
      </Routes>
    </Router>
    // <div>
    //   <HomeScreen/>
    // </div>
    
  );
}

export default App;
