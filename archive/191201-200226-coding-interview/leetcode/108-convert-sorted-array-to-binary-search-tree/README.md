# 108-将有序数组转换为二叉搜索树

[Leetcode-108.将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)

## 题目描述

将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

```
      0
     / \
   -3   9
   /   /
 -10  5
```

## 解题思路

二叉搜索树：左子树上所有节点的值小于根节点；右子树上所有节点的值大于根节点；左右子树也为二叉搜索树；没有键值相等的节点

则易知，二叉搜索树的中序遍历结果为递增序列

题目给出递增序列，要进行这一特性的逆过程，即将其构造为二叉搜索树

可以通过递归实现：

1. 选取中点作为根节点
2. 构造该节点的左子树
3. 构造该节点的右子树

## 实现

```javascript
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null
    let mid = nums.length >> 1
    let node = new TreeNode(nums[mid])
    let left = nums.slice(0, mid)
    let right = nums.slice(mid+1, nums.length)
    node.left = sortedArrayToBST(left)
    node.right = sortedArrayToBST(right)
    return node
};
```

