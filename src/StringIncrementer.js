"use strict";

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
  const startOfNum = strng.search(/\d/);
  if (startOfNum === -1) {
    return strng + "1";
  }
  const lengthOfNum = strng.length - startOfNum;
  let num = parseInt(strng.slice(startOfNum));
  num++;
  let strNum = String(num);
  let result = strng.slice(0, startOfNum);
  for (let i = 0; i < lengthOfNum - strNum.length; i++) {
    result += "0";
  }
  result += strNum;
  return result;
}
