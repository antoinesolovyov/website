import React from "react";

import "./Article.css";

const Article = props => {
  const { header, meta, summury, url, date } = props.data;

  return (
    <article>
      <h3>{header}</h3>
      <p>{new Date(Date.parse(date)).toDateString() + " / " + meta}</p>
      <p>{summury}</p>
    </article>
  );
};

export default Article;
