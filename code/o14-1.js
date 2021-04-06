// 动态规划
var cuttingRope = function(n) {
    // n<=3时必须要分段
    if (n === 2) return 1;
    if (n === 3) return 2;
    
    // n>=4时 此时3可以不再分了
    // 因为根据数学知识要求乘积最大时，在大于4之后，基本割绳子都已3为主，剩下的割2补全，并且不能有1的绳子存在
    let products = [0, 1, 2, 3]; // 存储子问题的最优解 第i个表示长度为i绳子的最大乘积值
    for (let i = 4; i <= n; i++) { // 递增的 计算顺序是自下向上的
        let max = 0;
        // 在求f(i)之前 对于每个j而言f(j)都已经求出来了
        for (let j = 1; j <= Math.floor(i/2); j++) {
            max = Math.max(max, products[j] * products[i - j]);
        }
        products[i] = max;
    }
    return products[n];
};

// 贪婪
var cuttingRope = function(n) {
    // 按如下策略
    // 当n>=5时 尽可能多剪长度为3的绳子
    // 当剩下的绳子长度为4时 把绳子剪成两端长度为2的绳子
    if (n === 2) return 1;
    if (n === 3) return 2;

    // 尽可能多剪长度为3的绳子
    let cnt3 = Math.floor(n / 3);
    // 当剩下的绳子长度为4时 不选择 3-1 而是 2-2
    if (n - cnt3*3 === 1) cnt3 -= 1;
    let cnt2 = Math.floor((n - cnt3*3) / 2);

    return (3 ** cnt3) * (2 ** cnt2);
};
