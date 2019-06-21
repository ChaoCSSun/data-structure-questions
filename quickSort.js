// swap function

// Way1


function quickSort(arr) {
    if (arr.length < 1) return -1;
    let pivot = arr[0];
    let leftA = [];
    let rightB = [];
    for(var i =1; i< arr.length; i++) {
        if(arr[i] < pivot) {
            leftA.push(arr[i]);
        } else {
            rightB.push(arr[i]);
        }
    }

    return quickSort(leftA).concat(pivot, quickSort(rightB));
}

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

quickSort(array);

