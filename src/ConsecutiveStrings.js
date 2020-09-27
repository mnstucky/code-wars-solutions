"use strict";

function longestConsec(strarr, k) {
  if (k > strarr.length) {
    return "";
  }
  let maxLength = 0;
  let result = "";
  strarr.forEach(function (value, index, array) {
    let possibleMatch = "";
    for (let i = index; i < index + k && i < array.length; i++) {
      possibleMatch += strarr[i];
    }
    if (possibleMatch.length > maxLength) {
      maxLength = possibleMatch.length;
      result = possibleMatch;
    }
  });
  return result;
}