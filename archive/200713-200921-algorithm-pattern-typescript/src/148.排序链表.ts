/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
    return mergeSortRec(head)
};
function mergeSortRec(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
    let middle: any = middleNode(head)
    let tmp: any = middle.next
    middle.next = null
    let left: any = mergeSortRec(head)
    let right: any = mergeSortRec(tmp)
    return mergeTwoLists(left, right)
}
function middleNode(head: ListNode | null): ListNode | null {
    let fast: any = head
    let slow: any = head
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}
function mergeTwoLists(left: ListNode | null, right: ListNode | null): ListNode | null {
    const dummy: any = new ListNode(-1)
    let current: any = dummy
    while (left && right) {
        if (left.val < right.val) {
            current.next = new ListNode(left.val)
            left = left.next
        } else {
            current.next = new ListNode(right.val)
            right = right.next
        }
        current = current.next
    }
    current.next = left || right 
    return dummy.next
}
// @lc code=end

