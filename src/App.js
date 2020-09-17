import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {

  return (
    <React.StrictMode>
        <div id="something-important">
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
            <Router>
              <SearchParams path="/"  />
              <Details path="/details/:id" />
            </Router>
        </div>
    </React.StrictMode>
  );
};
render(<App />, document.querySelector("#root"));
