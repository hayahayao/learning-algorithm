var hasPathSum = function(root, sum) {
    if (!root) return false
    let stack = []
    stack.push({
        root: root,
        sum: root.val
    })
    while (stack.length) {
        let node = stack.pop()
        if (!node.root.left && !node.root.right) {
            if (node.sum === sum) return true
        }
        if (node.root.left) {
            stack.push({
                root: node.root.left,
                sum: node.sum + node.root.left.val
            })
        }
        if (node.root.right) {
            stack.push({
                root: node.root.right,
                sum: node.sum + node.root.right.val
            })
        }
    }
    return false
};
