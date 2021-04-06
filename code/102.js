var levelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        let count = queue.length;
        const level = [];
        while (count) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            count--;
        }
        res.push(level);
    }
    return res;
};
