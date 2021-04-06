// 贪心
// 找出数组中所有的上涨段 然后将其累加起来
// 上涨 也就是说后一天减前一天是正的
// 那么我们可以将每个后一天减前一天 得到一个n-1长度的数组
// 然后求这个数组中所有正数的和
var maxProfit = function(prices) {
    let total = 0;
    for (let i = 1; i < prices.length; i++) {
        total += Math.max(0, prices[i] - prices[i - 1]);
    }
    return total;
};
