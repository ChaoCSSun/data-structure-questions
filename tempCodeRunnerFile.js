function swap(arr, i, j) {
    const temp = arr[i];
    a[i] = a[j];
    a[j] = temp;
}

// hot
function partitionHoare(arr, left, right) {
    const pivot = arr[Math.floor((left + right)/2)];

    while (left <= right) {
        while(left <pivot) {
            left++
        }
        while (right > pivot) {
            right --
        }

        if(left <= right) {
            swap(arr, left, right)
        }
    }
    return left;
}

function quickSort(arr, left, right) {
    if (arr.length < 1) return -1;
    let left = left || 0;
    let right = right || arr.length -1;
    let pivot = partitionHoare(arr, left, right);

    quickSort(arr, left, pivot-1);
    quickSort(arr, pivot, right);

    return arr;
}

var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

quickSort(arrayRandom);