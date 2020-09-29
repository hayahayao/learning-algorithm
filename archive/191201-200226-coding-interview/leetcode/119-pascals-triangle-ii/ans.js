var getRow = function(rowIndex) {
    let r = [1]
    for (let i = 1; i < rowIndex + 1; i++) {
        r.unshift(0)
        for (let j = 0; j < i; j++) {
            r[j] = r[j] + r[j+1]
        }
    }
    return r
};
