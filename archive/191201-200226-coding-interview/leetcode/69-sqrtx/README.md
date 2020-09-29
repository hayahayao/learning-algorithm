# 69-x的平方根

[Leetcode-69.x的平方根](https://leetcode-cn.com/problems/sqrtx/)

## 题目描述

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

```
输入: 4
输出: 2
```


示例 2:

```
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
```

## 解题思路

**1：暴力枚举**

不说了

**2：二分法**

最直接的思路是 1-n 这个范围，但是可以尝试缩小，由于一般一个数的平方根不会大于  n/2

可以解不等式 `(n/2)^2 >= n`得到：0 1 2 3 例外，只要大于等于 4 的数平方根都不会大于 n/2

二分法的其他细节参看[特别好用的二分查找法模板](https://leetcode-cn.com/problems/search-insert-position/solution/te-bie-hao-yong-de-er-fen-cha-fa-fa-mo-ban-python-/)

**3：牛顿法**

原理参见[牛顿迭代法](https://leetcode-cn.com/problems/sqrtx/solution/niu-dun-die-dai-fa-by-loafer/)

首先随便猜一个近似值 x，然后不断令 x 等于 x 和 a/x 的平均数，不断迭代

## 实现

**2：二分法**

```javascript
var mySqrt = function(x) {
    if (x === 0) return 0
    let left = 1
    let right = Math.floor(x/2)
    while (left < right) {
        let mid = (left + right) >> 1
        let square = mid * mid
        if (square > x) right = mid - 1
        else left = mid
    }
    return left
};
```

**3：牛顿法**

```javascript
var mySqrt = function(x) {
    if (x === 0) return 0
    let cur = 1
    while (true) {
        let pre = cur
        cur = (cur + x / cur) / 2
        if (Math.abs(cur - pre) < 1e-6) return Math.floor(cur)
    }
};
```

