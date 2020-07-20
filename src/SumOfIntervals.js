https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals){
  let sum = 0;
  while (intervals.length > 0) {
    let currentInterval = intervals.shift();
    doneWithInterval = false;
    while (!doneWithInterval) {
      doneWithInterval = true;
      intervals.forEach(function(interval, index) {
        let usedAnInterval = false;
        if (interval[0] <= currentInterval[0] && interval[1] >= currentInterval[0]) {
          currentInterval[0] = interval[0];
          doneWithInterval = false;
          usedAnInterval = true;
        }
        if (interval[1] >= currentInterval[1] && interval[0] <= currentInterval[1]) {
          currentInterval[1] = interval[1];
          doneWithInterval = false;
          usedAnInterval = true;
        }
        if (interval[0] >= currentInterval[0] && interval[1] <= currentInterval[1]) {
            doneWithInterval = false;
            usedAnInterval = true;
        }
        if (usedAnInterval) intervals.splice(index, 1);
      })
    }
    sum += currentInterval[1] - currentInterval[0];
  }
  return sum;
}