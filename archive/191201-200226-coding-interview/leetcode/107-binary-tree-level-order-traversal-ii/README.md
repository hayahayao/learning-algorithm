# 107-二叉树的层次遍历II

[Leetcode-107.二叉树的层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

## 题目描述

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```


返回其自底向上的层次遍历为：

```
[
  [15,7],
  [9,20],
  [3]
]
```

## 解题思路

对照题目[102-二叉树的层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

有两种通用的遍历树的策略：DFS 和 BFS

**1：递归**

递归前序遍历

首先确认树非空，然后调用递归函数 `helper(node, level)`，参数是当前节点和节点的层次。程序过程如下：

- 输出列表称为 `levels`，当前最高层数就是列表的长度 `levels.length`。比较访问节点所在的层次 `level`和 当前最高层次 `levels.length` 的大小，如果前者更大就向 `levels` 添加一个空列表
- 将当前节点插入到对应层的列表 `levels[level]` 中
- 递归非空的孩子节点 `helper(node.left / node.right, level + 1)`
- 最后将结果 `levels` 反转输出

**2：迭代**

用队列实现 BFS

- 初始化队列只包含一个节点 `root` 和层次编号 `level = 0`
- 当队列非空的时候：
  - 在输出结果 `levels` 中插入一个空列表，开始当前层的算法
  - 计算当前层有多少个元素，即队列的长度
  - 将这些元素从队列中弹出，并加入 `levels` 当前层的空列表中
  - 将他们的孩子作为下一层压入队列中
  - 进入下一层 `level++`

## 实现

**1：递归**

```javascript
var levelOrderBottom = function(root) {
    let levels = []
    if (!root) return levels
    
    let helper = function(node, level) {
        if (levels.length === level) {
            levels.push([])
        }
        levels[level].push(node.val)
        if (node.left) helper(node.left, level + 1)
        if (node.right) helper(node.right, level + 1)
    }
    
    helper(root, 0)
    return levels.reverse()
};
```

**2：迭代**

```javascript
var levelOrderBottom = function(root) {
    let levels = []
    if (!root) return levels
    
    let level = 0
    let queue = [root]
    
    while (queue.length) {
        levels.push([])
        let levelNum = queue.length
        for (let i = 0; i < levelNum; i++) {
            let node =  queue.shift()
            levels[level].push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        level++
    }
    
    return levels.reverse()
};
```

