export function containsSum(arr: number[], sum: number): boolean {
    const otherNumbers: Array<number> = [];

    for (let num of arr) {
        if (otherNumbers.includes(num)) {
            return true;
        }
        else {
            otherNumbers.push(sum - num);
        }
    };
    return false;
}