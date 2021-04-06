// 栈实现
var reversePrint = function(head) {
    const stack = [];
    let p = head;
    while (p) {
        stack.push(p.val);
        p = p.next;
    }
    const res = [];
    while (stack.length) {
        res.push(stack.pop());
    }
    return res;
};

// 或者直接
var reversePrint = function(head) {
    const res = [];
    let p = head;
    while (p) {
        res.unshift(p.val);
        p = p.next;
    }
    return res;
};
