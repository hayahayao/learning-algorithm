var deleteNode = function(head, val) {
    // 原著题目参见 leetcode237
    // 本题与原著参数条件不同 只能用常规方式删除
    const dummy = new ListNode(-1, head);
    let node = dummy;
    while (node) {
        let next = node.next;
        if (next && next.val === val) {
            node.next = next.next;
        }
        node = node.next;
    }
    return dummy.next;
};
