// 模拟整数加
var printNumbers = function(n) {
    // 直接用n去求大数会挂 需要用字符串来表示
    if (n <= 0) return [];
    let res = [];
    let number = new Array(n).fill('0');
    while (!increase(number)) {
        res.push(print(number));
    }
    return res;
};
var increase = function(number) {
    let isOverflow = false;
    let nTakeOver = 0; // 进位标志
    let nLength = number.length;
    for (let i = nLength - 1; i >= 0; i--) {
        let nSum = number[i] - '0' + nTakeOver;
        if (i === nLength - 1) nSum++; // 加一
        if (nSum >= 10) {
            if (i === 0) isOverflow = true; // 判断何时停止加一：在加一时第一个字符产生了进位
            else {
                nSum -= 10;
                nTakeOver = 1;
                number[i] = +nSum;
            }
        } else {
            number[i] = +nSum;
            break;
        }
    }
    return isOverflow;
};
var print = function(number) {
    let isBeginning0 = true;
    let nLength = number.length;
    let res = '';
    for (let i = 0; i < nLength; i++) {
        if (isBeginning0 && number[i] !== '0') isBeginning0 = false;
        if (!isBeginning0) res += number[i];
    }
    return res;
};


// 另一种思路
var printNumbers = function(n) {
    // 直接全排列数字
    if (n <= 0) return [];
    let res = [];
    let number = new Array(n).fill('0');

    for (let i = 0; i < 10; i++) {
        number[0] = +i;
        help(number, n, 0, res);
    }
    return res;
};
var help = function(number, length, index, list) {
    // 递归辅助函数
    if (index === length - 1) {
        print(number, list);
        return;
    }
    for (let i = 0; i < 10; i++) {
        number[index + 1] = +i;
        help(number, length, index + 1, list);
    }
};
var print = function(number, list) {
    let isBeginning0 = true;
    let nLength = number.length;
    let res = '';
    for (let i = 0; i < nLength; i++) {
        if (isBeginning0 && number[i] !== '0') isBeginning0 = false;
        if (!isBeginning0) res += number[i];
    }
    if (res != 0) list.push(res); // 强制类型转换一下 不然直接写字符串相等过不了orz
};