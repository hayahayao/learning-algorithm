var permutation = function(s) {
    const res = new Set();
    function dfs(s, begin) {
        // 把字符串分为两部分 第一个字符和后面的字符
        if (begin === s.length) {
            res.add(s);
            return;
        }
        for(let j = begin; j < s.length; j++) {
            // 第一步求任何可能出现在第一个位置的字符 即把第一个字符和后面所有的字符交换
            s = swap(s, begin, j);
            // 第二步固定第一个字符 求后面所有字符的排列
            dfs(s, begin + 1);
            // 求完了 恢复交换
            s = swap(s, begin, j);
        }
    }
    function swap(str, i, j) {
        if (i === j) return str;
        return str.slice(0, i) + str[j] + str.slice(i + 1, j) + str[i] + str.slice(j + 1);
    }
    dfs(s, 0);
    return [...res];
};
