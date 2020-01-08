var findPairs = function(nums, k) {
    if (k < 0) {
        return 0
    }

    let count = 0
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    console.log(map)

    for (let i = 0; i < nums.length; i++) {
        //check to see that the pair is NOT itself
        if (map.has(nums[i] - k) && map.get(nums[i] - k) !== i) {
            map.delete(nums[i] - k)
            count++
        }
    }

    return count
};
