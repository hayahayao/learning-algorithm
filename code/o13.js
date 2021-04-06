var movingCount = function(m, n, k) {
    if (k < 0 || m < 0 || n < 0) return 0;
    let visited = [];
    for (let i = 0; i < m; i++) {
        visited[i] = [];
        for (let j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }
    return movingCountCore(m, n, k, 0, 0, visited);
};
var movingCountCore = function(m, n, k, row, col, visited) {
    let cnt = 0;
    if (check(m, n, k, row, col, visited)) {
        visited[row][col] = true;
        cnt = 1 + movingCountCore(m, n, k, row-1, col, visited) + movingCountCore(m, n, k, row+1, col, visited) + movingCountCore(m, n, k, row, col-1, visited) + movingCountCore(m, n, k, row, col+1, visited);
    }
    // 这样写就略去了回溯的部分
    // 因为check不满足时visited是false 而且cnt也是0
    return cnt;
}
var check = function(m, n, k, row, col, visited) {
    var getDigitSum = function(n) {
        let sum = 0;
        while (n) {
            sum += n % 10;
            // 注意 js 的除法
            n = Math.floor(n / 10);
        }
        return sum;
    };
    return (row >= 0 && row < m && col >= 0 && col < n && (getDigitSum(row) + getDigitSum(col) <= k) && !visited[row][col]);
}
