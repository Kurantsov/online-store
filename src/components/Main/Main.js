import React from "react";
import "./Main.scss";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";

function Main() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </BrowserRouter>
  );
}

export default Main;
