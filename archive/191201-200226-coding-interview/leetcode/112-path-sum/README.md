# 112-路径总和

[Leetcode-112.路径总和](https://leetcode-cn.com/problems/path-sum/)

## 题目描述

给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

## 解题思路

**1：迭代dfs**

栈

然后开始迭代：弹出当前元素，如果当前和为目标 sum 并且该节点为叶子节点，则返回 true；如果当前和不为 sum 且该节点非叶子节点，则将当前节点的所有孩子以及对应的剩余和压入栈中

## 实现

````javascript
var hasPathSum = function(root, sum) {
    if (!root) return false
    let stack = []
    stack.push({
        root: root,
        sum: root.val
    })
    while (stack.length) {
        let node = stack.pop()
        if (!node.root.left && !node.root.right) {
            if (node.sum === sum) return true
        }
        if (node.root.left) {
            stack.push({
                root: node.root.left,
                sum: node.sum + node.root.left.val
            })
        }
        if (node.root.right) {
            stack.push({
                root: node.root.right,
                sum: node.sum + node.root.right.val
            })
        }
    }
    return false
};
````

