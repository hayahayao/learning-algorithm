// 由于旋转之后的数组可以划分为两个排序好的子数组 而要找的最小值在后面那个子数组的第一个
// 因此可以用二分查找找到两个数组的边界（基于后面那个数组的值比前面那个数组的值都小）
var minArray = function(numbers) {
    let p1 = 0;
    let p2 = numbers.length - 1;
    let mid = p1;
    while (numbers[p1] >= numbers[p2]) {
        if (p2 - p1 === 1) {
            mid = p2;
            break;
        }
        mid = Math.round((p1 + p2) / 2);

        // 特殊情况处理
        // 如果 p1 p2 mid 指向的三个数字相等，则只能顺序查找
        if (numbers[p1] === numbers[p2] && numbers[mid] === numbers[p1]) {
            return minInOrder(numbers, p1, p2);
        }

        if (numbers[mid] >= numbers[p1]) p1 = mid;
        else if (numbers[mid] <= numbers[p2]) p2 = mid;
    }
    return numbers[mid];
};
var minInOrder = function(numbers, p1, p2) {
    let result = numbers[p1];
    for (let i = p1 + 1; i <= p2; i++) {
        if (result > numbers[i]) result = numbers[i];
    }
    return result;
}
