// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
    const result = [];
    const wordArray = word.split('').sort();
    for (const match of words) {
      const matchArray = match.split('').sort();
      let isMatch = true;
      if (matchArray.length !== wordArray.length) isMatch = false;
      else {
        for (let i = 0; i < wordArray.length; i++) {
          if (wordArray[i] !== matchArray[i]) isMatch = false;
        }
      }
      if (isMatch) result.push(match);
    }
    return result;
}