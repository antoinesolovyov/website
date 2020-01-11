import React, { useState, useCallback } from "react";

import "./Navigation.css";

const Navigation = () => {
    const [inputText, setInputText] = useState("./home:~> ");

    const onChangeHandler = useCallback(
        event => {
            if (event.target.value.length > 9) {
                setInputText(event.target.value);
            }

            console.log(event);
        },
        [setInputText]
    );

    return (
        <nav>
            <input
                type="text"
                value={inputText}
                onChange={onChangeHandler}
            />
        </nav>
    );
};

export default Navigation;
