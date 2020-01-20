import React from "react";
import uuid from "uuid";

import { Route } from "react-router-dom";

import Post from "../post/Post.jsx";

const posts = [
  [
    ["neuron"],
    ["title", "neuron"],
    ["paragraph", "paragraph 1"],
    ["subtitle", "subtitle"],
    ["paragraph", "paragraph 2"],
    ["image", "imgs/neuron.png", "alt"],
    ["paragraph", "paragraph 3"]
  ],
  [
    ["artificial_neural_network"],
    ["title", "artificial_neural_network"],
    ["paragraph", "paragraph 1"],
    ["subtitle", "subtitle"],
    ["paragraph", "paragraph 2"],
    ["image", "imgs/neuron.png", "alt"],
    ["paragraph", "paragraph 3"]
  ],
  [
    ["convolutional_neural_network"],
    ["title", "convolutional_neural_network"],
    ["paragraph", "paragraph 1"],
    ["subtitle", "subtitle"],
    ["paragraph", "paragraph 2"],
    ["image", "imgs/neuron.png", "alt"],
    ["paragraph", "paragraph 3"]
  ],
];

const Posts = () => {
  const getPosts = () => {
    return posts.map(postData => (
      <Route key={uuid.v1()} path={"/" + postData[0]}>
        <Post data={postData} />
      </Route>
    ));
  };

  return <main>{getPosts()}</main>;
};

export default Posts;
