"use strict";

// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript

function parseInt(string) {
  console.log(string);
  let result = [];
  let stringArray = string.split(" ");
  stringArray.forEach(function (value, index) {
    if (value === "hundred") {
      if (index >= stringArray.length - 1) {
        result.push("00");
      } else if (stringArray[index + 1] === "thousand") {
        result.push("00");
      } else if (stringArray[index + 1] === "and" && Number.parseInt(parseToken(stringArray[index + 2])) < 10) {
        result.push(parseToken(value));
        result.push("0");
      } else if (Number.parseInt(parseToken(stringArray[index + 1])) < 10) {
        result.push(parseToken(value));
        result.push("0");
      }
    } else if (value === "thousand") {
      if (index >= stringArray.length - 1) {
        result.push("000");
      } else if (stringArray[index + 2] === "hundred") {
        // do nothing
      } else if (stringArray[index + 1] === "and" && Number.parseInt(parseToken(stringArray[index + 2])) >= 10) {
        result.push("0");
      } else if (Number.parseInt(parseToken(stringArray[index + 1])) >= 10) {
        result.push("0");
      } else if (stringArray[index + 1] === "and" && Number.parseInt(parseToken(stringArray[index + 2])) < 10) {
        result.push("00");
      } else if (Number.parseInt(parseToken(stringArray[index + 1])) < 10) {
        result.push("00");
      }
    } else if (value == "million") {
      result.push("000000");
    } else {
      result.push(parseToken(value));
    }
  });
  return Number.parseInt(result.join(""));
}

function parseToken(token) {
  let result = "";
  if (token.includes("-")) {
    let tokenArray = token.split("-");
    tokenArray.forEach(function (value) {
      result += convertToken(value);
    });
  } else if (token.includes("ty")) {
    result += convertToken(token);
    result += "0";
  } else {
    result = convertToken(token);
  }
  return result;
}

function convertToken(token) {
  let result = "";
  switch (token) {
    case "zero":
      result = "0";
      break;
    case "one":
      result = "1";
      break;
    case "two":
      result = "2";
      break;
    case "three":
      result = "3";
      break;
    case "four":
      result = "4";
      break;
    case "five":
      result = "5";
      break;
    case "six":
      result = "6";
      break;
    case "seven":
      result = "7";
      break;
    case "eight":
      result = "8";
      break;
    case "nine":
      result = "9";
      break;
    case "ten":
      result = "10";
      break;
    case "eleven":
      result = "11";
      break;
    case "twelve":
      result = "12";
      break;
    case "thirteen":
      result = "13";
      break;
    case "fourteen":
      result = "14";
      break;
    case "fifteen":
      result = "15";
      break;
    case "sixteen":
      result = "16";
      break;
    case "seventeen":
      result = "17";
      break;
    case "eighteen":
      result = "18";
      break;
    case "nineteen":
      result = "19";
      break;
    case "twenty":
      result = "2";
      break;
    case "thirty":
      result = "3";
      break;
    case "forty":
      result = "4";
      break;
    case "fifty":
      result = "5";
      break;
    case "sixty":
      result = "6";
      break;
    case "seventy":
      result = "7";
      break;
    case "eighty":
      result = "8";
      break;
    case "ninety":
      result = "9";
      break;
  }
  return result;
}