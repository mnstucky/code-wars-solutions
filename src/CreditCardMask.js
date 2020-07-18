// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
    return cc.split('').map((char, index) => { if (index < cc.length - 4) return '#'; else return char; }).join('');
}
  