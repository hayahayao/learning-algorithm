var reverseList = function(head) {
    let pReversedHead = null;
    let pNode = head;
    let pPrev = null;
    while (pNode) {
        let pNext = pNode.next;
        
        if (!pNext) pReversedHead = pNode;

        pNode.next = pPrev;
        pPrev = pNode;
        pNode = pNext;
    }
    return pReversedHead;
};
