var lengthOfLastWord = function(s) {
    if (!s.length) return 0
    let len = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') len++
        else if (len) return len
    }
    return len
};

var lengthOfLastWord = function(s) {
    if (!s.length) return 0
    let strs = s.trim().split(' ')
    return strs.pop().length
};
