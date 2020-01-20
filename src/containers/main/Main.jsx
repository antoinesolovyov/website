import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./Main.css";

import Articles from "../../components/articles/Articles.jsx";
import Posts from "../../components/posts/Posts.jsx";

const Main = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Articles} />
      <Posts />
    </BrowserRouter>
  );
};

export default Main;
