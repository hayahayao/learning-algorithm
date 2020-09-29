# 111-二叉树的最小深度

[Leetcode-111.二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

## 题目描述

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```


返回它的最小深度  2.

## 解题思路

**1：递归**

叶子节点：左孩子和右孩子都为 null

当 root 节点左右孩子都为空时说明本身为叶子节点，返回 1

当左右有一个为空时，返回不为空的那个孩子节点的深度

当左右都不为空时返回左右较小深度的节点值

**2：迭代**

用栈将上述的递归变为迭代

对于每个节点 DFS，在访问到叶子节点时更新最小深度

**3：BFS 迭代**

DFS 为了保证能够找到最小深度，会访问所有节点

可以用 BFS 进行优化，按照树的层次进行迭代

## 实现

**1：递归**

```javascript
var minDepth = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    let min = Number.MAX_VALUE
    if (root.left) min = Math.min(minDepth(root.left), min)
    if (root.right) min = Math.min(minDepth(root.right), min)
    return min + 1
};
```

**2：迭代**

```javascript
var minDepth = function(root) {
    if (!root) return 0
    let stack = []
    stack.push({
        root: root,
        depth: 1
    })
    let min = Number.MAX_VALUE
    while (stack.length) {
        let cur = stack.pop()
        let root = cur.root
        let depth = cur.depth
        if (!root.left && !root.right) {
            min = Math.min(min, depth)
        }
        if (root.left) {
            stack.push({
                root: root.left,
                depth: depth + 1
            })
        }
        if (root.right) {
            stack.push({
                root: root.right,
                depth: depth + 1
            })
        }
    }
    return min
};
```

**3：BFS 迭代**

```javascript
var minDepth = function(root) {
    if (!root) return 0
    let queue = []
    queue.push({
        root: root,
        depth: 1
    })
    let depth = 0
    while (queue.length) {
        let cur = queue.shift()
        root = cur.root
        depth = cur.depth
        if (!root.left && !root.right) {
            break
        }
        if (root.left) {
            queue.push({
                root: root.left,
                depth: depth + 1
            })
        }
        if (root.right) {
            queue.push({
                root: root.right,
                depth: depth + 1
            })
        }
    }
    return depth
};
```

