import React from "react";

import "./Footer.css";
import Weather from "../weather/Weather.jsx";

const Footer = () => {
  return (
    <footer>
      <a href="https://twitter.com/antoinesolovyov">Twitter</a>
      {" / "}
      <a href="https://www.instagram.com/antoinesolovyov/">Instagram</a>
      {" / "}
      <a href="https://github.com/antoinesolovyov/">GitHub</a>

      <Weather />
    </footer>
  );
};

export default Footer;
