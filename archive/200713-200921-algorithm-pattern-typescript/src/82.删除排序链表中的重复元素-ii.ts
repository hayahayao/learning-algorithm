/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return head
    const dummy: ListNode = new ListNode(-1)
    let tail: ListNode = dummy
    let l: any = head
    let r: any = head
    while (l) {
        while (r && r.val === l.val) r = r.next
        if (l.next === r) {
            tail.next = l
            tail = l
            tail.next = null
        }
        l = r
    }
    return dummy.next
};
// @lc code=end

