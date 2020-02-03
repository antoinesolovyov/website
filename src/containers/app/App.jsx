import React, { useEffect } from "react";
import { Route } from "react-router-dom";

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
      <Route path="/" exact>
        <Header />
      </Route>
      <Main />
      <Route path="/" exact>
        <Footer />
      </Route>
    </>
  );
};

export default App;
