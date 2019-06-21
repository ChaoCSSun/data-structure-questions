//分析方法
// 分为已排序 和未排序，然后移动
// 
function (arr) {
    if (arr.length < 1) return;

    for(i = 0; i< arr.length; i++) {
        let temp = a[i];
        let j = i -1;
        // [1];只有一位数
        // [6,4,3,1]; 第一次就要移动[4,6,3,1]; 
        // 已经分区的j 来比较移动数据 如果小就移动
        //注意j 的值变化
        for(j; j>=0; j--) {
            if (a[j] > temp) {
                a[j+1] = a[j];
            } else {
                break;
            }
        }
        a[j+1] = temp;
    }
}

