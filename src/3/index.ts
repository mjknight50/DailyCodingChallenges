export function minMaxValues(arr: number[]): number[] {

    // sort the array ascending without mutation
    const minNumberArray = arr.map(value => JSON.parse(JSON.stringify(value))).sort((a, b) => b - a).splice(1, arr.length - 1);

    let minimumSum = 0;
    // loop to add the numbers
    for (let i of minNumberArray) {
        minimumSum += i;
    }

    // sort the array descending without mutation
    const maxNumberArray = arr.map(value => JSON.parse(JSON.stringify(value))).sort((a, b) => a - b).splice(1, arr.length - 1);

    let maximumSum = 0;
    // loop to add the numbers
    for (let i of maxNumberArray) {
        maximumSum += i;
    }


    return [minimumSum, maximumSum];
}