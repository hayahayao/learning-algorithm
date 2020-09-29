# 07：重建二叉树

## 题目描述

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

## 解题思路

前序遍历：根左右，中序遍历：左根右

根据这个特点我们可以知道前序遍历序列的第 0 个值就是根节点，对应去中序遍历序列中找到这个值，则就确定下了两个序列中根节点/左子树/右子树的对应部分

例如，我们定义前序序列{1,2,4,7,3,5,6,8} = pre；中序序列{4,7,2,1,5,3,8,6} = vin

则 root = pre[0] = 1，在 vin 中找到 vin[3] = 1 = root

则我们可以知道 pre[0] = root；pre[1-3] = left；pre[4-] = right

​                            vin[0-2] = left；vin[3] = root；vin[4-] = right

而子树们也可以如此向下递归

## 实现

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
}
```

```javascript
function reConstructBinaryTree(pre, vin)
{
    if (!pre.length || !vin.length) {
        return null
    }
    const root = new TreeNode(pre[0])
    for (let i = 0; i < vin.length; i++) {
        if (vin[i] === root.val) {
            root.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i))
            root.right = reConstructBinaryTree(pre.slice(i+1), vin.slice(i+1))
            break
        }
    }
    return root
}
```

