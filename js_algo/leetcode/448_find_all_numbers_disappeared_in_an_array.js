// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function (nums) {
  const length = nums.length;
  const obj = {};

  nums.forEach((element, index) => {
      obj[index+1] = 1;
  });

  return nums.map(element => {
      if (!obj[element]) {
          return element
      }
  })
};
