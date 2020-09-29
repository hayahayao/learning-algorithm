/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy: any = new ListNode(-1)
    let currentHead: any = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            currentHead.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            currentHead.next = new ListNode(l2.val)
            l2 = l2.next
        }
        currentHead = currentHead.next
    }
    if (l1) currentHead.next = l1
    if (l2) currentHead.next = l2
    return dummy.next
};
// @lc code=end

