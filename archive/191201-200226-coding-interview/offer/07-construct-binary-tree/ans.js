function reConstructBinaryTree(pre, vin)
{
    if (!pre.length || !vin.length) {
        return null
    }
    const root = new TreeNode(pre[0])
    for (let i = 0; i < vin.length; i++) {
        if (vin[i] === root.val) {
            root.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i))
            root.right = reConstructBinaryTree(pre.slice(i+1), vin.slice(i+1))
            break
        }
    }
    return root
}
