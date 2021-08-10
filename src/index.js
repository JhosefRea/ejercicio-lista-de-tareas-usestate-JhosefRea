import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const subjects = ["ddi", "daw", "poo"];
const languages = { python: true, cs: false, php: true };

ReactDOM.render(
  <App
    lastname="Salvador"
    age={26}
    name="Chalo"
    languages={languages}
    other={true}
    subjects={subjects}
  />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
