// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

function sumStrings(a,b) { 
    let result = '';
    let carriedOne = 0;
    let digitSum;
    // trim leading zeros
    if (a.startsWith('0')) a = a.replace(/0+/, '');
    if (b.startsWith('0')) b = b.replace(/0+/, '');
    // work right to left through a and b, starting at the 1s place, adding a and b at that digit and saving any carried 1
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      // if either a or b is out of digits, ignore that number as you continue to add
      if (i >= a.length) digitSum = +b[b.length - 1 - i];
      else if (i >= b.length) digitSum = +a[a.length - 1 - i];
      else digitSum = +a[a.length - 1 - i] + +b[b.length - 1 - i];
      // append the 1s place of the summed digit to result, taking any carred 1 from the last sum into account
      result = ((carriedOne + (digitSum % 10)) % 10) + result;
      // set carriedOne to reflect whether the current sum resulted in a carried 1
      (carriedOne + digitSum < 10) ? carriedOne = 0 : carriedOne = 1;
    }
    // append a one if there's a carried 1 from the last operation
    if (carriedOne === 1) result = '1' + result;
    return result;
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}