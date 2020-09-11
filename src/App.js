import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, animal),
    React.createElement("h1", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
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
  ]);
};
render(React.createElement(App), document.querySelector("#root"));
