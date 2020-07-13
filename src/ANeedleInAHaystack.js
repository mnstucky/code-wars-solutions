https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
    let result;
    haystack.forEach(function(item, index, array) {
      if (item == 'needle') result = 'found the needle at position ' + index;
    })
    return result;
  }