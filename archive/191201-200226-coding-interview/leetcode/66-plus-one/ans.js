var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) digits[i] = 0
        else {
            digits[i]++
            break
        }
    }
    if (digits[0] === 0) {
        digits.push(0)
        digits[0] = 1
    }
    return digits
};
