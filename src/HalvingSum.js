// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

function halvingSum(n) {
  let term = n, sum = 0;
  while (term > 0) {
    sum += term;
    term = Math.floor(term / 2);
  }
  return sum;
}