import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Sidebar from './pages/Sidebar';

import MyContext from './helpers/context/MyContext';


import './App.css';
import EditToken from './pages/EditToken';
import Fight from './pages/Fight';
import Rules from './pages/Rules';
import Tokens from './pages/Tokens';

function App() {
  const [loggedIn, setLoggedIn] = useState({name:'', email:'', role:''});

  return (
    <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
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


          {/* <Route path="/aventuras-fantasticas/NewGame" element={<NewGame />} /> */}
          {/* <Route path="/aventuras-fantasticas/SaveGame" element={<SaveGame />} />
          <Route path="/aventuras-fantasticas/HowToPlay" element={<HowToPlay />} />
          <Route path="/aventuras-fantasticas/AboutUs" element={<AboutUs />} />
          <Route path="/aventuras-fantasticas/sinopse/:book" element={<Sinopse />} />
          <Route path="/aventuras-fantasticas/CreateCharacter" element={<CreateCharacter />} />
          <Route path="/aventuras-fantasticas/Play/:goTo" element={<Play />} />
          <Route path="/aventuras-fantasticas/makeLogin" element={<Error />} />*/}