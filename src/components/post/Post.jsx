import React from "react";

import "./Post.css";

import Title from "../../elements/title/Title.jsx";
import Subtitle from "../../elements/subtitle/Subtitle.jsx";
import Paragraph from "../../elements/paragraph/Paragraph.jsx";
import Image from "../../elements/image/Image.jsx";

function getPost(post) {
  return post.map(element => {
    switch (element[0]) {
      case "title":
        return <Title text={element[1]} />;

      case "subtitle":
        return <Subtitle text={element[1]} />;

      case "paragraph":
        return <Paragraph text={element[1]} />;

      case "image":
        return <Image url={element[1]} alt={element[2]} />;
      
      default:
        return <></>;
    }
  });
}

const Post = props => {
  return getPost(props.data);
};

export default Post;
