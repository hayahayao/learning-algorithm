/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    private stack1: number[]
    private stack2: number[]
    private head: number
    constructor() {
        this.stack1 = []
        this.stack2 = []
        this.head = -1
    }

    push(x: number): void {
        if (!this.stack1.length) this.head = x
        this.stack1.push(x)
    }

    pop(): number {
        if (!this.stack2.length) {
            while (this.stack1.length) this.stack2.push(this.stack1.pop() as number)
        }
        return this.stack2.pop() as number
    }

    peek(): number {
        if (this.stack2.length) return this.stack2[this.stack2.length - 1]
        return this.head
    }

    empty(): boolean {
        return !this.stack1.length && !this.stack2.length
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

