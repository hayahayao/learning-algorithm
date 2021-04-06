var myPow = function(x, n) {
    // n过大时直接循环n次会超时
    // 可以使用递归 降到logn
    if(n === 0) return 1;
    if(n === 1) return x;
    if(n === -1) return 1/x;
    let result = myPow(x, n >> 1); // 位运算符提高效率
    if (n & 1) return result * result * x; // 位运算符判断奇数
    return result * result;
};
