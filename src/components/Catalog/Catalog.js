import React from "react";
import "./Catalog.scss";
import { Head } from "./addCars";

function Catalog() {
  return (
    <div className="catalog">
      <div className="menu">
        <div className="box">
          <select></select>
        </div>
      </div>
      <div className="product">
        <Head />
      </div>
    </div>
  );
}

export default Catalog;
