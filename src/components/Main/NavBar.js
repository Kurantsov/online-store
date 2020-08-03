import React from "react";

function NavBar() {
  return (
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
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
