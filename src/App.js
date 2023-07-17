import React, { useState }  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindMeal from "./components/FindMeal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Rootlayout from "./layouts/Rootlayout";


function App() {
 
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/" element={<Rootlayout />} >
              <Route index path="/" element={<Home />} />
              <Route path="/findmeal" element={<FindMeal />} />
            </Route>
         </Routes>
      </Router>          
    </div>
  );
}

export default App;
