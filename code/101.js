var isSymmetric = function(root) {
    function help(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val === right.val) {
            return (help(left.left, right.right) && help(left.right, right.left));
        }
        return false;
    }
    if (!root) return false;
    return help(root.left, root.right);
};
