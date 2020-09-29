# 二叉树

<!-- toc -->

- [二叉树](#二叉树)
  - [知识点](#知识点)
    - [二叉树遍历](#二叉树遍历)
      - [前序递归](#前序递归)
      - [前序非递归](#前序非递归)
      - [中序非递归](#中序非递归)
      - [后序非递归](#后序非递归)
      - [DFS 深度搜索-从上到下](#dfs-深度搜索-从上到下)
      - [DFS 深度搜索-从下向上（分治法）](#dfs-深度搜索-从下向上分治法)
      - [BFS 层次遍历](#bfs-层次遍历)
    - [分治法应用](#分治法应用)
      - [典型示例](#典型示例)
      - [归并排序](#归并排序)
      - [快速排序](#快速排序)
      - [maximum-depth-of-binary-tree](#maximum-depth-of-binary-tree)
      - [balanced-binary-tree](#balanced-binary-tree)
      - [binary-tree-maximum-path-sum](#binary-tree-maximum-path-sum)
      - [lowest-common-ancestor-of-a-binary-tree](#lowest-common-ancestor-of-a-binary-tree)
    - [BFS 层次应用](#bfs-层次应用)
      - [binary-tree-level-order-traversal](#binary-tree-level-order-traversal)
      - [binary-tree-level-order-traversal-ii](#binary-tree-level-order-traversal-ii)
      - [binary-tree-zigzag-level-order-traversal](#binary-tree-zigzag-level-order-traversal)
    - [二叉搜索树应用](#二叉搜索树应用)
      - [validate-binary-search-tree](#validate-binary-search-tree)
      - [insert-into-a-binary-search-tree](#insert-into-a-binary-search-tree)
  - [总结](#总结)
  - [练习](#练习)

<!-- tocstop -->

## 知识点

### 二叉树遍历

**前序遍历**：**先访问根节点**，再前序遍历左子树，再前序遍历右子树
**中序遍历**：先中序遍历左子树，**再访问根节点**，再中序遍历右子树
**后序遍历**：先后序遍历左子树，再后序遍历右子树，**再访问根节点**

注意点

- 以根访问顺序决定是什么遍历
- 左子树都是优先右子树

#### 前序递归

```typescript
interface TreeNode {
    val: number,
    left: TreeNode,
    right: TreeNode
}

function preorderTraversal(root: TreeNode): void {
    if (!root) return

    console.log(root.val)
    preorderTraversal(root.left)
    preorderTraversal(root.right)
}
```

#### 前序非递归

```typescript
function preorderTraversal(root: TreeNode): number[] {
    if (!root) return

    let result: number[] = []
    let stack: TreeNode[] = []

    while (root || stack.length) {
        while (root) {
            result.push(root.val)
            stack.push(root)
            root = root.left
        }
        stack.pop()
        root = root.right
    }
    return result
}
```

#### 中序非递归

```typescript
function inorderTraversal(root: TreeNode): number[] {
    if (!root) return

    let result: number[] = []
    let stack: TreeNode[] = []

    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        const node = stack.pop()
        result.push(node.val)
        root = node.right
    }
    return result
}
```

#### 后序非递归

```typescript
function postorderTraversal(root: TreeNode): number[] {
    if (!root) return

    let result: number[] = []
    let stack: TreeNode[] = []
    let lastVisit: TreeNode; // 通过lastVisit标识右子节点是否已经弹出
    
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        let node = stack[stack.length - 1] // 这里先看看，先不弹出
        if (!node.right || node.right === lastVisit) { // 根节点必须在右节点弹出之后，再弹出
            node = stack.pop()
            result.push(node.val)
            lastVisit = node // 标记当前这个节点已经弹出过
        } else {
            root = node.right
        }
    }
	return result
}
```

注意点

- 核心就是：根节点必须在右节点弹出之后，再弹出

#### DFS 深度搜索-从上到下

```typescript
function preorderTraversal(root: TreeNode): number[] {
    let result: number[] = []
    dfs(root, result)
    return result
}
function dfs(root: TreeNode, result: number[]): void {
    if (!root) return

    result.push(root.val)
    dfs(root.left, result)
    dfs(root.right, result)
}
```

#### DFS 深度搜索-从下向上（分治法）

```typescript
function preorderTraversal(root: TreeNode): number[] {
    let result: number[] = []

    // 返回条件(null & leaf)
    if (!root) return result
    // 分治(Divide)
    let left: number[] = preorderTraversal(root.left)
    let right: number[] = preorderTraversal(root.right)
    // 合并结果(Conquer)
    result = result.push(root.Val)
    result = result.push(...left)
    result = result.push(...right)
    return result
}
```

注意点：

> DFS 深度搜索（从上到下） 和分治法区别：前者一般将最终结果通过指针参数传入，后者一般递归返回结果最后合并

#### BFS 层次遍历

```typescript
function levelOrder(root: TreeNode): number[][] {
    if (!root) return
    
    // 通过上一层的长度确定下一层的元素
    let result: number[][] = []
    let queue: TreeNode[] = []
    queue.push(root)
    while (queue.length) {
        let list: number[] = []
        const l = queue.length // 遍历当前层，再添加下一层
        for (let i: number = 0; i < l; i++) {
            const level = queue.shift()
            list.push(level.val)
            if (level.left) queue.push(level.left)
            if (level.right) queue.push(level.right)
        }
        result.push(list)
    }
    return result
}
```

### 分治法应用

先分别处理局部，再合并结果

适用场景

- 快速排序
- 归并排序
- 二叉树相关问题

分治法模板

- 递归返回条件
- 分段处理
- 合并结果

```typescript
function traversal(root: TreeNode): ResultType  {
    // nil or leaf
    if (!root) {
        // do something and return
    }

    // Divide
    const left: ResultType = traversal(root.left)
    const right: ResultType = traversal(root.right)

    // Conquer
    const result: ResultType = Merge from left and right

    return result
}
```

#### 典型示例

通过分治法遍历二叉树

```typescript
// 通过分治法遍历二叉树
function preorderTraversal(root: TreeNode): number[] {
    let result: number[] = []

    // 返回条件(null & leaf)
    if (!root) return result
    // 分治(Divide)
    let left: number[] = preorderTraversal(root.left)
    let right: number[] = preorderTraversal(root.right)
    // 合并结果(Conquer)
    result = result.push(root.Val)
    result = result.push(...left)
    result = result.push(...right)
    return result
}
```

#### 归并排序  

```typescript
function MergeSort(nums: number[]): number[] {
    return mergeSort(nums)
}
function mergeSort(nums: number[]): number[] {
    if (nums.length <= 1) return nums
    // divide
    const mid: number = Math.round(nums.length / 2)
    const left: number[] = mergeSort(nums.slice(0, mid))
    const right: number[] = mergeSort(nums.slice(mid))
    // conquer
    const result: number[] = merge(left, right)
    return result
}
function merge(left: number[], right: number[]): number[] {
    // 两边数组合并游标
    let l: number = 0
    let r: number = 0
    // 注意不能越界
    while (l < left.length && r < right.length) {
        // 谁小合并谁
        if (left[l] > right[r]) {
            result.push(right[r])
            r++
        } else {
            result.push(left[l])
            l++
        }
    }
    // 剩余部分合并
    result.push(...left.slice(l))
    result.push(...right.slice(r))
    return
}
```

注意点

> 递归需要返回结果用于合并

#### 快速排序  

```typescript
function QuickSort(nums: number[]): number[] {
	// 思路：把一个数组分为左右两段，左段小于右段，类似分治法没有合并过程
	quickSort(nums, 0, nums.length - 1)
	return nums
}
// 原地交换，所以传入交换索引
function quickSort(nums: number[], start: number, end: number): void {
	if (start < end) {
        // 分治法：divide
		const pivot = partition(nums, start, end)
		quickSort(nums, 0, pivot - 1)
		quickSort(nums, pivot + 1, end)
	}
}
// 分区
function partition(nums: number[], start: number, end: number): number {
	const p: number = nums[end] // 比较基准值
	let i: number = start
	for (let j: number = start; j < end; j++) {
		if (nums[j] < p) {
			swap(nums, i, j)
			i++
		}
	}
    // 把中间的值换为用于比较的基准值
	swap(nums, i, end)
	return i
}
function swap(nums: number[], i: number, j: number): void {
    nums[i, j] = nums[j, i]
}
```

注意点：

> 快排由于是原地交换所以没有合并过程
> 传入的索引是存在的索引（如：0、length-1 等），越界可能导致崩溃

常见题目示例

#### maximum-depth-of-binary-tree

[maximum-depth-of-binary-tree](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

> 给定一个二叉树，找出其最大深度。

思路：分治法

```typescript
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right))
}
```

#### balanced-binary-tree

[balanced-binary-tree](https://leetcode-cn.com/problems/balanced-binary-tree/)

> 给定一个二叉树，判断它是否是高度平衡的二叉树。

思路：分治法，左边平衡 && 右边平衡 && 左右两边高度 <= 1，
因为需要返回是否平衡及高度，要么返回两个数据，要么合并两个数据，
所以用-1 表示不平衡，>0 表示树高度（二义性：一个变量有两种含义）。

```typescript
function isBalanced(root: TreeNode | null): boolean {
    if (maxDepth(root) === -1) return false
    return true
}

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    const left: number = maxDepth(root.left)
    const right: number = maxDepth(root.right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
    return 1 + Math.max(left, right)
}
```

注意

> 一般工程中，结果通过两个变量来返回，不建议用一个变量表示两种含义

#### binary-tree-maximum-path-sum

[binary-tree-maximum-path-sum](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)

> 给定一个**非空**二叉树，返回其最大路径和。

思路：用 max 记录最大值，每次 dfs 去挑战该最大值。
每次 dfs 需要得出两个值：
一个值是当前子树的最大路径和（去挑战 max），由于是**当前子树**所以这个路径必然穿过根节点（否则就是子子树的最大路径和了）；
另一个值是提供给父节点的最大路径和（return 的值），由于父节点过来的无法既走左边又走右边，所以是当前节点加上单边的最大路径。
对于负数的处理在计算 left 和 right 时，如果当前子树的收益为负数则标记为 0，即它不产生贡献。

```typescript
function maxPathSum(root: TreeNode | null): number {
    let max = Number.MIN_SAFE_INTEGER
    const dfs = (root: TreeNode | null): number => {
        if (!root) return 0
        const left = Math.max(0, dfs(root.left))
        const right = Math.max(0, dfs(root.right))
        max = Math.max(max, root.val + left + right)
        return root.val + Math.max(left, right)
    }
    dfs(root)
    return max
}
```

#### lowest-common-ancestor-of-a-binary-tree

[lowest-common-ancestor-of-a-binary-tree](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)

> 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

思路：分治法，在左右两子树中都有公共祖先，则返回根结点；否则返回子树中的祖先

```javascript
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (left && right) return root
    return left ? left : right
};
```

### BFS 层次应用

#### binary-tree-level-order-traversal

[binary-tree-level-order-traversal](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

> 给你一个二叉树，请你返回其按  **层序遍历**  得到的节点值。 （即逐层地，从左到右访问所有节点）

思路：用一个队列记录一层的元素，然后扫描这一层元素添加下一层元素到队列（一个数进去出来一次，所以复杂度 O(logN)）

```typescript
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []
    let result: number[][] = []
    let queue: any[] = [] // 由于 leetcode 的 ts 引擎不好使...
    queue.push(root)
    while(queue.length) {
        let list: number[] = []
        const length = queue.length
        for (let i: number = 0; i < length; i++) {
            const node = queue.shift()
            list.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(list)
    }
    return result
};
```

#### binary-tree-level-order-traversal-ii

[binary-tree-level-order-traversal-ii](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

> 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

思路：在层级遍历的基础上，翻转一下结果即可

```typescript
function levelOrderBottom(root: TreeNode | null): number[][] {
    if (!root) return []
    let result: number[][] = []
    let queue: any[] = []
    queue.push(root)
    while(queue.length) {
        let list: number[] = []
        const length = queue.length
        for (let i: number = 0; i < length; i++) {
            const node = queue.shift()
            list.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(list)
    }
    return result.reverse()
};
```

#### binary-tree-zigzag-level-order-traversal

[binary-tree-zigzag-level-order-traversal](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)

> 给定一个二叉树，返回其节点值的锯齿形层次遍历。Z 字形遍历

```typescript
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return []
    let result: number[][] = []
    let queue: any[] = []
    let lr = true
    queue.push(root)
    while(queue.length) {
        let list: number[] = []
        const length = queue.length
        for (let i: number = 0; i < length; i++) {
            const node = queue.shift()
            list.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if (lr) {
            result.push(list)
        } else {
            result.push(list.reverse())
        }
        lr = !lr
    }
    return result
};
```

### 二叉搜索树应用

#### validate-binary-search-tree

[validate-binary-search-tree](https://leetcode-cn.com/problems/validate-binary-search-tree/)

> 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

```typescript
function isValidBST(root: TreeNode | null): boolean {
    return helper(root, -Infinity, +Infinity)
};

// 返回以 root 为根的树其节点是否都在 (lower, upper) 范围内
function helper(root: TreeNode | null, lower: number, upper: number): boolean {
    if (!root) return true
    if (root.val <= lower || root.val >= upper) return false
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}
```

其他思路：
- 中序遍历，检查结果列表是否已经有序
- 分治法，判断左 MAX < 根 < 右 MIN

#### insert-into-a-binary-search-tree

[insert-into-a-binary-search-tree](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)

> 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。

思路：找到最后一个叶子节点满足插入条件即可

```typescript
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return new TreeNode(val)
    if (val < root.val) root.left = insertIntoBST(root.left, val)
    if (val > root.val) root.right = insertIntoBST(root.right, val)
    return root
};
```

## 总结

- 掌握二叉树递归与非递归遍历
- 理解 DFS 前序遍历与分治法
- 理解 BFS 层次遍历

## 练习

- [x] [maximum-depth-of-binary-tree](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
- [x] [balanced-binary-tree](https://leetcode-cn.com/problems/balanced-binary-tree/)
- [x] [binary-tree-maximum-path-sum](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)
- [x] [lowest-common-ancestor-of-a-binary-tree](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [x] [binary-tree-level-order-traversal](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
- [x] [binary-tree-level-order-traversal-ii](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
- [x] [binary-tree-zigzag-level-order-traversal](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
- [x] [validate-binary-search-tree](https://leetcode-cn.com/problems/validate-binary-search-tree/)
- [x] [insert-into-a-binary-search-tree](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)
