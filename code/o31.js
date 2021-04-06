var validateStackSequences = function(pushed, popped) {
    // 建立一个辅助栈stack
    // 如果下一个弹出的数字刚好是栈顶数字 则直接弹出
    // 如果下一个弹出的数字不在栈顶 则将压栈序列中还没有入栈的数字压入辅助栈
    // 直到到达需要弹出的数字 or 所有数字都入栈
    let res = false;
    if (pushed.length === popped.length) {
        let push = 0;
        let pop = 0;
        const stack = [];
        while (pop < popped.length) {
            while (!stack.length || stack[stack.length - 1] !== popped[pop]) {
                if (push === pushed.length) break;
                stack.push(pushed[push]);
                push++;
            }
            if (stack[stack.length - 1] !== popped[pop]) break;
            stack.pop();
            pop++;
        }
        if (!stack.length && pop === popped.length) res = true;
    }
    return res;
};
