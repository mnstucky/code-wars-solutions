export function sumDigits(n: number): number {
    let digits: number[] = ('' + n).split('').map(Number);
    if (n < 0) digits = digits.slice(1);
    return digits.reduce((digit, sum) => sum + digit, 0);
}

// https://www.codewars.com/kata/52f3149496de55aded000410/typescript