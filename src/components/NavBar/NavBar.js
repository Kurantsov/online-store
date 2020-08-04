import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./NavBar.scss";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Catalog from "../Catalog/Catalog";
import Home from "../Home/Home";

function NavBar() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <span>
            <a href="/">online-store</a>
          </span>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
            <li>
              <a href="/catalog">Catalog</a>
            </li>
          </ul>
        </header>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/catalog" component={Catalog} />
    </BrowserRouter>
  );
}

export default NavBar;
