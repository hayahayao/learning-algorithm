var pathSum = function(root, target) {
    if (!root) return [];

    const res = [];

    const path = [];
    let currentSum = 0;

    const findPath = (root, target, path, currentSum) => {
        currentSum += root.val;
        path.push(root.val);

        // 如果是叶节点 且路径上节点值的和等于输入的值
        // 则保存这条路径
        const isLeaf = !root.left && !root.right;
        if (currentSum === target && isLeaf) {
            res.push([...path]);
        }

        // 如果不是叶节点 则遍历它的子节点
        if (root.left) findPath(root.left, target, path, currentSum);
        if (root.right) findPath(root.right, target, path, currentSum);

        // 回溯
        // 在返回父节点之前 在路径上删除当前节点
        path.pop();
    };


    findPath(root, target, path, currentSum);

    return res;
};
