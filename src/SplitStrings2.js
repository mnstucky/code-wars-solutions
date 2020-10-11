// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
  if (str.length === 0) return [];
  const result = str.match(/.{1,2}/g);
  if (result[result.length - 1].length === 1) {
    result[result.length - 1] = result[result.length - 1] + "_";
  }
  return result;
}
