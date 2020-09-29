# 70-爬楼梯

[Leetcode-70.爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

## 题目描述

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

```
   输入： 2
   输出： 2
   解释： 有两种方法可以爬到楼顶。
   
   1.  1 阶 + 1 阶
   2.  2 阶
```

 示例 2：
```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。

1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

## 解题思路

**1：暴力递归**

定义`climb_stairs(i, n)`返回爬到 i 阶目标为 n 阶时的方法数，则有

`climb_stairs(i, n) = climb_stairs(i+1, n) + climb_stairs(i+2, n)`

时间复杂度：O(2^n)（树形递归大小为2^n）；空间复杂度 O(n)（递归树的深度达到n）

（实测这种方法在 leetcode 直接爆栈）

**2：记忆化递归**

用一个 memo 数组保存结果

时间复杂度会降到 O(n)，树形递归大小为 n；空间复杂度还是 O(n)

**3：动态规划**

令`dp[i]`表示能到达第`i`阶的方法总数，则有

`dp[i] = dp[i-1] + dp[i-2]`

初始：`dp[1] = 1; dp[2] = 2`

时间复杂度 O(n)；空间复杂度 O(n)

**4：斐波那契数**

在方法 3 中我们使用 dp 数组，容易看出 dp[i] 其实就是第 i 个斐波那契数

`Fib(n) = Fib(n-1) + Fib(n-2)`

时间复杂度 O(n)，空间复杂度 O(1)

**5：Binets 方法**

**6：斐波那契公式**

这两种参考[官方题解](https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode/)

## 实现

**1：暴力递归**

```javascript
var climbStairs = function(n) {
    return climb_stairs(0, n)
};
var climb_stairs = function(i, n) {
    if (i > n) return 0
    if (i === n) return 1
    return climb_stairs(i+1, n) + climb_stairs(i+2, n)
}
```

**2：记忆化递归**

```javascript
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
```

**3：动态规划**

```javascript
var climbStairs = function(n) {
    let dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
```

**4：斐波那契数**

```javascript
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
```

