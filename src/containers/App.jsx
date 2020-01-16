import React from "react";

import "./App.css";

import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navigation from "../components/navigation/Navigation.jsx";
import Article from "../components/article/Article.jsx";
import MouseTracker from "../components/mouseTracker/MouseTracker.jsx";

const App = () => {
    return (
        <>
            <Header />
            <MouseTracker />
            {/* <Navigation /> */}
            <Article />
            <Footer />
        </>
    );
};

export default App;
