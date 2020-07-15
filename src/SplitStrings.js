// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/solutions/javascript

function solution(str){
    const result = [];
    if (str === '') return result;
    for (let i = 0; i < str.length; i += 2) {
      result.push(str.slice(i, i + 2))
    }
    if (result[result.length - 1].length < 2) result[result.length - 1] = result[result.length - 1] + '_';
    return result;
  }