# 栈和队列

<!-- toc -->

- [栈和队列](#栈和队列)
  - [简介](#简介)
  - [Stack 栈](#stack-栈)
  - [Queue 队列](#queue-队列)
  - [总结](#总结)
  - [练习](#练习)

<!-- tocstop -->

## 简介

栈的特点是后入先出

根据这个特点可以临时保存一些数据，之后用到依次再弹出来，常用于 DFS 深度搜索

队列一般常用于 BFS 广度搜索，类似一层一层的搜索

## Stack 栈

[min-stack](https://leetcode-cn.com/problems/min-stack/)

> 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

思路：用两个栈实现，一个最小栈始终保证最小值在顶部

```typescript
class MinStack {
    private stack: number[]
    private min: number
    private minStack: number[]

    constructor() {
        this.stack = []
        this.minStack = []
        this.min = Number.MAX_SAFE_INTEGER;
    }

    push(x: number): void {
        this.stack.push(x)
        if (x < this.min) this.min = x
        this.minStack.push(this.min)
    }

    pop(): void {
        this.stack.pop()
        this.minStack.pop()
        this.min = this.minStack.length ? this.minStack[this.minStack.length - 1] : Number.MAX_SAFE_INTEGER
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.min
    }
}
```

[evaluate-reverse-polish-notation](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)

> **波兰表达式计算** > **输入:** ["2", "1", "+", "3", "*"] > **输出:** 9
> **解释:** ((2 + 1) \* 3) = 9

思路：通过栈保存原来的元素，遇到表达式弹出运算，再推入结果，重复这个过程

```typescript
function evalRPN(tokens: string[]): number {
    let stack: number[] = []
    for (let i = 0; i < tokens.length; i++) {
        if (['+', '-', '*', '/'].includes(tokens[i])) {
            if (stack.length < 2) return -1
            const a = stack.pop() as number
            const b = stack.pop() as number
            let c = 0
            switch (tokens[i]) {
                case '+':
                    c = b + a
                    break
                case '-':
                    c = b - a
                    break
                case '*':
                    c = b * a
                    break
                case '/':
                    c = b / a
                    c = c >= 0 ? Math.floor(c) : Math.ceil(c)
                    break
                default:
                    break
            }
            stack.push(c)
        } else {
            stack.push(parseInt(tokens[i]))
        }
    }
    return stack[0]
};
```

[decode-string](https://leetcode-cn.com/problems/decode-string/)

> 给定一个经过编码的字符串，返回它解码后的字符串。
> s = "3[a]2[bc]", 返回 "aaabcbc".
> s = "3[a2[c]]", 返回 "accaccacc".
> s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".

思路：通过栈辅助进行操作

```typescript
function decodeString(s: string): string {
    let stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i])
        } else {
            let str = ''
            let current = stack.pop() as string
            while (current !== '[') {
                // 注意字符串顺序
                str = current + str
                current = stack.pop() as string
            }
            let num = ''
            current = stack.pop() as string 
            while (/\d/.test(current)) {
                num = current + num
                current = stack.pop() as string 
            }
            // 注意边界
            if (current) stack.push(current)
            const result = str.repeat(parseInt(num))
            stack.push(result)
        }
    }
    // 无需单开 string 记录结果
    return stack.join('')
};
```

利用栈进行 DFS 递归搜索模板

```typescript
// 伪代码
function DFS(root: Node, target: number): boolean {
    let visited: Set<Node>
    let stack: Node[]
    add root to stack
    while (stack is not empty) {
        let cur: Node = the top element in stack
        if (cur is target) return true
        for (let next: Node = the neighbors of cur) {
            if (next is not in visited) {
                add next to stack
                add next to visited
            }
        }
        remove cur from stack
    }
    return false
}
```

[binary-tree-inorder-traversal](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

> 给定一个二叉树，返回它的*中序*遍历。

```typescript
function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []
    let result: number[] = []
    let stack: TreeNode[] = []
    while (root || stack.length) {
        while (root) {
            stack.push(root as TreeNode)
            root = root.left
        }
        const node = stack.pop() as TreeNode
        result.push(node.val)
        root = node.right
    }
    return result
};
```

[clone-graph](https://leetcode-cn.com/problems/clone-graph/)

> 给你无向连通图中一个节点的引用，请你返回该图的深拷贝（克隆）。

```javascript
// 迭代版
var cloneGraph = function(node) {
    if (!node) return null
    let map = new Map()
    let stack = []
    let stackCopy = []
    const result = new Node(node.val)
    stack.push(node)
    stackCopy.push(result)
    while (stack.length) {
        const cur = stack.pop()
        const curCopy = stackCopy.pop()
        map.set(cur, curCopy)
        for (let i = 0; i < cur.neighbors.length; i++) {
            const neighbor = cur.neighbors[i]
            let neighborCopy = map.get(neighbor)
            if (neighborCopy) {
                curCopy.neighbors[i] = neighborCopy
            } else {
                neighborCopy = new Node(neighbor.val)
                curCopy.neighbors[i] = neighborCopy
                stack.push(neighbor)
                stackCopy.push(neighborCopy)
                map.set(neighbor, neighborCopy)
            }
        }
    }
    return result
}

// 递归版
var cloneGraph = function(node) {
    const visited = new Map()
    return clone(node)

    function clone(n) {
        if (!n) return n
        if (!visited.has(n)) {
            const newNode = new Node(n.val, n.neighbors)
            visited.set(n, newNode)
            newNode.neighbors = newNode.neighbors.map(clone) // 啊！优雅的map！
        }
        return visited.get(n)
    }
}
```

[number-of-islands](https://leetcode-cn.com/problems/number-of-islands/)

> 给定一个由  '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

思路：通过深度搜索遍历可能性（注意标记已访问元素）

```typescript
function numIslands(grid: string[][]): number {
    const dfs = (grid: string[][], i: number, j: number) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return
        if (grid[i][j] !== '1') return
        grid[i][j] = '2'
        dfs(grid, i + 1, j)
        dfs(grid, i - 1, j)
        dfs(grid, i, j + 1)
        dfs(grid, i, j - 1)
    }
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count
};
```

[largest-rectangle-in-histogram](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)

> 给定 _n_ 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
> 求在该柱状图中，能够勾勒出来的矩形的最大面积。

思路：求以当前柱子为高度的面积，即转化为寻找小于当前值的左右两边值

![image.png](https://img.fuiboom.com/img/stack_rain.png)

用栈保存小于当前值的左的元素

![image.png](https://img.fuiboom.com/img/stack_rain2.png)

```typescript
function largestRectangleArea(heights: number[]): number {
    // o(n^2) 的暴力解法
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        let left = i
        while (left >= 0 && heights[left] >= heights[i]) left--
        let right = i
        while (right < heights.length && heights[right] >= heights[i]) right++
        maxArea = Math.max(maxArea, heights[i] * (right - left - 1))
    }
    return maxArea
};
function largestRectangleArea(heights: number[]): number {
    // 单调栈
    const peek = (array: number[]) => array[array.length - 1]
    const tmp: number[] = [0, ...heights, 0]
    let stack: number[] = []
    let area: number = 0
    for (let i = 0; i < tmp.length; i++) {
        // 对栈中柱体来说，栈中的下一个柱体就是其「左边第一个小于自身的柱体」；
        // 若当前柱体 i 的高度小于栈顶柱体的高度，说明 i 是栈顶柱体的「右边第一个小于栈顶柱体的柱体」。
        while (stack.length && tmp[i] < tmp[peek(stack)]) {
            const h = tmp[stack.pop() as number]
            area = Math.max(area, h * (i - peek(stack) - 1))
        }
        stack.push(i)
    }
    return area
};
```

## Queue 队列

常用于 BFS 宽度优先搜索

[implement-queue-using-stacks](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

> 使用栈实现队列

```typescript
class MyQueue {
    private stack1: number[]
    private stack2: number[]
    private head: number
    constructor() {
        this.stack1 = []
        this.stack2 = []
        this.head = -1
    }

    push(x: number): void {
        if (!this.stack1.length) this.head = x
        this.stack1.push(x)
    }

    pop(): number {
        if (!this.stack2.length) {
            while (this.stack1.length) this.stack2.push(this.stack1.pop() as number)
        }
        return this.stack2.pop() as number
    }

    peek(): number {
        if (this.stack2.length) return this.stack2[this.stack2.length - 1]
        return this.head
    }

    empty(): boolean {
        return !this.stack1.length && !this.stack2.length
    }
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

二叉树层次遍历

```go
func levelOrder(root *TreeNode) [][]int {
    // 通过上一层的长度确定下一层的元素
    result := make([][]int, 0)
    if root == nil {
        return result
    }
    queue := make([]*TreeNode, 0)
    queue = append(queue, root)
    for len(queue) > 0 {
        list := make([]int, 0)
        // 为什么要取length？
        // 记录当前层有多少元素（遍历当前层，再添加下一层）
        l := len(queue)
        for i := 0; i < l; i++ {
            // 出队列
            level := queue[0]
            queue = queue[1:]
            list = append(list, level.Val)
            if level.Left != nil {
                queue = append(queue, level.Left)
            }
            if level.Right != nil {
                queue = append(queue, level.Right)
            }
        }
        result = append(result, list)
    }
    return result
}
```

[01-matrix](https://leetcode-cn.com/problems/01-matrix/)

> 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
> 两个相邻元素间的距离为 1

```typescript
function updateMatrix(matrix: number[][]): number[][] {
    // 多源 BFS，以各个 0 为源点开始扩散
    // 每个点都是同步扩散，所以扩散到的 1 肯定是离自身最近的
    let queue = []
    const m = matrix.length
    const n = matrix[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) queue.push({ x: i, y: j })
            else matrix[i][j] = -1
        }
    }
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    while (queue.length) {
        const { x, y }: { x: number, y: number } = queue.shift() as { x: number, y: number }
        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i]
            const newY = y + dy[i]
            if (newX >= 0 && newX < m && newY >= 0 && newY < n && matrix[newX][newY] === -1) {
                matrix[newX][newY] = matrix[x][y] + 1
                queue.push({ x: newX, y: newY })
            } 
        }
    }
    return matrix
};
```

## 总结

- 熟悉栈的使用场景
  - 后入先出，保存临时值
  - 利用栈 DFS 深度搜索
- 熟悉队列的使用场景
  - 利用队列 BFS 广度搜索

## 练习

- [x] [min-stack](https://leetcode-cn.com/problems/min-stack/)
- [x] [evaluate-reverse-polish-notation](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)
- [x] [decode-string](https://leetcode-cn.com/problems/decode-string/)
- [x] [binary-tree-inorder-traversal](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
- [x] [clone-graph](https://leetcode-cn.com/problems/clone-graph/)
- [x] [number-of-islands](https://leetcode-cn.com/problems/number-of-islands/)
- [x] [largest-rectangle-in-histogram](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)
- [x] [implement-queue-using-stacks](https://leetcode-cn.com/problems/implement-queue-using-stacks/)
- [x] [01-matrix](https://leetcode-cn.com/problems/01-matrix/)
