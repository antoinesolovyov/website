import React from "react";

import "./Article.css";

import Paragraph from "../../elements/paragraph/Paragraph.jsx";
import Subtitle from "../../elements/subtitle/Subtitle.jsx";

const Article = props => {
  const { header, meta, summury, url, date } = props.data;

  return (
    <article>
      <Subtitle text={header}/>
      <Paragraph text={date + " / " + meta} />
      <Paragraph text={summury} />
    </article>
  );
};

export default Article;
