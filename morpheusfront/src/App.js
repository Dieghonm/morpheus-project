import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/aventuras-fantasticas/NewGame" element={<NewGame />} /> */}
      {/* <Route path="/aventuras-fantasticas/SaveGame" element={<SaveGame />} />
      <Route path="/aventuras-fantasticas/HowToPlay" element={<HowToPlay />} />
      <Route path="/aventuras-fantasticas/AboutUs" element={<AboutUs />} />
      <Route path="/aventuras-fantasticas/sinopse/:book" element={<Sinopse />} />
      <Route path="/aventuras-fantasticas/CreateCharacter" element={<CreateCharacter />} />
      <Route path="/aventuras-fantasticas/Play/:goTo" element={<Play />} />
      <Route path="/aventuras-fantasticas/makeLogin" element={<Error />} />
      <Route path="/aventuras-fantasticas" element={<Project />} /> */}
      <Route path="*" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


