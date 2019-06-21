function (arr) {
    if(arr.length <1 ) return;
    for(i=0; i< arr.length-1; i++) {
        let minIndex = i;

        for(j= i+1; j<arr.length; j++) {
            if (arr[j] < a[minIndex]) {
                minIndex =j;

            }
        }

        temp = a[i]
        a[i] = a[minIndex];
        a[minIndex] = temp;
    }

}