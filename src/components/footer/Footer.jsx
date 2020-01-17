import React from "react";

import "./Footer.css";
import Weather from "../weather/Weather.jsx";

const Footer = () => {
    return (
        <footer>
            <a href="#">Twitter</a>
            {" • "}
            <a href="#">Instagram</a>
            {" • "}
            <a href="#">GitHub</a>

            <Weather />
        </footer>
    );
};

export default Footer;
