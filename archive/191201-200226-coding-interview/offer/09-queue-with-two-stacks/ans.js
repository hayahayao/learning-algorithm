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
