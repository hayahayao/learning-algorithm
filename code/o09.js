var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

CQueue.prototype.appendTail = function(value) {
    // 插入元素 直接放在 stack1 顶部
    this.stack1.push(value);
};

CQueue.prototype.deleteHead = function() {
    // 删除元素
    // 如果 stack2 非空则弹出其栈顶
    // 如果为空则把 stack1 逐个弹出并压入 stack2
    // 此时 stack2 就是 stack1 的倒排 还是弹出栈顶
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop() || -1;
};
