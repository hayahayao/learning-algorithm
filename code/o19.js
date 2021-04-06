var isMatch = function(s, p) {
    // 每次从字符串中拿出一个字符和模式中的字符匹配
    if (!s.length && !p.length) return true;
    if (s.length > 0 && !p.length) return false;

    // 如果模式中的第二个字符是* 需要特殊处理
    if (p[1] === '*') {
        if (s[0] === p[0] || (p[0] === '.' && s.length)) {
            // 匹配上1个
            // 字符串向后移动1个 模式向后移动两个or保持不变
            return isMatch(s.slice(1), p.slice(2))
                || isMatch(s.slice(1), p)
                || isMatch(s, p.slice(2));
        } else {
            // 匹配0个 即模式上向后移动两个字符
            return isMatch(s, p.slice(2));
        }
    }

    // 两个字符相等 or 模式中是.字符串是任意字符
    if (s[0] === p[0] || (p[0] === '.' && s.length)) {
        return isMatch(s.slice(1), p.slice(1));
    }
    
    return false;
};
