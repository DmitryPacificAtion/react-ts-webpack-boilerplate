import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "./component/hello";

(function() {
  const element = document.createElement("div");
  element.setAttribute("id", "root");
  document.body.appendChild(element);
})();

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root"));
