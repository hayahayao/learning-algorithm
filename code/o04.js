// 找数组右上角元素进行比较，从而每次可以缩小一行/一列
var findNumberIn2DArray = function(matrix, target) {
    if (!matrix.length) return false;
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        const p = matrix[row][col];
        if (p === target) return true;
        if (p > target) col--;
        if (p < target) row++;
    }
    return false;
};
