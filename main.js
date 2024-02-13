import "./style.css";
import { setupCounter } from "./counter.js";

var headerElement = `<div class="header"><img src="./assets/logo.svg" alt="logo" />
<button class="button-text">Free Consultation</button></div>`;

document.querySelector("#header").innerHTML = headerElement;

document.querySelector("#footer").innerHTML = headerElement;

setupCounter(document.querySelector("#counter"));
