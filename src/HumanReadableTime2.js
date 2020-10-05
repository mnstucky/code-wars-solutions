// https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript

function humanReadable(seconds) {
  let result = [];
  result.push(Math.floor(seconds / 3600));
  result.push(Math.floor((seconds - result[0] * 3600) / 60));
  result.push(seconds % 60);
  result = result.map(function (value) {
    if (value < 10) return "0" + value;
    else return String(value);
  });
  return `${result[0]}:${result[1]}:${result[2]}`;
}
