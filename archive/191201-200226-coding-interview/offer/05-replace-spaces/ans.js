function replaceSpace(str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            res += '%20'
        } else {
            res += str[i]
        }
    }
    return res
}

function replaceSpace(str) {
    return str.replace(/\s/g, '%20')
}
