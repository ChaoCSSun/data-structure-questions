var bub = function(arr) {
  for (let i =0; i < arr.length; i++) {
    let flag = false;
    for (j = 0; j < arr.length-i-1; j++ ){
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        flag = true;
      }
    }
    if (!flag) return false;
    console.log(arr);
  }
  
}

var arr = [5,2,3,4,1];

bub(arr);