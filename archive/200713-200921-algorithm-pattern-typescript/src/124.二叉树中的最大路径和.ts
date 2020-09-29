/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

function maxPathSum(root: TreeNode | null): number {
    let max = Number.MIN_SAFE_INTEGER
    const dfs = (root: TreeNode | null): number => {
        if (!root) return 0
        const left = Math.max(0, dfs(root.left))
        const right = Math.max(0, dfs(root.right))
        max = Math.max(max, root.val + left + right)
        return root.val + Math.max(left, right)
    }
    dfs(root)
    return max
}
// @lc code=end

