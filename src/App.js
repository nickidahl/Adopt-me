import React from "react";
import { render } from "react-dom";
import  Pet from "./Pet";

const App = () => {
  /*return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Nacho",
      animal: "Kat",
      breed: "Varm kat",
    }),
    React.createElement(Pet, {
      name: "Aura",
      animal: "Kat",
      breed: "Kold kat",
    }),
  ]);*/

  return (
        <div id="something-important">
            <h1>Adopt me!</h1>
            <Pet name="Luna" animal="dog" breed="Havanese"/>
            <Pet name="Nacho" animal="Kat" breed="Varm kat"/>
            <Pet name="Aura" animal="Kat" breed="Kold kat"/>
        </div>
  )
};
render(<App />, document.querySelector("#root"));
