var verifyPostorder = function(postorder) {
    if (!postorder.length) return true;

    // 根节点是最后一个数字
    const length = postorder.length;
    const root = postorder[length - 1];

    // 因为左子树节点值小于根节点 右子树大于 所以可以划分出左右子树
    let i = 0;
    for (; i < length - 1; i++) {
        if (postorder[i] > root) break;
    }
    let j = i;
    for (; j < length - 1; j++) {
        if (postorder[j] < root) return false;
    }

    // 递归判断左右子树是不是二叉搜索树
    // 注意左右子树存在的条件
    let left = true;
    if (i > 0) left = verifyPostorder(postorder.slice(0, i));
    let right = true;
    if (i < length - 1) right = verifyPostorder(postorder.slice(i, length - 1));

    return left && right;
};
