# 28-实现strStr()

[Leetcode-28.实现strStr()](https://leetcode-cn.com/problems/implement-strstr/)

## 题目描述

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

```
输入: haystack = "hello", needle = "ll"
输出: 2
```


示例 2:

```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```


说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

## 解题思路

字符串匹配算法

### KMP

看这个[解释](https://www.zhihu.com/question/21923021/answer/281346746)

### Sunday

看这个[解释](https://blog.csdn.net/q547550831/article/details/51860017)

## 实现

### KMP

```javascript
var strStr = function(haystack, needle) {
    let next = getNext(needle)
    let i = 0
    let j = 0
    while (i < haystack.length && j < needle.length) {
        if (j === -1 || haystack[i] === needle[j]) {
            i++
            j++
        } else {
            j = next[j]
        }
    }
    if (j == needle.length) return i - j
    else return -1
};

var getNext = function(str) {
    let next = [-1]
    let i = 0
    let j = -1
    while (i < str.length) {
        if (j === -1 || str[i] === str[j]) {
            i++
            j++
            next[i] = j
        } else {
            j = next[j]
        }
    }
    return next
};
```

