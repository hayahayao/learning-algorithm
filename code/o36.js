var treeToDoublyList = function(root) {
    if (!root) return null;

    var convert = function(pNode) {
        if (!pNode) return;
        let pCurrent = pNode;

        // 中序遍历
        if (pCurrent.left) convert(pCurrent.left);

        // current根节点需要和左子树的最大节点&右子树的最小节点相连
        // 此时左子树已经转换好了 最后一个节点就是最大节点
        pCurrent.left = pLastNodeInList;
        if (pLastNodeInList) pLastNodeInList.right = pCurrent;

        // 现在最后一个节点是根节点了
        pLastNodeInList = pCurrent;
        if (pCurrent.right) convert(pCurrent.right);
    };

    let pLastNodeInList = null; // 记录链表的最后一个节点
    convert(root);

    // 返回头节点
    let pHeadOfList = pLastNodeInList;
    while (pHeadOfList && pHeadOfList.left) {
        pHeadOfList = pHeadOfList.left;
    }
    // 题目要求环状
    pLastNodeInList.right = pHeadOfList;
    pHeadOfList.left = pLastNodeInList;
    return pHeadOfList;
};
