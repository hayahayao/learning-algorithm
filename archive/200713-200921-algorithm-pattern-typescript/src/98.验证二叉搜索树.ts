/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
    return helper(root, -Infinity, +Infinity)
};

// 返回以 root 为根的树其节点是否都在 (lower, upper) 范围内
function helper(root: TreeNode | null, lower: number, upper: number): boolean {
    if (!root) return true
    if (root.val <= lower || root.val >= upper) return false
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}
// @lc code=end

