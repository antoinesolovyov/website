import React from "react";

import "./App.css";

import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navigation from "../components/navigation/Navigation.jsx";

const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Footer />
        </>
    );
};

export default App;
