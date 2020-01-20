import React, { Fragment } from "react";

import "./Post.css";

import Title from "../../elements/title/Title.jsx";
import Subtitle from "../../elements/subtitle/Subtitle.jsx";
import Paragraph from "../../elements/paragraph/Paragraph.jsx";
import Image from "../../elements/image/Image.jsx";
import Math from "../../elements/math/Math.jsx";
import uuid from "uuid";

function getPost(post) {
  return post.map(element => {
    switch (element[0]) {
      case "title":
        return <Title key={uuid.v1()} text={element[1]} />;

      case "subtitle":
        return <Subtitle key={uuid.v1()} text={element[1]} />;

      case "paragraph":
        return <Paragraph key={uuid.v1()} text={element[1]} />;

      case "image":
        return <Image key={uuid.v1()} url={element[1]} alt={element[2]} />;

      case "math":
        return <Math key={uuid.v1()} text={element[1]} />;
    }
  });
}

const Post = props => {
  return getPost(props.data);
};

export default Post;
