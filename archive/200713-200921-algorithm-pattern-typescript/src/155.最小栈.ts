/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    private stack: number[]
    private min: number
    private minStack: number[]

    constructor() {
        this.stack = []
        this.minStack = []
        this.min = Number.MAX_SAFE_INTEGER;
    }

    push(x: number): void {
        this.stack.push(x)
        if (x < this.min) this.min = x
        this.minStack.push(this.min)
    }

    pop(): void {
        this.stack.pop()
        this.minStack.pop()
        this.min = this.minStack.length ? this.minStack[this.minStack.length - 1] : Number.MAX_SAFE_INTEGER
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

