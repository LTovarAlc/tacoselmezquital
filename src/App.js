import React from "react";
import "./reset.css"
import Home from "./pages/Home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMobile from "./GlobalComponents/Header/headerMobile";
import Footer from "./GlobalComponents/Footer/footer";
import Header from "./GlobalComponents/Header/header/header";


function App() {
  return (
    <Router>
      <HeaderMobile/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
