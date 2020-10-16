"use strict";

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  return text
    .split("")
    .filter((character) => character.match(/[a-zA-Z]/))
    .map((character) => character.toUpperCase().charCodeAt(0) - 64)
    .join(" ");
}
