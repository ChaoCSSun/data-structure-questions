function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
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
            swap(arr, left, right);
            left ++;
            right --;
        }
    }
    return left;
}

function quickSort(arr, left, right) {
    left = left || 0;
    right = right || arr.length -1;
    var p = partitionHoare(arr, left, right);

    // if (left < pivot-1) {
    //     quickSort(arr, left, pivot-1);
    // } 
    
    // if (pivot -1 < right) {
    //     quickSort(arr, pivot, right);
    // }

    // return arr;
    // K 大元素

    while(p + 1 !== k){
        if (p+1 > k ) {
            p= partitionHoare(arr, 0, p-1);
        } else {
            p= partitionHoare(arr, p+1, arr.length -1);
        }
    }
}

var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

quickSort(arrayRandom);