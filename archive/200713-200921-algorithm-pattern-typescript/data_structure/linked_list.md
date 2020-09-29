# 链表

<!-- toc -->

- [链表](#链表)
  - [基本技能](#基本技能)
  - [常见题型](#常见题型)
    - [remove-duplicates-from-sorted-list](#remove-duplicates-from-sorted-list)
    - [remove-duplicates-from-sorted-list-ii](#remove-duplicates-from-sorted-list-ii)
    - [reverse-linked-list](#reverse-linked-list)
    - [reverse-linked-list-ii](#reverse-linked-list-ii)
    - [merge-two-sorted-lists](#merge-two-sorted-lists)
    - [partition-list](#partition-list)
    - [sort-list](#sort-list)
    - [reorder-list](#reorder-list)
    - [linked-list-cycle](#linked-list-cycle)
    - [linked-list-cycle-ii](#linked-list-cycle-ii)
    - [palindrome-linked-list](#palindrome-linked-list)
    - [copy-list-with-random-pointer](#copy-list-with-random-pointer)
  - [总结](#总结)
  - [练习](#练习)

<!-- tocstop -->

## 基本技能

链表相关的核心点

- null/nil 异常处理
- dummy node 哑巴节点
- 快慢指针
- 插入一个节点到排序链表
- 从一个链表中移除一个节点
- 翻转链表
- 合并两个链表
- 找到链表的中间节点

## 常见题型

### [remove-duplicates-from-sorted-list](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

> 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

```typescript
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let currentNode: ListNode | null = head
    while (currentNode) {
        if (currentNode.next && currentNode.val === currentNode.next.val) {
            currentNode.next = currentNode.next.next
        } else {
            currentNode = currentNode.next
        }
    }
    return head
};
```

### [remove-duplicates-from-sorted-list-ii](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)

> 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中没有重复出现的数字。

思路：用 dummy 节点记录头节点的前一个节点，tail 不断向尾部插入；l r 两个快慢指针

```typescript
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return head
    const dummy: ListNode = new ListNode(-1)
    let tail: ListNode = dummy
    let l: any = head // 慢指针
    let r: any = head // 快指针
    while (l) {
        while (r && r.val === l.val) r = r.next
        if (l.next === r) {
            tail.next = l
            tail = l
            tail.next = null
        }
        l = r
    }
    return dummy.next
};
```

### [reverse-linked-list](https://leetcode-cn.com/problems/reverse-linked-list/)

> 反转一个单链表。

思路：用一个 prev 节点保存向前指针，temp 保存向后的临时指针

```typescript
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    while (head) {
        let tmp = head.next
        head.next = prev
        prev = head
        head = tmp
    }
    return prev
};
```

### [reverse-linked-list-ii](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

> 反转从位置  *m*  到  *n*  的链表。请使用一趟扫描完成反转。

思路：将 m 到 n 之间的节点进行翻转，然后再处理首尾两节点的连接

[参考](https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/92die-dai-fa-fan-zhuan-mdao-nzhi-jian-de-lian-biao/)

```typescript
function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
    if (m === n) return head
    let dummy: ListNode = new ListNode(-1)
    dummy.next = head
    let a: any = dummy
    let d: any = dummy
    for (let i: number = 0; i < m - 1; i++) {
        a = a.next
    }
    for (let j: number = 0; j < n; j++) {
        d = d.next
    }
    let b: any = a.next
    let c: any = d.next
    for (let p: any = b, q: any = p.next; q !== c;) {
        let o: any = q.next
        q.next = p
        p = q
        q = o
    }
    a.next = d
    b.next = c
    return dummy.next
};
```

### [merge-two-sorted-lists](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

> 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

思路：通过 dummy node 链表，连接各个元素

```typescript
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy: any = new ListNode(-1)
    let currentHead: any = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            currentHead.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            currentHead.next = new ListNode(l2.val)
            l2 = l2.next
        }
        currentHead = currentHead.next
    }
    if (l1) currentHead.next = l1
    if (l2) currentHead.next = l2
    return dummy.next
};
```

### [partition-list](https://leetcode-cn.com/problems/partition-list/)

> 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于  *x*  的节点都在大于或等于  *x*  的节点之前。

思路：将大于 x 的节点，放到另外一个链表，最后连接这两个链表

```typescript
function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) return null
    const dummy1: any = new ListNode(-1, head)
    const dummy2: any = new ListNode(-1, null)
    let prev1: any = dummy1
    let current1: any = head
    let current2: any = dummy2
    while (current1) {
        if (current1.val >= x) {
            current2.next = new ListNode(current1.val)
            current2 = current2.next
            prev1.next = current1.next
            current1 = current1.next
        } else {
            prev1 = current1
            current1 = current1.next
        }
    }
    prev1.next = dummy2.next
    return dummy1.next
};
```

哑巴节点使用场景

> 当头节点不确定的时候，使用哑巴节点

### [sort-list](https://leetcode-cn.com/problems/sort-list/)

> 在  *O*(*n* log *n*) 时间复杂度和常数级空间复杂度下，对链表进行排序。

思路：归并排序，找中点和合并操作

```typescript
function sortList(head: ListNode | null): ListNode | null {
    return mergeSortRec(head)
};
function mergeSortRec(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
    let middle: any = middleNode(head)
    let tmp: any = middle.next
    middle.next = null
    let left: any = mergeSortRec(head)
    let right: any = mergeSortRec(tmp)
    return mergeTwoLists(left, right)
}
function middleNode(head: ListNode | null): ListNode | null {
    let fast: any = head
    let slow: any = head
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}
function mergeTwoLists(left: ListNode | null, right: ListNode | null): ListNode | null {
    const dummy: any = new ListNode(-1)
    let current: any = dummy
    while (left && right) {
        if (left.val < right.val) {
            current.next = new ListNode(left.val)
            left = left.next
        } else {
            current.next = new ListNode(right.val)
            right = right.next
        }
        current = current.next
    }
    current.next = left || right 
    return dummy.next
}
```

注意点

- 快慢指针 判断 fast 及 fast.next 是否为 null
- 递归 mergeSort 需要断开中间节点
- 递归返回条件为 head 为 null 或者 head.next 为 null

### [reorder-list](https://leetcode-cn.com/problems/reorder-list/)

> 给定一个单链表  *L*：*L*→*L*→…→*L\_\_n*→*L*
> 将其重新排列后变为： *L*→*L\_\_n*→*L*→*L\_\_n*→*L*→*L\_\_n*→…

思路：找到中点断开，翻转后面部分，然后合并前后两个链表

```typescript
function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return
    const dummy: any = new ListNode(-1, head)
    let fast: any = head
    let slow: any = head

    // find middle
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }

    // 断开
    let right = slow.next
    slow.next = null
    let left = dummy.next

    // reverse
    right = reverseList(right)

    // concat
    while (left && right) {
        let lNext = left.next
        let rNext = right.next
        right.next = left.next
        left.next = right
        left = lNext
        right = rNext
    }
}
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    while (head) {
        let tmp = head.next
        head.next = prev
        prev = head
        head = tmp
    }
    return prev
}
```

### [linked-list-cycle](https://leetcode-cn.com/problems/linked-list-cycle/)

> 给定一个链表，判断链表中是否有环。

思路：快慢指针，快慢指针相同则有环（两者都进入环之后肯定会相遇）

```javascript
var hasCycle = function(head) {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }
    return false
}
```

还有一种很 JS 的解法...

```javascript
var hasCycle = function(head) {
    while (head) {
        if (head.visited) return true
        head.visited = true
        head = head.next
    }
    return false
}
```

### [linked-list-cycle-ii](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

> 给定一个链表，返回链表开始入环的第一个节点。  如果链表无环，则返回  `null`。

思路：快慢指针，快慢相遇之后，慢指针回到头，快慢指针步调一致一起移动，相遇点即为入环点
[证明](https://leetcode.com/problems/linked-list-cycle-ii/discuss/495311)

```javascript
var detectCycle = function(head) {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            slow = head
            while (fast !== slow) {
                fast = fast.next
                slow = slow.next
            }
            return slow
        }
    }
    return null
}
```

### [palindrome-linked-list](https://leetcode-cn.com/problems/palindrome-linked-list/)

> 请判断一个链表是否为回文链表。

```typescript
function isPalindrome(head: ListNode | null): boolean {
    let fast = head
    let slow = head
    while (fast && fast!.next) {
        fast = fast!.next!.next
        slow = slow!.next
    }
    slow = reverseList(slow)
    while (slow && head) {
        if (head!.val !== slow!.val) return false
        head = head!.next
        slow = slow!.next
    }
    return true
};
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    while (head) {
        let tmp = head.next
        head.next = prev
        prev = head
        head = tmp
    }
    return prev
};
```

### [copy-list-with-random-pointer](https://leetcode-cn.com/problems/copy-list-with-random-pointer/)

> 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
> 要求返回这个链表的 深拷贝。

思路：hash 表存储指针，两次遍历

```javascript
var copyRandomList = function(head) {
    let map = new Map()
    let curr = head
    while (curr) {
        let node = new Node(curr.val)
        map.set(curr, node)
        curr = curr.next
    }
    curr = head
    while (curr) {
        let node = map.get(curr)
        if (curr.next) node.next = map.get(curr.next)
        node.random = map.get(curr.random)
        curr = curr.next
    }
    return map.get(head)
};
```

## 总结

链表必须要掌握的一些点，通过下面练习题，基本大部分的链表类的题目都是手到擒来~

- null/nil 异常处理
- dummy node 哑巴节点
- 快慢指针
- 插入一个节点到排序链表
- 从一个链表中移除一个节点
- 翻转链表
- 合并两个链表
- 找到链表的中间节点

## 练习

- [x] [remove-duplicates-from-sorted-list](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)
- [x] [remove-duplicates-from-sorted-list-ii](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)
- [x] [reverse-linked-list](https://leetcode-cn.com/problems/reverse-linked-list/)
- [x] [reverse-linked-list-ii](https://leetcode-cn.com/problems/reverse-linked-list-ii/)
- [x] [merge-two-sorted-lists](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
- [x] [partition-list](https://leetcode-cn.com/problems/partition-list/)
- [x] [sort-list](https://leetcode-cn.com/problems/sort-list/)
- [x] [reorder-list](https://leetcode-cn.com/problems/reorder-list/)
- [x] [linked-list-cycle](https://leetcode-cn.com/problems/linked-list-cycle/)
- [x] [linked-list-cycle-ii](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
- [x] [palindrome-linked-list](https://leetcode-cn.com/problems/palindrome-linked-list/)
- [x] [copy-list-with-random-pointer](https://leetcode-cn.com/problems/copy-list-with-random-pointer/)
