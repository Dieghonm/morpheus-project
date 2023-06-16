import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import MyContext from './helpers/context/MyContext';
import EditToken from './pages/EditToken';
import Fight from './pages/Fight';
import Rules from './pages/Rules';
import Tokens from './pages/Tokens';

import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState({name:'', email:'', role:''});
  const [SelectedToken, setSelectedToken] = useState([]);
  const [characterSheet, setCharacterSheet] = useState([]);

  const params = {
    loggedIn,
    setLoggedIn,
    SelectedToken,
    setSelectedToken,
    characterSheet,
    setCharacterSheet,
   }

  return (
    <MyContext.Provider value={params}>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Routes>
            <Route path="/EditToken" element={<EditToken />} />
            <Route path="/Fight" element={<Fight />} /> 
            <Route path="/Rules" element={<Rules />} /> 
            <Route path="/Tokens" element={<Tokens />} /> 
            <Route path="*" element={<Home /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
