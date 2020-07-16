// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    const map = new Map();
    for (const letter of s) {
      if (!getLetter(map, letter)) map.set(letter, 1);
      else {
        let convertedLetter = getLetter(map, letter);
        map.set(convertedLetter, map.get(convertedLetter) + 1);
      }
    }
    for (const key of map.keys()) if (map.get(key) === 1) return key;
    return '';
  }

function getLetter(map, letter) {
  if (map.has(letter.toLowerCase())) return letter.toLowerCase();
  else if (map.has(letter.toUpperCase())) return letter.toUpperCase();
  else return false;
}