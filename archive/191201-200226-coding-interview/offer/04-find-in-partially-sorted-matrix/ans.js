function Find(target, array)
{
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
