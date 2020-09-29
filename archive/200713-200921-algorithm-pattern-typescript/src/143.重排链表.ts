/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return
    const dummy: any = new ListNode(-1, head)
    let fast: any = head
    let slow: any = head

    // find middle
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }

    // 断开
    let right = slow.next
    slow.next = null
    let left = dummy.next

    // reverse
    right = reverseList(right)

    // concat
    while (left && right) {
        let lNext = left.next
        let rNext = right.next
        right.next = left.next
        left.next = right
        left = lNext
        right = rNext
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    while (head) {
        let tmp = head.next
        head.next = prev
        prev = head
        head = tmp
    }
    return prev
}
// @lc code=end