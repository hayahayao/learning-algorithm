var romanToInt = function(s) {
    let map = {'I': 1,
               'V': 5,
               'X': 10,
               'L': 50,
               'C': 100,
               'D': 500,
               'M': 1000}
    let res = 0
    let pre = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (map[s[i]] < pre) pre = -map[s[i]]
        else pre = map[s[i]]
        res += pre
    }
    return res
};
