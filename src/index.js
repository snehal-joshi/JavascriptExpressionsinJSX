import React from "react";
import ReactDOM from "react-dom";

const firstName = "Snehal";
const lastName = "Joshi";

const luckyNumber = 7;
ReactDOM.render(
  <div>
    <h1>Hello {firstName + " " + lastName}!</h1>

    <h1>
      Hello {firstName} {lastName}!
    </h1>

    <h1>Hello {`${firstName} ${lastName}`}!</h1>

    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
