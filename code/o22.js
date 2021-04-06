var getKthFromEnd = function(head, k) {
    if (!head || k <= 0) return null;
    // 定义两个指针
    // ahead从头开始向前走k-1步 behind不动
    // 从第k步开始 两指针同步走 两指针距离保持在k-1
    // 所以ahead到达尾节点时behind正好指向倒数第k个
    let pAhead = head;
    let pBehind = head;
    for (let i = 0; i < k-1; i++) {
        if (pAhead.next) pAhead = pAhead.next;
        else return null;
    }
    while (pAhead.next) {
        pAhead = pAhead.next;
        pBehind = pBehind.next;
    }
    return pBehind;
};
