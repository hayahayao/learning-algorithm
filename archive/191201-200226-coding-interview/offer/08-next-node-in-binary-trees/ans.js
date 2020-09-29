function GetNext(pNode)
{
    if (!pNode) return null
    let next = null
    
    // 如果有右子树，下一个节点为它的右子树中的最左节点
    if (pNode.right) {
        let right = pNode.right
        while (right.left) {
            right = right.left
        }
        next = right
    } 
    // 其他两种情况
    else if (pNode.next) {
        let current = pNode
        let parent = pNode.next
        while (parent && current === parent.right) {
            current = parent
            parent = parent.next
        }
        next = parent
    } 
    return next
}
