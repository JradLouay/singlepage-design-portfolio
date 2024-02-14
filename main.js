import "./style.css";

var headerElement = `<div class="header"><img src="./assets/logo.svg" alt="logo" />
<button class="button-text">Free Consultation</button></div>`;

document.querySelector("#header").innerHTML = headerElement;

document.querySelector("#footer").innerHTML = headerElement;

var leftBtn = document.querySelector("#prev");
leftBtn.onclick = function scrollLeft() {
  var left = document.querySelector(".slider");
  left.scrollBy(-350, 0);
};

var rightBtn = document.querySelector("#next");
rightBtn.onclick = function scrollRight() {
  var left = document.querySelector(".slider");
  left.scrollBy(350, 0);
};
