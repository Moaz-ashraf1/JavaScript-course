var twoSum = (nums, target) => {
  const hashMap = new Map();
  for (let i = 0; i <= nums.length; i++) {
    let firstNum = nums[i];
    let secondNum = target - firstNum;

    if (hashMap.has(secondNum)) {
      return [i, hashMap.get(secondNum)];
    }
    hashMap.set(firstNum, i);
    debugger;
  }
};

twoSum([1, 2, 3, 4], 9);
