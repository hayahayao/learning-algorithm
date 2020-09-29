/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层次遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return []
    let result: number[][] = []
    let queue: any[] = []
    let lr = true
    queue.push(root)
    while(queue.length) {
        let list: number[] = []
        const length = queue.length
        for (let i: number = 0; i < length; i++) {
            const node = queue.shift()
            list.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if (lr) {
            result.push(list)
        } else {
            result.push(list.reverse())
        }
        lr = !lr
    }
    return result
};
// @lc code=end

