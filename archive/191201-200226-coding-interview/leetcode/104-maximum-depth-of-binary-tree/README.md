# 104-二叉树的最大深度

[Leetcode-104.二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

## 题目描述

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

```
    3
   / \
  9  20
    /  \
   15   7
```


返回它的最大深度 3 。

## 解题思路

**1：迭代**

用栈实现dfs

**2：递归**

也是dfs

## 实现

**1：迭代**

```javascript
var maxDepth = function(root) {
    let stack = []
    if (root) stack.push({
        currentDepth: 1, 
        root: root
    })
    let depth = 0
    while (stack.length) {
        let {currentDepth, root} = stack.pop() 
        if (root) {
            depth = Math.max(currentDepth, depth)
            stack.push({
                currentDepth: currentDepth + 1, 
                root:root.left
            })
            stack.push({
                currentDepth: currentDepth + 1, 
                root:root.right
            })
        }
    }
    return depth
};
```

**2：递归**

```javascript
var maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
```

