var invertTree = function(root) {
    if (!root) return null;
    
    let tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);

    return root;
};
