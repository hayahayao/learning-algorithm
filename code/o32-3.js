var levelOrder = function(root) {
    // 两个栈实现
    // 在打印某一层的节点时 把下一层的节点保存到相应的栈里
    // 如果当前打印的是奇数层 则先左后右地保存在第一个栈中
    // 如果当前打印的是偶数层 则先右后左地保存在第二个栈中
    if (!root) return [];
    const level0 = [];
    const level1 = [];
    let current = 0;
    const res = [];
    
    level0.push(root);
    while (level0.length || level1.length) {
        const levelCurrent = current === 0 ? level0 : level1;
        const levelNext = current === 0 ? level1 : level0;
        
        const resLevel = [];
        while (levelCurrent.length) {
            const node = levelCurrent.pop();
            resLevel.push(node.val);
            if (current === 0) {
                if (node.left) levelNext.push(node.left);
                if (node.right) levelNext.push(node.right);
            } else {
                if (node.right) levelNext.push(node.right);
                if (node.left) levelNext.push(node.left);
            }
        }
        res.push(resLevel);
        current = 1 - current;
    }

    return res;
};
