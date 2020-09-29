/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    let stack: number[] = []
    for (let i = 0; i < tokens.length; i++) {
        if (['+', '-', '*', '/'].includes(tokens[i])) {
            if (stack.length < 2) return -1
            const a = stack.pop() as number
            const b = stack.pop() as number
            let c = 0
            switch (tokens[i]) {
                case '+':
                    c = b + a
                    break
                case '-':
                    c = b - a
                    break
                case '*':
                    c = b * a
                    break
                case '/':
                    c = b / a
                    c = c >= 0 ? Math.floor(c) : Math.ceil(c)
                    break
                default:
                    break
            }
            stack.push(c)
        } else {
            stack.push(parseInt(tokens[i]))
        }
    }
    return stack[0]
};
// @lc code=end

