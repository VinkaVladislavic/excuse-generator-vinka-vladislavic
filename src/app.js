/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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
  let excuse = [];
  for (let i = 0; i < excuseOptions.length; i++) {
    excuse[i] = randomExcuse(excuseOptions[i]);
  }
  document.getElementById("excuse").innerText = excuse.join(" ");
  function randomExcuse(excusePartArray) {
    let randomNumber = Math.floor(Math.random() * excusePartArray.length);
    return excusePartArray[randomNumber];
  } // Dado que "array" representa una lista de opciones de excusas y se tiene muchos array, podrías llamarlo excusePartArray.
};
