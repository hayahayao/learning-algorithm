var climbStairs = function(n) {
    return climb_stairs(0, n)
};
var climb_stairs = function(i, n) {
    if (i > n) return 0
    if (i === n) return 1
    return climb_stairs(i+1, n) + climb_stairs(i+2, n)
}

var climbStairs = function(n) {
    let memo = []
    return climb_stairs(0, n, memo)
};
var climb_stairs = function(i, n, memo) {
    if (i > n) return 0
    if (i === n) return 1
    if (memo[i] > 0) return memo[i]
    memo[i] = climb_stairs(i+1, n, memo) + climb_stairs(i+2, n, memo)
    return memo[i]
}

var climbStairs = function(n) {
    let dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};

var climbStairs = function(n) {
    if (n === 1) return 1
    let first = 1
    let second = 2
    for (let i = 3; i <= n; i++) {
        let third = first + second
        first = second
        second = third
    }
    return second
};
