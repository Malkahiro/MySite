import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/portfolio'} element={<Portfolio />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
