

# 05：替换空格

## 题目描述

请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

## 解题思路

**原书思路：**

在原有字符串上进行替换，且时间复杂度为 O(n)

首先遍历一次字符串，统计出空格的数量，由此计算出替换之后的字符串的总长度，计算出长度后就可以在原字符串后面留出该增加的空间

之后用两个指针 P1 和 P2，分别指向原始字符串的末尾和替换之后字符串的末尾

从后向前移动blabla

由于所有字符都只需要复制（移动）一次，因此时间复杂度是 O(n)

**注意：**

在 JavaScript 中的字符串是不可变的，因此对字符串索引赋值/字符串自身方法都不会修改原有字符串

因此 JS 里没必要也无法实现原书所给的算法，只要简单遍历复制或使用正则表达式实现就可以

## 实现

[newcoder](https://www.nowcoder.com/profile/670097550/codeBookDetail?submissionId=61956910)

```javascript
function replaceSpace(str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            res += '%20'
        } else {
            res += str[i]
        }
    }
    return res
}
```

[newcoder](https://www.nowcoder.com/profile/670097550/codeBookDetail?submissionId=61958483)

```javascript
function replaceSpace(str) {
    return str.replace(/\s/g, '%20')
}
```

## 参考

`String.prototype.(regexp|substr, newSubStr|function)`替换字符串

RegExp对象语法：

```javascript
/pattern/flags
new RegExp(pattern [, flags])
RegExp(pattern [, flags])
```