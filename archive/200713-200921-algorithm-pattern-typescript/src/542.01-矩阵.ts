/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 */

// @lc code=start
function updateMatrix(matrix: number[][]): number[][] {
    let queue = []
    const m = matrix.length
    const n = matrix[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) queue.push({ x: i, y: j })
            else matrix[i][j] = -1
        }
    }
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    while (queue.length) {
        const { x, y }: { x: number, y: number } = queue.shift() as { x: number, y: number }
        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i]
            const newY = y + dy[i]
            if (newX >= 0 && newX < m && newY >= 0 && newY < n && matrix[newX][newY] === -1) {
                matrix[newX][newY] = matrix[x][y] + 1
                queue.push({ x: newX, y: newY })
            } 
        }
    }
    return matrix
};
// @lc code=end

