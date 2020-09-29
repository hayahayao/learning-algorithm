# 118-杨辉三角

[Leetcode-118.杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

## 题目描述

给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## 解题思路

本质是动态规划，基于前一行来构造下一行

给定上一行，下一行头尾都置1，然后剩下的第 j 个位 = 上一行的第 j-1 个和第 j 个的和

时间复杂度 O(numRows ^ 2)

空间复杂度 O(numRows ^ 2)

## 实现

```javascript
var generate = function(numRows) {
    if (!numRows) return []
    let res = []
    for (let i = 1; i <= numRows; i++) {
        res[i-1] = []
        for (let j = 0; j < i; j++) {
            if (i === 1) {
                res[i-1].push(1)
                break
            } else {
                if (j === 0) res[i-1].push(1)
                else if (j === i-1) res[i-1].push(1)
                else {
                    res[i-1].push(res[i-2][j]+res[i-2][j-1])
                }
            }
        }
    }
    return res
};
```

