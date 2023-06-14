import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import MyContext from './helpers/context/MyContext';
import Home from './pages/Home';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState({name:'', email:'', role:''});

  return (
    <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Routes>
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
          {/* <Route path="/aventuras-fantasticas" element={<Project />} />  */}