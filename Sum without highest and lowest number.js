function sumArray(array) {
    console.log(array)
    if (!array ) return 0
    if (array.length <= 1) return 0
    let sum = 0;

    let min = Math.min(...array);
    let max = Math.max(...array);
    for (let i = 0; i < array.length; i++){

        sum = sum + array[i];
    }
    return sum - max - min
}