/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
// function largestRectangleArea(heights: number[]): number {
//     let maxArea = 0
//     for (let i = 0; i < heights.length; i++) {
//         let left = i
//         while (left >= 0 && heights[left] >= heights[i]) left--
//         let right = i
//         while (right < heights.length && heights[right] >= heights[i]) right++
//         maxArea = Math.max(maxArea, heights[i] * (right - left - 1))
//     }
//     return maxArea
// };

function largestRectangleArea(heights: number[]): number {
    // 单调栈
    const peek = (array: number[]) => array[array.length - 1]
    const tmp: number[] = [0, ...heights, 0]
    let stack: number[] = []
    let area: number = 0
    for (let i = 0; i < tmp.length; i++) {
        // 对栈中柱体来说，栈中的下一个柱体就是其「左边第一个小于自身的柱体」；
        // 若当前柱体 i 的高度小于栈顶柱体的高度，说明 i 是栈顶柱体的「右边第一个小于栈顶柱体的柱体」。
        while (stack.length && tmp[i] < tmp[peek(stack)]) {
            const h = tmp[stack.pop() as number]
            area = Math.max(area, h * (i - peek(stack) - 1))
        }
        stack.push(i)
    }
    return area
};
// @lc code=end

