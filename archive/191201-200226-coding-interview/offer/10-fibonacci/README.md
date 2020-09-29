# 10：斐波那契数列

## 题目描述

大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。

n<=39

## 解题思路

根据斐波那契数列的定义，

f(n) = 0, n=0

​          1, n=1

​          f(n-1) + f(n-2), n>1

可以直接写出递归解法，但是这样的递归解法会导致很多重复计算，优化的方法一般有两种：

- 计算过程中将已经得到的中间项保存起来
- 从下往上计算

本题我们采用从下往上计算的方法，根据 f(0) 和 f(1) 算出 f(2)，再根据 f(1) 和 f(2) 算出 f(3)...这样递推

## 实现

```javascript
function Fibonacci(n)
{
    // write code here
}
```

```javascript
function Fibonacci(n)
{
    let result = [0, 1]
    if (n < 2) return result[n]
    let fibNMinusOne = 1
    let fibNMinusTwo = 0
    let fibN = 0
    for (let i = 2; i <= n; i++) {
        fibN = fibNMinusOne + fibNMinusTwo
        fibNMinusTwo = fibNMinusOne
        fibNMinusOne = fibN
    }
    return fibN
}
```

## 扩展

**青蛙跳台阶问题：一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个n级的台阶总共有多少种跳法。**

本质就是斐波那契数列，把 n 级台阶的跳法看成 f(n)

f(1) = 1

f(2) = 2

f(n) = f(n-1) + f(n-2)

**变形：青蛙一次可以跳上1级，也可以跳上2级......也可以跳上n级，此时该青蛙跳上一个n级的台阶总共有多少种跳法。**

结论：用数学归纳法可以证明 f(n) = 2^(n-1)

