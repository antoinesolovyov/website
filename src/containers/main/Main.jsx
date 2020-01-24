import React from "react";
import { Route, Link } from "react-router-dom";

import "./Main.css";

import Articles from "../../components/articles/Articles.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Weather from "../../components/weather/Weather.jsx";
import ExchangeRates from "../../components/ExchangeRates/ExchangeRates.jsx";
import Search from "../../components/search/Search.jsx";

const Main = () => {
  return (
    <main>
      <Posts />
      <Route path="/" exact>
        <Link to="/articles">
          <p>articles</p>
        </Link>
        <Link to="/weather">
          <p>weather</p>
        </Link>
        <Link to="/exchange_rates">
          <p>exchange-rates</p>
        </Link>
        <Link to="/search_component">
          <p>search-component</p>
        </Link>
      </Route>
      <Route path="/articles" exact component={Articles} />
      <Route path="/weather" component={Weather} />
      <Route path="/exchange_rates" component={ExchangeRates} />
      <Route path="/search_component" component={Search} />
    </main>
  );
};

export default Main;
