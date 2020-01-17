import React, { useState, useCallback } from "react";

import "./Header.css";

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
        <h1>Blog about everything!</h1>
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
