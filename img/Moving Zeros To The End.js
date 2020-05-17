var moveZeros = function (arr) {
    let array = []
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0) array.push(arr[i])
        else count++
    }
    for (let i = 0; i < count; i++){
        array.push(0)

    }
    return array
}