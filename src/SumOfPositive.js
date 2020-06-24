// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
    var sum = 0;
    arr.forEach(function(value) {
        if (value > 0) sum += value;
    })
    return sum;
}