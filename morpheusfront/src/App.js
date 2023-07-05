import React, { useState } from 'react';

import MyContext from './helpers/context/MyContext';

import './App.css';
import HomePage from './pages/HomePage';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loggedIn, setLoggedIn] = useState({name:'', email:'', role:''});
  const [selectedToken, setSelectedToken] = useState([]);
  const [characterSheet, setCharacterSheet] = useState([]);
  const [screen, setScreen] = useState('ficha');
  const [imutables, setImutables] = useState({raca:[], classe:[], armas:[], armaduras:[]});
  const [tokens, setTokens] = useState([]);

  const params = {
    isSidebarOpen, setIsSidebarOpen,
    loggedIn, setLoggedIn,
    selectedToken, setSelectedToken,
    characterSheet, setCharacterSheet,
    screen, setScreen,
    imutables, setImutables,
    tokens, setTokens,

   }

  return (
    <MyContext.Provider value={params}>
      <div className="App">
        <HomePage />
      </div>
    </MyContext.Provider>
  );
}

export default App;
