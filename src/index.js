var majorityElement = function(nums) {
  let obj = {};
  let n = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 0;
    obj[nums[i]]++;
    if (obj[nums[i]] > n) {
      return nums[i];
    }
  }
};

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
