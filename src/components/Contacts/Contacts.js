import React from "react";
import "./Contacts.scss";
import MapApp from "../Map/Map";

function Contscts() {
  return (
    <div className="test">
      <div className="contacts">
        <div className="title">
          <h1>Контакты</h1>
        </div>
      </div>
      <p className="information">
        <strong>Наш телефон:</strong> +375(29)111-11-11
        <br />
        <strong>Наша почта:</strong> Online-stoge@gmail.com
      </p>
      <div className="newmap">
        <MapApp />
      </div>
    </div>
  );
}

export default Contscts;
