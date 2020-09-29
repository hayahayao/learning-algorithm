/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map()
    let curr = head
    while (curr) {
        let node = new Node(curr.val)
        map.set(curr, node)
        curr = curr.next
    }
    curr = head
    while (curr) {
        let node = map.get(curr)
        if (curr.next) node.next = map.get(curr.next)
        node.random = map.get(curr.random)
        curr = curr.next
    }
    return map.get(head)
};
// @lc code=end

