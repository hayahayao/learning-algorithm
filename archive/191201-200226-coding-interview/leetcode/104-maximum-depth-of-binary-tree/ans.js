var maxDepth = function(root) {
    let stack = []
    if (root) stack.push({
        currentDepth: 1, 
        root: root
    })
    let depth = 0
    while (stack.length) {
        let {currentDepth, root} = stack.pop() 
        if (root) {
            depth = Math.max(currentDepth, depth)
            stack.push({
                currentDepth: currentDepth + 1, 
                root:root.left
            })
            stack.push({
                currentDepth: currentDepth + 1, 
                root:root.right
            })
        }
    }
    return depth
};

var maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
