"use strict";

// https://www.codewars.com/kata/5318f00b31b30925fd0001f8/train/javascript

var numberToPrice = function (number) {
  if (isNaN(number) || number === "") {
    return "NaN";
  }
  number = number.toLocaleString("en-US", {
    style: "decimal",
    minimumFractionDigits: "2",
  });
  return number.replace(/(?<=\...)\d+/, "");
};