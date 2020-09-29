var sortedArrayToBST = function(nums) {
    if (!nums.length) return null
    let mid = nums.length >> 1
    let node = new TreeNode(nums[mid])
    let left = nums.slice(0, mid)
    let right = nums.slice(mid+1, nums.length)
    node.left = sortedArrayToBST(left)
    node.right = sortedArrayToBST(right)
    return node
};
