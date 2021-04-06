// 贪婪
var cuttingRope = function(n) {
    // 按如下策略
    // 当n>=5时 尽可能多剪长度为3的绳子
    // 当剩下的绳子长度为4时 把绳子剪成两端长度为2的绳子
    if (n === 2) return 1;
    if (n === 3) return 2;

    // 因为涉及到大数运算所以需要在求结果的过程中每步都取余
    let res = 1;
    while (n > 4) {
        res = (res * 3) % 1000000007;
        n = n - 3;
    }
    // 出来循环只有三种情况，分别是n=2、3、4,每种正好分成2、3、4
    return (res * n) % 1000000007;
};
