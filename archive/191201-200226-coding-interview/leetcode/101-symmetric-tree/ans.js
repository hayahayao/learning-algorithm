var isSymmetric = function(root) {
    return isMirror(root, root)
};

var isMirror = function(t1, t2) {
    if (!t1 && !t2) return true
    if (!t1 || !t2) return false
    return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
};

var isSymmetric = function(root) {
    if (!root) return true
    if (!check(root.left, root.right)) return false
    let queue = [root.left, root.right]
    while (queue.length) {
        let t1 = queue.shift()
        let t2 = queue.shift()
        if (!check(t1, t2)) return false
        if (!t1 && !t2) continue
        queue.push(t1.left)
        queue.push(t2.right)
        queue.push(t1.right)
        queue.push(t2.left)
    }
    return true
};

var check = function(t1, t2) {
    if (!t1 && !t2) return true
    if (!t1 || !t2) return false
    if (t1.val !== t2.val) return false
    return true
};
