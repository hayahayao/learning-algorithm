var reverse = function(x) {
    let rev = 0
    let INTMAX = Math.pow(2, 31) - 1
    let INTMIN = -Math.pow(2, 31)
    while (x) {
        let pop = x % 10
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
        if (rev > INTMAX / 10 || (rev === INTMAX / 10 && pop > 7)) return 0
        if (rev < INTMIN / 10 || (rev === INTMIN / 10 && pop < -8)) return 0
        rev = rev * 10 + pop
    }
    return rev
};
