/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
let excuseOptions = [who, action, what, when];

window.onload = function() {
  //write your code here
  let excuse = [];
  for (let i = 0; i < excuseOptions.length; i++) {
    excuse[i] = randomExcuse(excuseOptions[i]);
  }
  document.getElementById("excuse").innerText = excuse.join(" ");
};

function randomExcuse(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
