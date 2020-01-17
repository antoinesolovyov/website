import React from "react";

import "./Article.css";

const Article = props => {
    const { header, meta, summury, url } = props.data;

    return (
        <article>
            <header>
                <h3>{header}</h3>
                <div>
                    <p>{meta}</p>
                </div>
            </header>
            <p>{summury}</p>
            <img src={url} alt="neuron" />
        </article>
    );
};

export default Article;
