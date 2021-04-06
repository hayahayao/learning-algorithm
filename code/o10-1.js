var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let fibn = 0;
    let fibn1 = 1;
    let fibn2 = 0;
    for (let i = 2; i <= n; i++) {
        fibn = (fibn1 + fibn2) % 1000000007; // 题目要求取模
        fibn2 = fibn1;
        fibn1 = fibn;
    }
    return fibn;
};
