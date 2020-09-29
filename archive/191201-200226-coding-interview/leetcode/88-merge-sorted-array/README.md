# 88-合并两个有序数组

[Leetcode-88.合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

## 题目描述

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

- 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
- 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例:

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

## 解题思路

**1：合并后排序**

先把 num2 加到 nums1 后面，然后对数组重新排序

时间复杂度较差，为 O((n+m)log(n+m))

**2：双指针从前往后**

将指针 p1 置于 nums1 的开头，p2 置于 nums2 的开头，每一步将最小值放入输出数组中

由于最终要输出到 nums1 中，需要先将 nums1 中的前 m 个元素放在其他地方，也就是需要 O(m) 的空间复杂度

实际上和[21：合并两个有序链表](../21-merge-two-sorted-lists/README.md)是一样的思路，只是需要把结果反映在 nums1 上所以借助了一个辅助数组先把原来的 nums1 存起来

**3：双指针从后往前**

方法 2 取得了最优的时间复杂度 O(m+n)，但需要使用 O(m) 的辅助空间，这是由于需要从头改变 nums1 的值，因此需要提前把 nums1 中的元素存放到其他位置

如果从结尾开始改写 nums1 的值，则不需要额外空间

## 实现

**1：合并后排序**

```javascript
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2)
    nums1.sort((a, b) => a - b)
};
```

**2：双指针从前往后**

```javascript
var merge = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice()
    let p1 = 0
    let p2 = 0
    let p = 0
    while (p1 < m && p2 < n) {
        nums1[p++] = (nums1Copy[p1] < nums2[p2] ? nums1Copy[p1++] : nums2[p2++])
    }
    if (p1 < m) nums1.splice(p, m - p1, ...nums1Copy.slice(p1, m))
    else nums1.splice(p, n - p2, ...nums2.slice(p2, n))
};
```

**3：双指针从后往前**

```javascript
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1
    while (p1 >= 0 && p2 >= 0) {
        nums1[p--] = (nums1[p1] < nums2[p2]) ? nums2[p2--] : nums1[p1--]
    }
    // 注意这里的处理
    // 由于是在 nums1 上改动，如果因为 p2<0 退出循环则说明 nums2 已经加完，无需再进行操作
    // 否则说明 nums1 加完而 nums2 还没加完，把 nums2 没加完的部分直接接到数组前面即可
    if (p2 >= 0) nums1.splice(0, p2+1, ...nums2.slice(0, p2+1))
};
```

