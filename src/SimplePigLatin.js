"use strict";

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  const strArray = str.split(" ").map(function (word) {
    if (word.match(/\W/)) {
      return word;
    }
    return word.slice(1).concat(word.charAt(0), "ay");
  });
  return strArray.join(" ");
}
