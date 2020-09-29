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

function printListFromTailToHead(head)
{
    if (!head) return []
    return printListFromTailToHead(head.next).concat(head.val)
}
