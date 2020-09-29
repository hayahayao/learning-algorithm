var searchInsert = function(nums, target) {
    let last = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
        if (nums[i] < target && i === nums.length - 1) {
            return i + 1
        }
    }
};

var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let middle = Math.round((start + end) / 2)
        if (nums[middle] === target) {
            return middle
        }
        if (nums[middle] > target) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return start
};
