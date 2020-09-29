/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
    if (m === n) return head
    let dummy: ListNode = new ListNode(-1)
    dummy.next = head
    let a: any = dummy
    let d: any = dummy
    for (let i: number = 0; i < m - 1; i++) {
        a = a.next
    }
    for (let j: number = 0; j < n; j++) {
        d = d.next
    }
    let b: any = a.next
    let c: any = d.next
    for (let p: any = b, q: any = p.next; q !== c;) {
        let o: any = q.next
        q.next = p
        p = q
        q = o
    }
    a.next = d
    b.next = c
    return dummy.next
};
// @lc code=end

