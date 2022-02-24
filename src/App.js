import React from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
function App() {
  return (

    <div>
         

  
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
