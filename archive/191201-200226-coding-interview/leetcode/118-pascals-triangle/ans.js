var generate = function(numRows) {
    if (!numRows) return []
    let res = []
    for (let i = 1; i <= numRows; i++) {
        res[i-1] = []
        for (let j = 0; j < i; j++) {
            if (i === 1) {
                res[i-1].push(1)
                break
            } else {
                if (j === 0) res[i-1].push(1)
                else if (j === i-1) res[i-1].push(1)
                else {
                    res[i-1].push(res[i-2][j]+res[i-2][j-1])
                }
            }
        }
    }
    return res
};
