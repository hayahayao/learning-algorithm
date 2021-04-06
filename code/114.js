var flatten = function(root) {
    // 后序遍历框架
    if (!root) return null;

    // 展开左子树右子树
    let left = flatten(root.left);
    let right = flatten(root.right);

    // 处理根节点
    // 先将左子树接到右边
    root.left = null;
    root.right = left;
    // 再将右子树接到左子树下面
    let node = root;
    while (node.right) node = node.right;
    node.right = right;

    return root;
};
