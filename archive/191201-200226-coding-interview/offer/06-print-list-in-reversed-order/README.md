# 06：从尾到头打印链表

## 题目描述

输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

## 解题思路

要求从尾到头打印出链表中的值，自然想到从头到尾遍历链表同时用一个**栈**存储值，遍历完后从栈顶开始逐个弹出

而又因为递归本质上是个栈结构，也可以用递归实现

我们每访问一个节点时，先递归输出它后面的节点，再输出该节点自身

## 实现

```javascript
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
}
```

**栈实现**

```javascript
function printListFromTailToHead(head)
{
    let stack = []
    let node = head
    while(node) {
        stack.push(node.val)
        node = node.next
    }
    return stack.reverse()
}
```

**递归实现**

```javascript
function printListFromTailToHead(head)
{
    if (!head) return []
    return printListFromTailToHead(head.next).concat(head.val)
}
```

