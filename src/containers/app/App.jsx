import React, { useEffect } from "react";

import "./App.css";

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Main from "../main/Main.jsx";

const App = () => {
  useEffect(() => {
    document.body.className = "black";
  }, []);

  return (
    <>
      <Header />
      <img width='81px' src='https://how-many-visits-lol.glitch.me/counter.svg' />
      <Main />
      <Footer />
    </>
  );
};

export default App;
