var findDuplicateSubtrees = function(root) {
    const map = new Map(); // 记录所有子树以及出现过的次数
    const list = []; // 记录重复子树的根节点
    const help = function(root) {
        if (!root) return '#';
        // 将当前子树序列化之后存入 map 中
        // 注意不能使用中序遍历，否则[0,null,0]和[0,0,null]序列化后的结果是相同的
        // 前序和后序在带上空节点#标识后可以唯一确定二叉树
        const tree = `${root.val},${help(root.left)},${help(root.right)}`;
        const item = map.get(tree);
        if (!item) map.set(tree, 1);
        else {
            map.set(tree, item + 1);
            if (item === 1) list.push(root);
        }
        return tree;
    }
    help(root);
    return list;
};
