// 常规解法
var hammingWeight = function(n) {
    // 从最低位开始，一位一位判断
    let cnt = 0;
    let flag = 1;
    while (flag) {
        if (n & flag) cnt++;
        flag = flag << 1;
    }
    return cnt;
};

// 另一种解法
var hammingWeight = function(n) {
    // 一个整数减去1 都是把最右边的1变成0
    // 如果它的右边还有0 则所有的0变成1
    // 而左边所有位保持不变
    
    // 而如果将 一个整数减去1 和 原整数 做与运算
    // 会把该整数最右边的1变成0
    // 那么一个整数的二进制表示中有多少个1就可以进行多少次这样的操作
    // 从而整数中有几个1就可以循环几次
    let cnt = 0;
    while (n) {
        cnt++;
        n = (n-1) & n;
    }
    return cnt;
};
