var exchange = function(nums) {
    if (!nums.length) return nums;

    let pBegin = 0;
    let pEnd = nums.length - 1;

    while (pBegin < pEnd) {
        // 位运算判断奇偶
        while (pBegin < pEnd && (nums[pBegin] & 1)) pBegin++;
        while (pBegin < pEnd && !(nums[pEnd] & 1)) pEnd--;

        // 发现有偶数在奇数前面 交换
        if (pBegin < pEnd) {
            [nums[pBegin], nums[pEnd]] = [nums[pEnd], nums[pBegin]];
        }
    }

    return nums;
};
