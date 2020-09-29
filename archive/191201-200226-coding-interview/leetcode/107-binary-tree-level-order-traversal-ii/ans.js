var levelOrderBottom = function(root) {
    let levels = []
    if (!root) return levels
    
    let helper = function(node, level) {
        if (levels.length === level) {
            levels.push([])
        }
        levels[level].push(node.val)
        if (node.left) helper(node.left, level + 1)
        if (node.right) helper(node.right, level + 1)
    }
    
    helper(root, 0)
    return levels.reverse()
};

var levelOrderBottom = function(root) {
    let levels = []
    if (!root) return levels
    
    let level = 0
    let queue = [root]
    
    while (queue.length) {
        levels.push([])
        let levelNum = queue.length
        for (let i = 0; i < levelNum; i++) {
            let node =  queue.shift()
            levels[level].push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        level++
    }
    
    return levels.reverse()
};
