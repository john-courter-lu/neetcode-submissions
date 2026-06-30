class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // 创建一个哈希表，用来存储 [已经遍历过的数字 -> 它的数组下标] 的映射
        const prevMap = new Map(); 

        for (let i = 0; i < nums.length; i++) {
            // 计算当前数字想要凑成 target，还需要的“另一半”是多少
            const diff = target - nums[i]; 

            /* 
               【核心逻辑：向前看 Look Back】
               模拟：假设 nums = [2, 5, 7, 5, 11], target = 10
               
               - i = 0 (数字 2): diff = 8。prevMap 里没有 8。跳过 if，把 {2 => 0} 存入 map。
               - i = 1 (数字 5): diff = 5。prevMap 里没有 5。跳过 if，把 {5 => 1} 存入 map。
               - i = 2 (数字 7): diff = 3。prevMap 里没有 3。跳过 if，把 {7 => 2} 存入 map。
               - i = 3 (第二个 5): diff = 5。检查 prevMap.has(5) -> 找到了！就是 i=1 的那个 5。
            */
            if (prevMap.has(diff)) {
                // 如果在历史记录里找到了配对，直接返回：[先前数字的下标, 当前数字的下标]
                // 此时会成功返回 [1, 3]
                return [prevMap.get(diff), i]; 
            }

            // 如果没找到配对，就把当前数字和下标存入 Map，
            // 作为一个“潜在的配对对象”，等待后面的数字来找它。
            prevMap.set(nums[i], i); 
        }

        // 题目保证有解，理论上不会走到这里
        return []; 
    }
}