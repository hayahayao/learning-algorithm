var deleteNode = function(node) {
    // 把下一个节点的内容复制到需要删除的节点上覆盖原有的内容 再把下一个节点删除
    let next = node.next;
    node.val = next.val;
    node.next = next.next;
    next = null;
};
