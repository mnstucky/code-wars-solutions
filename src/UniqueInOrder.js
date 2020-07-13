// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
    if (iterable === [] || iterable === "") return [];
    let result = [iterable[0]];
    let currentElement = iterable[0];
    for (let i = 1; i < iterable.length; i++) {
      if (iterable[i] !== currentElement) {
        result.push(iterable[i]);
        currentElement = iterable[i];
      }
    }
    return result;
  }