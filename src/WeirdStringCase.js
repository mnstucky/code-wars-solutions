// https://www.codewars.com/kata/52b757663a95b11b3d00062d/javascript

function toWeirdCase(string){
    const result = [];
    let index = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        result.push(' ');
        index = 0;
      }
      else {
        index % 2 === 0 ? result.push(string[i].toUpperCase()) : result.push(string[i].toLowerCase());
        index++
      }
    }
    return result.join('');
  }