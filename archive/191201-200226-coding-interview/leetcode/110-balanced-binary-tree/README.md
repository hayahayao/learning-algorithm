# 110-平衡二叉树

[Leetcode-110.平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)

## 题目描述

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

```
    3
   / \
  9  20
    /  \
   15   7
```


返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

 

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```


返回 false 。

## 解题思路

**1：自顶向下（暴力法）**

构造一个获取当前节点最大深度的办法 depth()

之后自顶向下 DFS，以每个节点为根节点，计算左右子树高度差判断是否满足平衡二叉树性质

由于该方法需要进行两层递归，最差时间复杂度 O(n ^ 2)，产生大量重复的节点访问和计算

**2：自底向上（提前阻断）**

对二叉树做 DFS，递归过程中：

- 终止条件：当 DFS 越过叶子结点时，返回高度 0；
- 返回值：
  - 自顶向下，返回以每个节点 root 为根节点的子树的最大高度（`max(left, right) + 1`）
  - 当我们发现有一例左右子树高度差 > 1的情况，代表此树不是平衡树，返回 -1
- 当发现不是平衡树时，后面的高度计算都没有意义了，因此一路返回 -1，避免后续多余计算

最差情况是对树做一遍完整 DFS，时间复杂度为 O(n)

## 实现

**1：自顶向下**

```javascript
var isBalanced = function(root) {
    if (!root) return true
    if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
};

var depth = function(root) {
    if (!root) return 0
    return 1+Math.max(depth(root.left), depth(root.right))
};
```

**2：自底向上**

```javascript
var isBalanced = function(root) {
    return depth(root) !== -1
};

var depth = function(root) {
    if (!root) return 0
    let left = depth(root.left)
    if (left === -1) return -1
    let right = depth(root.right)
    if (right === -1) return -1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
};
```

