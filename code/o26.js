var isSubStructure = function(A, B) {
    // 在树A中找到和树B的根节点的值一样的节点R
    // 判断树A中以R为根节点的子树是不是包含和树B一样的结构
    let result = false;
    if (A && B) {
        if (A.val === B.val) result = doesTree1HaveTree2(A, B);
        if (!result) result = isSubStructure(A.left, B);
        if (!result) result = isSubStructure(A.right, B);
    }
    return result;
};
var doesTree1HaveTree2 = function(A, B) {
    if (!B) return true;
    if (!A) return false;
    if (A.val !== B.val) return false;
    return doesTree1HaveTree2(A.left, B.left) && doesTree1HaveTree2(A.right, B.right);
}
