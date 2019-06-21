
// 二维数组是一维数组还为数组
// 二维数组a[0][1] a[0][2] a[[1],[1, 1] [1,2,1]];
// a[[],[]]
// a[0]=[1] a[1]=[1,1], a[2]=[1,2,1]
// a[0][0] =[1],a[1][0]=1, a[1][1]=1
// i =2, j <=i ; a[2][0] = 1 a[2][1]=2 => a[i-1][j-1] + a[i-1][j]
function generate(n) {

    let paArr = [n];

    for(let i=0; i <n; i ++) {
        paArr[i] = [i];// 初始化数组p[0], p[1], ..p[4]
        for(j= 0; j<=i; j++) {
            if (j == 0 || j==i) {
                paArr[i][j] = 1; // 开始到最后都是1
            } else {
                paArr[i][j] = paArr[i-1][j-1] +paArr[i-1][j];
            }
        }
        
    }
    return paArr;
}
generate(5);