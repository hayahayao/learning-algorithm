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
