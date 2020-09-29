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
