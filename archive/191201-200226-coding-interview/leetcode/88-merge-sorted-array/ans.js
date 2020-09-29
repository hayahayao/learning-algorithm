var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2)
    nums1.sort((a, b) => a - b)
};

var merge = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice()
    let p1 = 0
    let p2 = 0
    let p = 0
    while (p1 < m && p2 < n) {
        nums1[p++] = (nums1Copy[p1] < nums2[p2] ? nums1Copy[p1++] : nums2[p2++])
    }
    if (p1 < m) nums1.splice(p, m - p1, ...nums1Copy.slice(p1, m))
    else nums1.splice(p, n - p2, ...nums2.slice(p2, n))
};

var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1
    while (p1 >= 0 && p2 >= 0) {
        nums1[p--] = (nums1[p1] < nums2[p2]) ? nums2[p2--] : nums1[p1--]
    }
    if (p2 >= 0) nums1.splice(0, p2+1, ...nums2.slice(0, p2+1))
};
