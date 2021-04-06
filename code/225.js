var MyStack = function() {
    // 任何时候两个队列总有一个是空的
    this.q1 = [];
    this.q2 = [];
};

MyStack.prototype.push = function(x) {
    // 添加元素总是向非空队列中 add 元素。
    if (this.q2.length) return this.q2.push(x);
    return this.q1.push(x);
};


MyStack.prototype.pop = function() {
    // 取出元素的时候总是将元素除队尾最后一个元素外，导入另一空队列中，最后一个元素出队
    const unempty = this.q1.length ? this.q1 : this.q2;
    const empty = this.q1.length ? this.q2 : this.q1;
    while (unempty.length > 1) {
        empty.push(unempty.shift())
    }
    return unempty.shift();
};

MyStack.prototype.top = function() {
    const unempty = this.q1.length ? this.q1 : this.q2;
    const empty = this.q1.length ? this.q2 : this.q1;
    let x;
    while (unempty.length) {
        x = unempty.shift();
        empty.push(x);
    }
    return x;
};

MyStack.prototype.empty = function() {
    return !this.q1.length && !this.q2.length;
};
