/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
    let fast = head
    let slow = head
    while (fast && fast!.next) {
        fast = fast!.next!.next
        slow = slow!.next
    }
    slow = reverseList(slow)
    while (slow && head) {
        if (head!.val !== slow!.val) return false
        head = head!.next
        slow = slow!.next
    }
    return true
};
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    while (head) {
        let tmp = head.next
        head.next = prev
        prev = head
        head = tmp
    }
    return prev
};
// @lc code=end

