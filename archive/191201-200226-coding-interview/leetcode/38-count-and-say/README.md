# 38-报数

[Leetcode-38.报数](https://leetcode-cn.com/problems/count-and-say/)

## 题目描述

报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

```
1.  1

2.  11

3.  21

4.  1211

5.  111221
```

```
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
```

给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

注意：整数顺序将表示为一个字符串。

 

示例 1:

```
输入: 1
输出: "1"
```


示例 2:

```
输入: 4
输出: "1211"
```

## 解题思路

这个题主要就是理解题目在说什么，可以这样理解：

当前的字符串其实是在对上一个字符串进行描述，比如上一个是"11122"，那当前的描述就是“上一个字符串里有3个1和2个2”，也就是"3122"

因此可以用递归的思路解决，没什么好讲的这个题也比较弱智，就，随便看看吧（x

## 实现

```javascript
var countAndSay = function(n) {
    if (n === 1) return '1'
    else {
        let str = countAndSay(n-1)
        let res = ''
        let cnt = 0
        let last = str[0]
        for (let i = 0; i < str.length; i++) {
            if (str[i] === last) {
                cnt++
            } else {
                res = res + cnt + last
                cnt = 1
                last = str[i]
            }
        }
        res = res + cnt + last
        return res
    }
};
```

