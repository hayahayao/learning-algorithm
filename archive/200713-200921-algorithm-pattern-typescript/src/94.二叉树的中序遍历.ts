/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []
    let result: number[] = []
    let stack: TreeNode[] = []
    while (root || stack.length) {
        while (root) {
            stack.push(root as TreeNode)
            root = root.left
        }
        const node = stack.pop() as TreeNode
        result.push(node.val)
        root = node.right
    }
    return result
};
// @lc code=end

