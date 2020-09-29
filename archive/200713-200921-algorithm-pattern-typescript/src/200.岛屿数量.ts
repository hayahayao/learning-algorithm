/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    const dfs = (grid: string[][], i: number, j: number) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return
        if (grid[i][j] !== '1') return
        grid[i][j] = '2'
        dfs(grid, i + 1, j)
        dfs(grid, i - 1, j)
        dfs(grid, i, j + 1)
        dfs(grid, i, j - 1)
    }
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count
};
// @lc code=end

