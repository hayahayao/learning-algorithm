var exist = function(board, word) {
    const visited = []; // 标识路径是否已经进入了每个格子
    let pathLength = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (existCore(board, word, i, j, pathLength, visited)) return true;
        }
    }
    return false;
};
var existCore = function(board, word, row, col, pathLength, visited) {
    if (word.length === pathLength) return true;
    let hasPath = false;
    if (row >= 0 && row < board.length && col >= 0 && col < board[0].length && board[row][col] === word[pathLength] && (!visited[row] || !visited[row][col])) {
        pathLength++;
        if (!visited[row]) visited[row] = [];
        visited[row][col] = true;
        hasPath = existCore(board, word, row, col-1, pathLength, visited) || existCore(board, word, row, col+1, pathLength, visited) || existCore(board, word, row-1, col, pathLength, visited) || existCore(board, word, row+1, col, pathLength, visited);
        if (!hasPath) { // 回溯
            pathLength--;
            visited[row][col] = false;
        }
    }
    return hasPath;
};
