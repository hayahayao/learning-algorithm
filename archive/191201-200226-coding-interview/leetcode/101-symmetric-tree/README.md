# 101-对称二叉树

[Leetcode-101.对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

## 题目描述

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```


但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```
    1
   / \
  2   2
   \   \
   3    3
```


说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

## 解题思路

**1：递归**

如果一个树的左子树和右子树镜像对称，那么这个树是对称的

而两个树如果互为镜像，则需满足：

1. 它们的两个根节点具有相同的值
2. 每个树的右子树都与另一个树的左子树镜像对称

时间复杂度 O(n)，遍历整个输入树一次

空间复杂度最糟情况为 O(n)，在树是线性的情况下

**2：迭代**

基本流程与[100：相同的树](../100-same-tree/README.md)相同，用一个队列实现

注意加入队列的顺序

## 实现

**1：递归**

```javascript
var isSymmetric = function(root) {
    return isMirror(root, root)
};

var isMirror = function(t1, t2) {
    if (!t1 && !t2) return true
    if (!t1 || !t2) return false
    return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
};
```

**2：迭代**

```javascript
var isSymmetric = function(root) {
    if (!root) return true
    if (!check(root.left, root.right)) return false
    let queue = [root.left, root.right]
    while (queue.length) {
        let t1 = queue.shift()
        let t2 = queue.shift()
        if (!check(t1, t2)) return false
        if (!t1 && !t2) continue
        queue.push(t1.left)
        queue.push(t2.right)
        queue.push(t1.right)
        queue.push(t2.left)
    }
    return true
};

var check = function(t1, t2) {
    if (!t1 && !t2) return true
    if (!t1 || !t2) return false
    if (t1.val !== t2.val) return false
    return true
};
```

