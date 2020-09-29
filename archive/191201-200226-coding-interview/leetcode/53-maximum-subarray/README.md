# 53-最大子序和

[Leetcode-53.最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

## 题目描述

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```


进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

## 解题思路

### 动态规划

sum 为当前最大连续子序列和，ans 为结果

对于 nums[i] 来说，我们只需考察 `sum + nums[i]`是否大于`nums[i]`，即考察 sum 是否大于零

如果大于零，说明 sum 对结果有增益效果，保留该数

如果小于等于零，则说明 sum 对结果无增益效果，那么对于当前这个 sum 来说就已经求到最大的 sum了，可以再次从 nums[i] 开始求

ans 记录最大的 sum，每次和它比较一下

### 分治

取数组中心点为中心，最大子序要么全在中心左边，要么在右边，要么跨中心

左右边的可以继续分治，中间部分可以直接计算出来

计算方法：因为跨中心必然需要包括 nums[mid]，因此从中心往两边分别扩张到最大值再连起来就是所求的

## 实现

### 动态规划

```javascript
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
```

### 分治

```javascript
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
```

