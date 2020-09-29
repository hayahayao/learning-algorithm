var isSameTree = function(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

var isSameTree = function(p, q) {
    let deq = [p, q]
    while (deq.length) {
        p = deq.shift()
        q = deq.shift()
        if (!check(p, q)) return false
        if (!p && !q) continue
        deq.push(p.left)
        deq.push(q.left)
        deq.push(p.right)
        deq.push(q.right)
    }
    return true
};

var check = function(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return true
};
