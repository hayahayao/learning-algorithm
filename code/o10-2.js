// 本质还是 fib，修改了起始值
// n>2 时记为 f(n)，则 f(n)=f(n-1)+f(n-2)
// 即第一步跳 1 步+第一步跳 2 步的情况
var numWays = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    let fibn = 0;
    let fibn1 = 1;
    let fibn2 = 1;
    for (let i = 2; i <= n; i++) {
        fibn = (fibn1 + fibn2) % 1000000007; // 题目要求取模
        fibn2 = fibn1;
        fibn1 = fibn;
    }
    return fibn;
};
