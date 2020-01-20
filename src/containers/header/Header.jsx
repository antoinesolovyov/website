import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import Title from "../../elements/title/Title.jsx";

const Header = () => {
  const [isBlackTheme, setIsBlackTheme] = useState(false);

  const onClickHandler = useCallback(() => {
    if (isBlackTheme) {
      document.body.className = "black";
    } else {
      document.body.className = "white";
    }

    setIsBlackTheme(!isBlackTheme);
  }, [isBlackTheme, setIsBlackTheme]);

  return (
    <>
      <header>
        <Link to="/">
          <Title text={"Blog about everything!"} />
        </Link>
        <div>
          <button onClick={onClickHandler}>
            {isBlackTheme ? "Black" : "White"}
          </button>
        </div>
      </header>
      <p>And a little more...</p>
    </>
  );
};

export default Header;
