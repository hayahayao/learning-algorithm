# 7-整数反转

[Leetcode-7.整数反转](https://leetcode-cn.com/problems/reverse-integer/)

## 题目描述

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

```
输入: 123
输出: 321
```

示例 2:

```
输入: -123
输出: -321
```

示例 3:

```
输入: 120
输出: 21
```


注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

## 解题思路

重复进行取模操作

```javascript
// pop operation:
pop = x % 10
x /= 10

// push operation:
rev = rev * 10 + pop
```

**注意：**

- js 里面的除得到的是浮点数，所以需要进行取整操作（取整时还要注意正负）
- 每次 push 前需要检查溢出：（正数情况）
  - 核心是将操作前的 rev 和 INTMAX / 10 进行比较，因为如果操作后溢出则一定有 `rev >= INTMAX / 10`
  - 如果 `rev > INTMAX / 10`那么操作后一定会溢出
  - 如果 `rev === INTMAX / 10`那么只要 `pop > 7`就会溢出（7是2^31的个位数）

## 实现

```javascript
var reverse = function(x) {
    let rev = 0
    let INTMAX = Math.pow(2, 31) - 1
    let INTMIN = -Math.pow(2, 31)
    while (x) {
        let pop = x % 10
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
        if (rev > INTMAX / 10 || (rev === INTMAX / 10 && pop > 7)) return 0
        if (rev < INTMIN / 10 || (rev === INTMIN / 10 && pop < -8)) return 0
        rev = rev * 10 + pop
    }
    return rev
};
```

