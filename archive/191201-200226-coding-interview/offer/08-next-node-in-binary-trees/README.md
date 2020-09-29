# 08：二叉树的下一个节点

## 题目描述

给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

## 解题思路

中序遍历：左根右

分情况讨论：

- 如果一个节点有右子树，那么它的下一个节点就是它的右子树中的最左节点。即从右子节点出发一直沿着指向左子节点的指针走到头
- 否则，如果节点没有右子树，但是其父节点的左子节点，则下一个节点就是它的父节点
- 否则，如果节点没有右子树，又是其父节点的右子节点，则需要沿着指向父节点的指针一直向上，直到找到一个是其父节点的左子节点的节点，该节点为我们要找的下一个节点

在实现上，后两种情况可以合并起来，具体参考下面的实现

## 实现

```javascript
/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
}
```

注意 `TreeLinkNode`结构中的 `next` 实际上是指向 parent 的指针

```javascript
function GetNext(pNode)
{
    if (!pNode) return null
    let next = null
    
    // 如果有右子树，下一个节点为它的右子树中的最左节点
    if (pNode.right) {
        let right = pNode.right
        while (right.left) {
            right = right.left
        }
        next = right
    } 
    // 其他两种情况
    else if (pNode.next) {
        let current = pNode
        let parent = pNode.next
        while (parent && current === parent.right) {
            current = parent
            parent = parent.next
        }
        next = parent
    } 
    return next
}
```

