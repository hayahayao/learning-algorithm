# 35-搜索插入位置

[Leetcode-35.搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)

## 题目描述

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

```
输入: [1,3,5,6], 5
输出: 2
```


示例 2:

```
输入: [1,3,5,6], 2
输出: 1
```


示例 3:

```
输入: [1,3,5,6], 7
输出: 4
```


示例 4:

```
输入: [1,3,5,6], 0
输出: 0
```

## 解题思路

**1：线性查找**

不用说了，O(n)时间

**2：二分查找**

注意[实现](#实现)里的细节

在这篇[题解](https://leetcode-cn.com/problems/search-insert-position/solution/te-bie-hao-yong-de-er-fen-cha-fa-fa-mo-ban-python-/)上有详细的讨论

## 实现

**1：线性查找**

```javascript
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
```

**2：二分查找**

```javascript
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        // 这里是 round，四舍五入值
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
    // 最后返回 start，因为如果没找到的话循环结束时会 start > end
    // 按照题目要求，返回大于等于 target 的第一个数的索引，所以是 start
    // 如果要求返回小于等于 target 的所有数里最大的那个索引，则应该是 right
    return start
};
```

