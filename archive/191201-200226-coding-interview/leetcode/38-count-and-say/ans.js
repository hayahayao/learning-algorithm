var countAndSay = function(n) {
    if (n === 1) return '1'
    else {
        let str = countAndSay(n-1)
        let res = ''
        let cnt = 0
        let last = str[0]
        for (let i = 0; i < str.length; i++) {
            if (str[i] === last) {
                cnt++
            } else {
                res = res + cnt + last
                cnt = 1
                last = str[i]
            }
        }
        res = res + cnt + last
        return res
    }
};
