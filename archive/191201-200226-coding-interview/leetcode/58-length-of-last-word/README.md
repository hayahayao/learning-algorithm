# 58-最后一个单词的长度

[Leetcode-58.最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)

## 题目描述

给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

示例:

```
输入: "Hello World"
输出: 5
```

## 解题思路

主要就是考虑字符串最后几位是空格的情况，也就是要做 trim()

## 实现

```javascript
var lengthOfLastWord = function(s) {
    if (!s.length) return 0
    let len = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') len++
        else if (len) return len
    }
    return len
};
```

**调用库函数的话：**

```javascript
var lengthOfLastWord = function(s) {
    if (!s.length) return 0
    let strs = s.trim().split(' ')
    return strs.pop().length
};
```

