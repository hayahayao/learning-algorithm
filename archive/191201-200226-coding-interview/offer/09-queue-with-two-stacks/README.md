# 09：用两个栈实现队列

## 题目描述

用两个栈来实现一个队列，完成队列的Push和Pop操作。

## 解题思路

通过具体的例子结合画图来分析往该队列中插入和删除元素的过程，总结出的过程如下：

插入元素时：直接将其 push 到 stack1 的栈顶

删除元素时：当 stack2 不为空时，直接弹出栈顶；

​                       否则，把 stack1 中的元素逐个弹出并压入 stack2，清空 stack1 之后再弹出 stack2 的栈顶

​                       这样可以保证 stack2 的栈顶一直时最先进入队列的元素

## 实现

```javascript
function push(node)
{
    // write code here
}
function pop()
{
    // write code here
}
```

```javascript
var stack1 = []
var stack2 = []

function push(node)
{
    stack1.push(node)
}
function pop()
{
    if (stack2.length) {
        return stack2.pop()
    } else {
        while (stack1.length) {
            stack2.push(stack1.pop())
        }
        return stack2.pop()
    }
}
```

## 扩展

用两个队列实现一个栈

压入元素时：将其压入当前不为空的那个队列（那个队列从头至尾的顺序即为栈从栈底到栈顶的顺序，但是由于队列先进先出，所以在需要栈弹出元素时要借助另一个队列进行操作）

弹出元素时：从当前非空的那个队列依次从头删除元素 -> 加入另一个队列，直到原队列只剩一个元素，从头部取出这个元素即为所需的栈顶元素。同时另一个队列中的元素顺序是与原队列相同的，即上面所描述的”队列从头至尾的顺序为栈从栈底到栈顶的顺序“