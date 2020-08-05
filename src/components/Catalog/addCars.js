import React from "react";
import Cars from "../assets/cars/cars.json";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/cars/img", false, /\.(png|jpe?g|svg)$/)
);

//---------------------------------------------------------------------------------------------------

const CARS = [];
const CARD_ARRAY = [];

function car() {
  for (let i = 0; i < Cars.length; i++) {
    CARS.push(Cars[i].img.slice(4));
  }
}

car();

for (let i = 0; i < Cars.length; i++) {
  const img = React.createElement("img", {
    src: images[CARS[i]],
    key: `img${i}`,
    className: "image",
  });
  const title = React.createElement("h3", {}, Cars[i].name);
  const text = React.createElement(
    "div",
    { className: "text" },
    Cars[i].description
  );
  const fuel = React.createElement("h5", {}, `топливо:${Cars[i].fuel}`);
  const description = React.createElement(
    "div",
    { className: "description" },
    title,
    text,
    fuel
  );
  const picture = React.createElement("div", { className: "picture" }, img);
  const card = React.createElement(
    "div",
    { className: "card", key: `card${i}` },
    picture,
    description
  );
  CARD_ARRAY.push(card);
}

function Head() {
  return React.createElement("div", { className: "conteiner" }, CARD_ARRAY);
}

export { Head };
