// 递归
var inorderTraversal = function(root) {
    const res = [];
    function help(node) {
        if (!node) return;
        help(node.left);
        res.push(node.val);
        help(node.right);
    }
    help(root);
    return res;
};

// 迭代
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;
};
