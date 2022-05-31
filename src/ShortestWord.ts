export function findShort(s: string): number {
    const words = s.split(' ');
    let minLength = Number.MAX_VALUE;
    for (const word of words) {
        if (word.length < minLength) minLength = word.length;
    }
    return minLength;
}

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/typescript