# 03：数组中重复的数字

## 题目一：找出数组中重复的数字

### 题目描述

在一个长度为 n 的数组里的所有数字都在 0~n-1 的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。例如，如果输入长度为 7 的数组 {2,3,1,0,2,5,3}，那么对应的输出是重复的数字 2 或者 3。 

### 解题思路

1. **排序**：时间O(nlogn)

   先把输入的数组排序，之后从头到尾扫描数组找出重复的数字

2. **哈希表**：时间O(n)，空间O(n)

   从头到尾按顺序扫描数组的每个数字，每扫描到一个数字就用O(1)的时间判断哈希表中是否已经包含该数字。如果没有就将其加入表中；如果已经包含就找到一个重复的数字

3. **重排数组**：时间O(n)，空间O(1)

   由于数组中的数都在 0~n-1 范围内，且数组长度为 n，故若无重复数字应该是 `numbers[i] = i`

   按照这个想法逐渐将数组元素归到它该去的位置，而如果出现某一该去的位置有两个元素都想去，则找到重复的数字

   具体方法就是从头到尾扫描数组，当扫描到下标为`i`的数字时，首先看`numbers[i]`是不是等于 i：

   如果是则扫描下一个数字；如果不是则拿`numbers[i]`与`numbers[numbers[i]]`比较，如果两个数字相等则找到重复数字，不等就将其交换（试图把`numbers[i]`归到它该去的位置）

   接下来重复这个比较交换的过程，直到发现重复数字

**注意：**

- 无效情况（空指针；长度为 n 的数组中包含 0~n-1 之外的数字）


### 实现

```javascript
function duplicate(numbers, duplication) {
    // write code here
    // 找到任意重复的一个值并赋值到duplication[0]
    // 函数返回true/false
}
```

1. **排序** [nowcoder](https://www.nowcoder.com/profile/670097550/codeBookDetail?submissionId=61804091)

```javascript
function duplicate(numbers, duplication) {
    // 思路1：排序
    if (numbers) {
        numbers.sort()
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0 || numbers[i] > numbers.length - 1) {
                return false
            }
            if (numbers[i] === numbers[i + 1]) {
                duplication[0] = numbers[i]
                return true
            }
        }
    }
    return false
}
```

2. **哈希表** [nowcoder](https://www.nowcoder.com/profile/670097550/codeBookDetail?submissionId=61804181)

```javascript
function duplicate(numbers, duplication) {
    // 思路2：哈希表
    if (numbers) {
        let flags = []
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0 || numbers[i] > numbers.length - 1) {
                return false
            }
            if (flags[numbers[i]]) {
                duplication[0] = numbers[i]
                return true
            } else {
                flags[numbers[i]] = true
            }
        }
    }
    return false
}
```

3. **重排数组**[nowcoder](https://www.nowcoder.com/profile/670097550/codeBookDetail?submissionId=61804877 )（注意交换的时候，写`[a, b] = [b, a]`这种语法要把`numbers[numbers[i]]`放在前面，不然会先给`numbers[i]`赋值就找不到`numbers[numbers[i]]`了）

```javascript
function duplicate(numbers, duplication) {
    // 思路3：重排数组
    if (numbers) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0 || numbers[i] > numbers.length - 1) {
                return false
            }
            while (numbers[i] !== i) {
                if (numbers[i] === numbers[numbers[i]]) {
                    duplication[0] = numbers[i]
                    return true
                }
                [numbers[numbers[i]], numbers[i]] = [numbers[i], numbers[numbers[i]]]
            }
        }
    }
    return false
}
```

## 题目二：不修改数组找出重复的数字

### 题目描述

在一个长度为 n+1 的数组里的所有数字都在 1~n 的范围内，所以数组中至少有一个数字是重复的。请找出数组中任意一个重复的数字，但不能修改输入的数组。例如，如果输入长度为 8 的数组 {2,3, 5, 4, 3, 2, 6, 7}，那么对应的输出是重复的数字 2 或者 3。

### 解题思路

1. **哈希表**（同前）：时间O(n)，空间O(n)

2. **类似二分查找**：时间O(nlogn)，空间O(1)

   将 1~n 的数字从中间的数字 m 分成两部分：

   如果前半段 1~m 的数字的数目超过 m，则这一段的区间中一定包含重复的数字；否则另一半包含

   继续一分为二，直到找到一个重复数字

**注意：**

- 类似二分查找这种方法不能保证找出所有重复的数字，例如 {2, 3, 5, 4, 3, 2, 6, 7} 中不能找出重复的数字 2。因为在 1~2 的范围内有 1 和 2 两个数字，这个范围的数字也出现了 2 次，此时用该算法不能确定是每个数字各出现一次还是某个数字出现了两次

### 实现

```javascript
function getDuplication(numbers) {
    if (numbers) {
        let start = 1
        let end = numbers.length - 1
        while (end >= start) {
            let middle = start + Math.floor((end - start) / 2)
            let count = countRange(numbers, start, middle)
            if (end === start) {
                if (count > 1) return start
                else break
            }
            if (count > (middle - start + 1)) end = middle
            else start = middle + 1
        }
    }
    return -1
}
function countRange(numbers, start, end) {
    if (!numbers) return 0
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= start && numbers[i] <= end) count++
    }
    return count
}
```

   