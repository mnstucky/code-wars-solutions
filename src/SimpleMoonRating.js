// https://www.codewars.com/kata/5be8852935da89c5c8000157/train/javascript

function moonRating(rating) {
  result = "";
  rating = Math.round(rating);
  for (let i = 0; i < 5; i++) {
    if (rating >= 2) {
      result += "o";
      rating -= 2;
    } else if (rating >= 1) {
      result += "c";
      rating -= 1;
    } else {
      result += "x";
    }
  }
  return result;
}
