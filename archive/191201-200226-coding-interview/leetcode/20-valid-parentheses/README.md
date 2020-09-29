# 20-有效的括号

[Leetcode-20.有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

## 题目描述

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

示例 1:

```
输入: "()"
输出: true
```


示例 2:

```
输入: "()[]{}"
输出: true
```


示例 3:

```
输入: "(]"
输出: false
```


示例 4:

```
输入: "([)]"
输出: false
```


示例 5:

```
输入: "{[]}"
输出: true
```

## 解题思路

总之就是用栈，没什么好讲的

几点优化：

- 遇到左括号入栈，右括号就和 pop 比较，如果不匹配直接就提前返回
- 边界的处理：
  - 栈空情况 pop 会返回 undefined，没问题
  - 如果字符串以左括号结尾，则会走完循环不会返回，所以最后还要判断一下栈的长度

## 实现

```javascript
var isValid = function(s) {
    if (!s.length) return true
    let stack = []
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < s.length; i++) {
        if (Object.values(map).includes(s[i])) stack.push(s[i])
        else if (stack.pop() !== map[s[i]]) return false
    }
    if (stack.length) return false
    return true
};
```

