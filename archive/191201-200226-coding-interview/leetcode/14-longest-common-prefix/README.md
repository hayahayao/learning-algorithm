# 14-最长公共前缀

[Leetcode-14.最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)

## 题目描述

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

```
输入: ["flower","flow","flight"]
输出: "fl"
```


示例 2:

```
输入: ["dog","racecar","car"]
输出: ""
```

解释: 输入不存在公共前缀。

说明:

所有输入只包含小写字母 a-z 。

## 解题思路

**1：水平扫描**

我们定义LCP表示最长公共前缀，则可以基于 `LCP(s1, ..., sn) = LCP(sn, LCP(sn-1, ...LCP(s1, s2)))

先求 s1 s2 的LCP，再求 s3 和之前那个LCP的LCP......

**2：垂直扫描**

垂直记录每个字符串的同样一位，如果都相同就记录下来进行下一位...直到不同

**3：分治**

不断一分为二，最后到底就是两个字符串的LCP

## 实现

先写**垂直扫描**的（为了图省事第一层循环直接取的 strs[0] 的长度，其实可以再加一步在所有 str 中找出最短的）

```javascript
var longestCommonPrefix = function(strs) {
    if (strs.length) {
        let res = ''
        for (let i = 0; i < strs[0].length; i++) {
            let cur = strs[0][i]
            for (let j = 0; j < strs.length; j++) {
                if (strs[j][i] !== cur) {
                    return res
                }
                if (j === strs.length - 1) {
                    res += cur
                }
            }
        }
        return res
    }
    return ''
};
```

在[官方题解](https://leetcode-cn.com/problems/longest-common-prefix/solution/zui-chang-gong-gong-qian-zhui-by-leetcode/)里，对**水平扫描**给出了一个巧妙利用 `indexOf()`方法的实现 

```javascript
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix)) {
            prefix = prefix.slice(0, prefix.length - 1)
            if (!prefix.length) return ''
        }
    }
    return prefix
};
```

