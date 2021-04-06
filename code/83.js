var deleteDuplicates = function(head) {
    const dummy = new ListNode(-1, head);
    let pPreNode = null;
    let pNode = head;
    while (pNode) {
        let pNext = pNode.next;
        const needDelete = pNext && pNext.val === pNode.val;
        if (needDelete) {
            // 删除pNode之后所有重复的
            let pToBeDel = pNode;
            while (pToBeDel && pToBeDel.val === pNode.val) {
                pNext = pToBeDel.next;
                pToBeDel = pNext;
            }
            if (!pPreNode) { // 删除的节点位于头部
                dummy.next = pNode;
            }
            pNode.next = pNext;
        }
        pPreNode = pNode;
        pNode = pNode.next;
    }
    return dummy.next;
};
