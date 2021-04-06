// 层次遍历
var connect = function(root) {
    if (!root) return null;
    const queue = [root];
    while (queue.length) {
        let count = queue.length;
        while (count) {
            const left = queue.shift();
            const right = count === 1 ? null : queue[0];
            left.next = right;
            if (left.left) queue.push(left.left);
            if (left.right) queue.push(left.right);
            count--;
        }
    }
    return root;
};

// 层次遍历 优化空间复杂度
// 思路：通过已经设置好的next指针遍历当前层，遍历同时设置下一层的next指针
var connect = function(root) {
    if (!root) return null;
    let cur = root; // cur 是当前遍历层的指针
    while (cur) {
        let head = new Node(0); // 在下一层最前面添加一个head
        let pre = head; // pre是当前操作下一层节点的前一个
        while (cur) {
            if (cur.left) {
                pre.next = cur.left;
                pre = pre.next;
            }
            if (cur.right) {
                pre.next = cur.right;
                pre = pre.next;
            }
            cur = cur.next;
        }
        cur = head.next; // head.next即为下一层第一个
    }
    return root;
};

// 递归
var connect = function(root) {
    function getNext(node) {
        if (!node) return null;
        if (node.left) return node.left;
        if (node.right) return node.right;
        if (node.next) return getNext(node.next);
        return null;
    }

    if (!root) return root;
    if (root.left && root.right) {
        // 左右均不空 直接连接
        root.left.next = root.right;
    }
    if (root.left && !root.right) {
        // 左不空右空 则通过root.next找左需要连接的点
        root.left.next = getNext(root.next);
    }
    if (root.right) {
        // 左空右不空
        root.right.next = getNext(root.next); 
    }
    connect(root.right); // 先递归右树 否则右子树根节点next关系没建立好，左子树到右子树子节点无法正确挂载
    connect(root.left);
    return root;
};
