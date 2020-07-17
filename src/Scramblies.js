// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  const str1Map = new Map();
  for (const letter of str1) str1Map.has(letter) ? str1Map.set(letter, str1Map.get(letter) + 1) : str1Map.set(letter, 1);
  for (const letter of str2) {
    if (!str1Map.has(letter) || str1Map.get(letter) < 1) return false;
    else str1Map.set(letter, str1Map.get(letter) - 1);
  }
  return true;
};
