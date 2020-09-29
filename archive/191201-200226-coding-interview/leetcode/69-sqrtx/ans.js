var mySqrt = function(x) {
    if (x === 0) return 0
    let left = 1
    let right = Math.floor(x/2)
    while (left < right) {
        let mid = (left + right) >> 1
        let square = mid * mid
        if (square > x) right = mid - 1
        else left = mid
    }
    return left
};

var mySqrt = function(x) {
    if (x === 0) return 0
    let cur = 1
    while (true) {
        let pre = cur
        cur = (cur + x / cur) / 2
        if (Math.abs(cur - pre) < 1e-6) return Math.floor(cur)
    }
};
