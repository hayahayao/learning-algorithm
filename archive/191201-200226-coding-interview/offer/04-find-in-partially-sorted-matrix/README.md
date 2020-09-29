# 04：二维数组中的查找

## 题目描述

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。 

## 解题思路

从具体的例子中找出规律

每次都考察矩形的右上角元素：

- 如果该数字等于要查找的数字则查找结束；
- 如果该数字大于要查找的数字，说明该列均大于要查找的数字，可以删除该列；
- 如果该数字小于要查找的数字，说明该行均小于要查找的数字，可以删除该行。

## 实现

[newcoder](https://www.nowcoder.com/profile/670097550/codeBookDetail?submissionId=61917911)

```javascript
function Find(target, array) {
    if (array) {
        let col = array[0].length - 1
        let row = 0
        while (row < array.length && col >= 0) {
            if (target === array[row][col]) {
                return true
            }
            if (target < array[row][col]) {
                col--
            } else {
                row++
            }
        }
    }
    return false
}
```

