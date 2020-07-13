// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x) {
    return x.replace(/ /g, '');
}

// note: .replaceAll not supported in Node v8.1.3