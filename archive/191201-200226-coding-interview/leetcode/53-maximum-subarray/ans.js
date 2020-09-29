var maxSubArray = function(nums) {
    let ans = nums[0]
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) sum += nums[i]
        else sum = nums[i]
        ans = Math.max(ans, sum)
    }
    return ans
};

var maxSubArray = function(nums) {
    let size = nums.length
    if (size === 0) return 0
    return __max_sub_array(nums, 0, size - 1)
};

var __max_sub_array = function(nums, left, right) {
    if (left === right) return nums[left]
    let mid = Math.floor((left + right) / 2)
    return Math.max(__max_sub_array(nums, left, mid), 
                    __max_sub_array(nums, mid + 1, right),
                    __max_cross_array(nums, left, mid, right))
};

var __max_cross_array = function(nums, left, mid, right) {
    let maxLeft = nums[mid]
    let tmp = 0
    for (let i = mid; i >= left; i--) {
        tmp += nums[i]
        maxLeft = Math.max(maxLeft, tmp)
    }
    
    let maxRight = nums[mid + 1]
    tmp = 0
    for (let i = mid + 1; i <= right; i++) {
        tmp += nums[i]
        maxRight = Math.max(maxRight, tmp)
    }
    
    return maxLeft + maxRight
};
