var copyRandomList = function(head) {
    // 复制每个节点 并将复制后的节点放在原节点的后面
    const cloneNodes = () => {
        let pNode = head;
        while (pNode) {
            const pCloned = new Node(pNode.val, pNode.next, null);
            pNode.next = pCloned;
            pNode = pCloned.next;
        }
    }
    // 设置复制出来的节点的random
    // 假设原始链表上的N的random指向节点S 则其复制出来的N'（即N.next）指向的S'就是S.next
    const connectRandomNodes = () => {
        let pNode = head;
        while (pNode) {
            const pCloned = pNode.next;
            if (pNode.random) {
                pCloned.random = pNode.random.next;
            }
            pNode = pCloned.next;
        }
    }
    // 把这个长链表拆分成两个链表
    const reconnectNodes = () => {
        let pNode = head;
        let pClonedHead = null;
        let pClonedNode = null;
        if (pNode) {
            pClonedHead = pNode.next;
            pClonedNode = pNode.next;
            pNode.next = pClonedNode.next;
            pNode = pNode.next;
        }
        while (pNode) {
            pClonedNode.next = pNode.next;
            pClonedNode = pClonedNode.next;
            pNode.next = pClonedNode.next;
            pNode = pNode.next;
        }
        return pClonedHead;
    }

    cloneNodes();
    connectRandomNodes();
    return reconnectNodes();
};
