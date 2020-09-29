# 1-两数之和

（19/12/02 百度一面）

[Leetcode-1.两数之和](https://leetcode-cn.com/problems/two-sum/)

## 题目描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 解题思路

1. 暴力法，两重循环

   时间O(n^2)，空间O(1)

2. 两遍hash表

   建立一个数组值-下标的hash表，之后遍历数组，对于 nums[i] 去 hash 表中查找是否存在 target - nums[i]（注意不能重复使用同一数字）

   时间O(n)，空间O(n)

3. 一遍hash表

   在上述方法上改进，一次遍历完成。在进行迭代并将元素插入到表中的同时，我们还会回过头检查表中是否已经存在当前元素对应的目标元素。如果存在就找到解

   时间O(n)，空间O(n)

## 实现

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // code
};
```

**两遍hash**

```javascript
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
```

**一遍hash**

```javascript
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
```

实现里的坑：

- 最初写的`hash[remain] && blabla`，忘记了数组下标0的话是会被判为 false 的

- 测试用例存在[3, 3] 6这种情况，一遍hash的时候最初把加入hash表的操作写在了循环最开始，这样的话如果有相同的数字后面就会直接覆盖前面数字在表中的记录，所以一直找不到...后来挪到后面就可以了（两遍hash的话，因为即使hash表中后面记录覆盖前面，但是第二次是从前向后遍历所以不会有问题）

