// 递归
var postorderTraversal = function(root) {
    const res = [];
    function help(node) {
        if (!node) return;
        help(node.left);
        help(node.right);
        res.push(node.val);
    }
    help(root);
    return res;
};

// 迭代
var postorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let cur = root;
    let prev = null; // 用来记录上一节点
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        // 遍历完左子树和右子树 p 都会回到根节点
        cur = stack[stack.length - 1];
        if (!cur.right || cur.right === prev) {
            // 遍历完右子树时，需要返回上一层
            prev = stack.pop();
            res.push(prev.val);
            cur = null;
        } else {
            // 遍历完左子树时需要遍历右子树
            cur = cur.right;
        }
    }
    return res;
};
