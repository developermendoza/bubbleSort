function bubbleSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Example usage
var arrayToSort = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arrayToSort);

console.log("Sorted array:", arrayToSort); // result: [11, 12, 22, 25, 34, 64, 90]
