/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) return [];

    const res = [];
    const m = matrix.length;
    const n = matrix[0].length;

    const circle = (rows, cols, start) => {
        let endX = cols - 1 - start;
        let endY = rows - 1 - start;
        
        // 从左到右打印一行
        for (let i = start; i <= endX; i++) {
            res.push(matrix[start][i]);
        }
        // 从上到下打印一列
        if (start < endY) {
            for (let i = start + 1; i <= endY; i++) {
                res.push(matrix[i][endX]);
            }
        }
        // 从右到左打印一行
        if (start < endX && start < endY) {
            for (let i = endX - 1; i >= start; i--) {
                res.push(matrix[endY][i]);
            }
        }
        // 从下到上打印一列
        if (start < endX && start < endY - 1) {
            for (let i = endY - 1; i >= start + 1; i--) {
                res.push(matrix[i][start]);
            }
        }
    };

    let start = 0;
    while (n > start * 2 && m > start * 2) {
        circle(m, n, start);
        start++;
    }

    return res;
};
