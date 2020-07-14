// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    if (arr[0] !== arr[1] && arr[1] === arr[2]) return arr[0];
    else return arr.find(element => element !== arr[0]);
  }
  