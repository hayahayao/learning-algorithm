var serialize = function(root) {
    // 前序遍历
    if (!root) {
        return '#';
    }
    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
};

var deserialize = function(data) {
    const help = (queue) => {
        const rootVal = queue.shift();
        if (rootVal === '#') return null;
        const root = new TreeNode(rootVal);
        root.left = help(queue);
        root.right = help(queue);
        return root;
    }

    return help(data.split(','));
};
