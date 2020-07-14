// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
    let count = 1; // start count at 1 because the mother will see the ball at least once while it's falling
    let bounceHeight = h * bounce;
    while (bounceHeight > window) { // add 2 to count each time the ball bounces higher than the window
      count += 2;
      bounceHeight *= bounce;
    }
    return count;
  }