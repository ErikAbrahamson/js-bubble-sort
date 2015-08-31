function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            i = i - 2;
        }
    }
    return arr;
}
module.exports = bubbleSort;
