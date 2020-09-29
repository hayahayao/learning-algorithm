# 21-合并两个有序链表

[Leetcode-21.合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

## 题目描述

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

## 解题思路

**1：递归**

递归定义merge操作

```javascript
list1[0] + merge(list1[1:], list2)  // list1[0] < list2[0]
list2[0] + merge(list1, list2[1:])  // otherwise
```

时间复杂度 O(n+m)；空间复杂度 O(n+m)

**2：迭代**

也是比较直接的思路，每次都比较两列表头的节点，选小的节点加入到合并列表中

在实现上几个技巧：

- 因为最终要返回链表首节点，可以设置一个 -1 这样的头然后返回它的 next，这样就可以减少对头节点单独的处理
- 如果 l1 或 l2 为空，则可以直接把剩下那个链表接到目前合并链表的后面，因为其原本就是有序链表，这样就不用加一堆边界判断了

## 实现

**1：递归**

```javascript
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
```

**2：迭代**

```javascript
var mergeTwoLists = function(l1, l2) {
    let prehead = new ListNode(-1)
    
    let prev = prehead
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    prev.next = l1 ? l1: l2

    return prehead.next
};
```

