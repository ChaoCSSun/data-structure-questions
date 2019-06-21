// 插入排序思路
// 数组中的第i 元素拿出，备份（1>=1）;
// 依次和第元素之前的元素进行对比
// 当出现比第元素大的元素时 把较大的元素后挪一个位置
// 把第i个元素往前挪一个位置
// j-- 导致 j 会是-1；

var inter = function (arr) {

  if (arr.length <1) return ;
  for (var i =1; i < arr.length; i++) {
    var temp = arr[i];
    var j = i - 1;
    for (j; j >=0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    console.log(j);
    arr[j+1] = temp;
  }
  console.log(arr);
}

var arr = [5,2,3,4,1];

inter(arr);
