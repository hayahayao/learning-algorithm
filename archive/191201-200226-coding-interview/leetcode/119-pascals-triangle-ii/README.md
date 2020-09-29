# 119-杨辉三角II

[Leetcode-119.杨辉三角II](https://leetcode-cn.com/problems/pascals-triangle-ii/)

## 题目描述

给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

```
输入: 3
输出: [1,3,3,1]
```


进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？

## 解题思路

计算方法和 118 题是一样的，本题主要在优化空间复杂度上

可以通过 [取巧解法：错一位再逐个相加，28ms/12.5MB](https://leetcode-cn.com/problems/pascals-triangle/solution/qu-qiao-jie-fa-cuo-yi-wei-zai-zhu-ge-xiang-jia-28m/) 中所描述的这种取巧解法求解。因为如果不进行变动的话下一行[j] = 上一行[j-1] + 上一行[j]，这样的话如果我们想仅用一个数组实现时就会被覆盖 j-1 位置的值。所以这种解法在数组前加入了一个 0，这样就可以 [j] = [j] + [j+1] 不会被覆盖

## 实现

```javascript
var getRow = function(rowIndex) {
    let r = [1]
    for (let i = 1; i < rowIndex + 1; i++) {
        r.unshift(0)
        for (let j = 0; j < i; j++) {
            r[j] = r[j] + r[j+1]
        }
    }
    return r
};
```

