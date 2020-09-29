var isBalanced = function(root) {
    if (!root) return true
    if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
};

var depth = function(root) {
    if (!root) return 0
    return 1+Math.max(depth(root.left), depth(root.right))
};


var isBalanced = function(root) {
    return depth(root) !== -1
};

var depth = function(root) {
    if (!root) return 0
    let left = depth(root.left)
    if (left === -1) return -1
    let right = depth(root.right)
    if (right === -1) return -1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
};
