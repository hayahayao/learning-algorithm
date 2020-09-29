# 83-删除排序列表中的重复元素

[Leetcode-83.删除排序列表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

## 题目描述

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

```
输入: 1->1->2
输出: 1->2
```


示例 2:

```
输入: 1->1->2->3->3
输出: 1->2->3
```

## 解题思路

直接法，直接遍历链表在原链表上修改

## 实现

```javascript
var deleteDuplicates = function(head) {
    let cur = head
    while (cur && cur.next) {
        if (cur.next.val === cur.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
};
```

