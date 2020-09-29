var isPalindrome = function(x) {
    if (x < 0) return false
    let help = 1
    let tmp = x
    while (tmp >= 10) {
        help *= 10
        tmp = Math.floor(tmp / 10)
    }
    while (x > 0) {
        if (x % 10 !== Math.floor(x / help)) return false
        x = Math.floor((x % help) / 10)
        help /= 100
    }
    return true
};
