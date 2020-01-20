import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Main from "../main/Main.jsx";

const App = () => {
  useEffect(() => {
    document.body.className = "black";
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
