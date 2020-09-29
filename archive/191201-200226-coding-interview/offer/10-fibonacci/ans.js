function Fibonacci(n)
{
    let result = [0, 1]
    if (n < 2) return result[n]
    let fibNMinusOne = 1
    let fibNMinusTwo = 0
    let fibN = 0
    for (let i = 2; i <= n; i++) {
        fibN = fibNMinusOne + fibNMinusTwo
        fibNMinusTwo = fibNMinusOne
        fibNMinusOne = fibN
    }
    return fibN
}
