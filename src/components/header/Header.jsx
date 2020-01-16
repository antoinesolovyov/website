import React, { useState } from "react";

import "./Header.css";

const Header = () => {
    const [isBlackTheme, setIsBlackTheme] = useState(false);

    const onClickHandler = () => {
        if (isBlackTheme) {
            document.body.className = "black";
        } else {
            document.body.className = "white";
        }

        setIsBlackTheme(!isBlackTheme);
    };

    return (
        <header>
            <h1>Blog about everything!</h1>
            <div>
                <button onClick={onClickHandler}>
                    {isBlackTheme ? "Black" : "White"}
                </button>
            </div>
        </header>
    );
};

export default Header;
