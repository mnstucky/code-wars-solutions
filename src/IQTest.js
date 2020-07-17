// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

function iqTest(numbers){
  numbers = numbers.split(' ');
  const odds = numbers.filter(number => number % 2 !== 0);
  if (odds.length === 1) return 1 + numbers.indexOf(odds[0]);
  else return 1 + numbers.indexOf(numbers.find(number => number % 2 === 0));
}