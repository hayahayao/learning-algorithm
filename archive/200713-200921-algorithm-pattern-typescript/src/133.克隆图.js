/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// var cloneGraph = function(node) {
//     if (!node) return null
//     let map = new Map()
//     let stack = []
//     let stackCopy = []
//     const result = new Node(node.val)
//     stack.push(node)
//     stackCopy.push(result)
//     while (stack.length) {
//         const cur = stack.pop()
//         const curCopy = stackCopy.pop()
//         map.set(cur, curCopy)
//         for (let i = 0; i < cur.neighbors.length; i++) {
//             const neighbor = cur.neighbors[i]
//             let neighborCopy = map.get(neighbor)
//             if (neighborCopy) {
//                 curCopy.neighbors[i] = neighborCopy
//             } else {
//                 neighborCopy = new Node(neighbor.val)
//                 curCopy.neighbors[i] = neighborCopy
//                 stack.push(neighbor)
//                 stackCopy.push(neighborCopy)
//                 map.set(neighbor, neighborCopy)
//             }
//         }
//     }
//     return result
// };

// 递归版
var cloneGraph = function(node) {
    const visited = new Map()
    return clone(node)

    function clone(n) {
        if (!n) return n
        if (!visited.has(n)) {
            const newNode = new Node(n.val, n.neighbors)
            visited.set(n, newNode)
            newNode.neighbors = newNode.neighbors.map(clone)
        }
        return visited.get(n)
    }
}

// @lc code=end

