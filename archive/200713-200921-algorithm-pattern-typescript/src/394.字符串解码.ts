/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
    let stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i])
        } else {
            let str = ''
            let current = stack.pop() as string
            while (current !== '[') {
                str = current + str
                current = stack.pop() as string
            }
            let num = ''
            current = stack.pop() as string 
            while (/\d/.test(current)) {
                num = current + num
                current = stack.pop() as string 
            }
            if (current) stack.push(current)
            const result = str.repeat(parseInt(num))
            stack.push(result)
        }
    }
    return stack.join('')
};
// @lc code=end

