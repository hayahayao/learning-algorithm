var minDepth = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    let min = Number.MAX_VALUE
    if (root.left) min = Math.min(minDepth(root.left), min)
    if (root.right) min = Math.min(minDepth(root.right), min)
    return min + 1
};

var minDepth = function(root) {
    if (!root) return 0
    let stack = []
    stack.push({
        root: root,
        depth: 1
    })
    let min = Number.MAX_VALUE
    while (stack.length) {
        let cur = stack.pop()
        let root = cur.root
        let depth = cur.depth
        if (!root.left && !root.right) {
            min = Math.min(min, depth)
        }
        if (root.left) {
            stack.push({
                root: root.left,
                depth: depth + 1
            })
        }
        if (root.right) {
            stack.push({
                root: root.right,
                depth: depth + 1
            })
        }
    }
    return min
};

var minDepth = function(root) {
    if (!root) return 0
    let queue = []
    queue.push({
        root: root,
        depth: 1
    })
    let depth = 0
    while (queue.length) {
        let cur = queue.shift()
        root = cur.root
        depth = cur.depth
        if (!root.left && !root.right) {
            break
        }
        if (root.left) {
            queue.push({
                root: root.left,
                depth: depth + 1
            })
        }
        if (root.right) {
            queue.push({
                root: root.right,
                depth: depth + 1
            })
        }
    }
    return depth
};
