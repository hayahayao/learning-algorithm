// 递归
var preorderTraversal = function(root) {
    const res = [];
    function help(node) {
        if (!node) return;
        res.push(node.val);
        help(node.left);
        help(node.right);
    }
    help(root);
    return res;
};

// 迭代
var preorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            res.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        cur = cur.right;
    }
    return res;
};
