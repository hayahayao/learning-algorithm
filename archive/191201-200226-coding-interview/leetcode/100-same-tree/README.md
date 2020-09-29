# 100-相同的树

[Leetcode-100.相同的树](https://leetcode-cn.com/problems/same-tree/)

## 题目描述

给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

```
输入:       1         1
          / \       / \
         2   3     2   3

     [1,2,3],   [1,2,3]

输出: true
```


示例 2:

```
输入:      1          1
          /           \
         2             2

     [1,2],     [1,null,2]

输出: false
```


示例 3:

```
输入:       1         1
          / \       / \
         2   1     1   2

     [1,2,1],   [1,1,2]

输出: false
```

## 解题思路

**1：递归**

时间复杂度：O(n)，其中 n 是树的结点数，因为每个节点都访问一次

空间复杂度：最优情况（完全平衡二叉树）时为 O(log(n))，最坏情况（完全不平衡二叉树）时为 O(n)，用于维护递归栈

**2：迭代**

用一个队列实现

## 实现

**1：递归**

```javascript
var isSameTree = function(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```

**2：迭代**

```javascript
var isSameTree = function(p, q) {
    let deq = [p, q]
    while (deq.length) {
        p = deq.shift()
        q = deq.shift()
        if (!check(p, q)) return false
        if (!p && !q) continue
        deq.push(p.left)
        deq.push(q.left)
        deq.push(p.right)
        deq.push(q.right)
    }
    return true
};

var check = function(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return true
};
```

