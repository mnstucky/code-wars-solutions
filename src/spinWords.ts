export function spinWords(words: string): string {
    return words.split(' ').map((word) => word.length > 4 ? word.split('').reverse().join('') : word).join(' ')
}
