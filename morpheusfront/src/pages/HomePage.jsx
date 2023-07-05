import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './Sidebar';
import Home from './Home';
import Fight from './Fight';
import Rules from './Rules';
import Tokens from './Tokens';

import './styles/HomePage.css'

const HomePage = () => {
  return (
    <div className='homePage-borry'>
      <BrowserRouter>
        <Sidebar />
        <Routes >
            <Route path="/Fight" element={<Fight />} /> 
            <Route path="/Rules" element={<Rules />} /> 
            <Route path="/Tokens" element={<Tokens />} /> 
            <Route path="*" element={<Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;