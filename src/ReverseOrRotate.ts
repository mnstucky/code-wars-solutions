// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/typescript

export class G964 {
    public static revrot(str: string, sz: number) {
        if (sz <= 0 || str === '') return '';
        const chunks = this.getChunks(str, sz);
        const transformedChunks: string[] = [];
        for (const chunk of chunks) {
            if (this.sumOfCubesDivisibleBy2(chunk)) {
                transformedChunks.push((this.reverse(chunk)));
            } else {
                transformedChunks.push(this.rotateLeft(chunk));
            }
        }
        return transformedChunks.join('');
    }

    private static getChunks(str: string, sz: number): string[] {
        let idx = 0;
        const chunks: string[] = [];
        while (idx < str.length) {
            if (idx + sz < str.length + 1)
                chunks.push(str.slice(idx, idx + sz))
            idx += sz;
        }
        return chunks;
    }

    private static sumOfCubesDivisibleBy2(chunk: string): boolean {
        let sum = 0;
        for (const digit of chunk) {
            sum += Math.pow(Number(digit), 3);
        }
        return sum % 2 === 0;
    }

    private static reverse(chunk: string): string {
        return chunk.split('').reverse().join('');
    }

    private static rotateLeft(chunk: string): string {
        return chunk.slice(1).concat(chunk[0]);
    }
}