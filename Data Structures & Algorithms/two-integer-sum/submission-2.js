class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let output = [0,0];
        for (let num of nums) {
            let num2 = target - num;
            let numsSlice = nums.slice(nums.indexOf(num)+1);
            let slicedLength = nums.indexOf(num)+1;
            if (numsSlice.indexOf(num2) > -1 ) {
               // nums = [8,5,4,3,5,6,5] target = 10 
                if( num == num2) { 
                    output = [nums.indexOf(num), numsSlice.indexOf(num2) + slicedLength ] }
                else {
                    output = [nums.indexOf(num),nums.indexOf(num2)];
                }
            
            return output;
            break
            }


        }
        
     
    }
}
