// 哈希表
var findRepeatNumber = function(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num]) return num;
        else map[num] = 1;
    }
};

// 重排数组
// 由于数组长度为 n，所有数字都在 0-n-1 的范围内，故若无重复数字应当可以将数组重排为 nums[i]=i
// 按这个想法逐渐将数组元素归到它应该去的位置，而如果出现某一位置两个元素都想去则找到重复数字
var findRepeatNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const m = nums[i];
        if (m !== i) {
            if (m === nums[m]) return m;
            else {
                [nums[i], nums[m]] = [nums[m], [nums[i]]];
            }
        }
    }
};
