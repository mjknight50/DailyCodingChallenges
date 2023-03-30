export function plusMinus(arr: number[]): string[] {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let x of arr) {
        if (x > 0) {
            positiveCount++;
        }
        else if (x < 0) {
            negativeCount++;
        }
        else if (x === 0) {
            zeroCount++;
        }
    }
    const positiveCountAsDecimal = (positiveCount / arr.length).toFixed(6);
    const negativeCountAsDecimal = (negativeCount / arr.length).toFixed(6);
    const zeroCountAsDecimal = (zeroCount / arr.length).toFixed(6);

    const counts = [positiveCountAsDecimal, negativeCountAsDecimal, zeroCountAsDecimal]
    return counts;
}