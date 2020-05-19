function isSortedAndHow(array) {
    for (let i = 1; i <= array.length;i++){
        if (array[i] > array[i - 1]) return 'yes, ascending'
        if (array[i] > array[i + 1]) return 'yes, descending'
        else return 'no'

    }

}