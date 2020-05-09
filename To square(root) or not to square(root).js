function squareOrSquareRoot(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++){
        if (Math.sqrt(array[i]) % 1 === 0) arr.push(Math.sqrt(array[i]))
        else arr.push(Math.pow(array[i],2))

    }

    return arr;
}