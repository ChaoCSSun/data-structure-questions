// 取第一位a[0] 做为最小值
// 找到剩下数组中最小的数据 for 循环 minIndex= j;

var se = function(arr) {
  let minindex, minValue, temp;

  for(var i = 0; i < arr.length -1 ; i++) {
    minindex = i;
    for(j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minindex]) {
        minindex = j;
       //不停的在找最小数据 
      }
    }
    temp = arr[i];
    arr[i] = arr[minindex];
    arr[minindex] = temp;
  }

  console.log(arr);
  
}

var arr = [5,2,3,4,1];

se(arr);