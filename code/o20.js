var isNumber = function(s) {
    // 表示数字的字符串遵循模式 A[.[B]][e|EC] 或者 .B[e|EC]
    // A C都是可能以正负号开头的0-9数位串 B是不带符号的0-9数位串

    const scanSignedInteger = (s) => { // 扫描带正负号的整数
        if (s[cursor] === '+' || s[cursor] === '-') {
            cursor++;
        }
        return scanUnsignedInteger(s);
    };

    const scanUnsignedInteger = (s) => { // 扫描不带正负号的整数
        const before = cursor;
        while (s[cursor] >= '0' && s[cursor] <= '9') {
            cursor++;
        }
        return cursor > before;
    };

    let cursor = 0;

    s = s.trim();

    // 扫描A部分
    numeric = scanSignedInteger(s);

    // 如果出现. 接下来是小数部分
    if (s[cursor] === '.') {
        cursor++;
        // 用 || 的原因
        // 1. 小数可以没有整数部分
        // 2. 小数点后面可以没有数字
        // 3. 小数点前面和后面都可以有数字
        numeric = scanUnsignedInteger(s) || numeric;
    }

    // 如果出现e或者E 接下来是指数部分
    if (s[cursor] === 'e' || s[cursor] === 'E') {
        cursor++;
        // 用 && 的原因
        // 1. 当e或E前面没有数字时 整个字符串不能表示数字
        // 2. 当e或E后面没有整数时 整个字符串不能表示数字
        numeric = numeric && scanSignedInteger(s);
    }

    return numeric && cursor === s.length;
};
