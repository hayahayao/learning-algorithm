/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) return null
    const dummy1: any = new ListNode(-1, head)
    const dummy2: any = new ListNode(-1, null)
    let prev1: any = dummy1
    let current1: any = head
    let current2: any = dummy2
    while (current1) {
        if (current1.val >= x) {
            current2.next = new ListNode(current1.val)
            current2 = current2.next
            prev1.next = current1.next
            current1 = current1.next
        } else {
            prev1 = current1
            current1 = current1.next
        }
    }
    prev1.next = dummy2.next
    return dummy1.next
};
// @lc code=end

