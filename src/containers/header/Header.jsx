import React, { useState, useCallback } from "react";

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
        <Title text={"Blog about everything!"} />
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
