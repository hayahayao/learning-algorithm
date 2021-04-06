var connect = function(root) {
    // 辅助函数
    var help = function(left, right) {
        // 前序遍历
        if (!left || !right) return;

        left.next = right;
        help(left.left, left.right);
        help(right.left, right.right);
        help(left.right, right.left); // 注意这里，需要连接跨父节点的两个节点

        return;
    }

    if (!root) return null;
    help(root.left, root.right);
    return root;
};
