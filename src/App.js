import React from "react";
import { render } from "react-dom";
//import  Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {

  return (
    <React.StrictMode>
        <div id="something-important">
            <h1>Adopt me!</h1>
            <SearchParams></SearchParams>
        </div>
    </React.StrictMode>
  );
};
render(<App />, document.querySelector("#root"));
