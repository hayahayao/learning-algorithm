var twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i]
        if (hash[remain] > -1 && hash[remain] !== i) {
            return [i, hash[remain]]
        }
    }
};

var twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i]
        if (hash[remain] > -1 && hash[remain] !== i) {
            return [i, hash[remain]]
        }
        hash[nums[i]] = i
    }
};
