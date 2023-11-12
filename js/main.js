var trap = function(height) {
  let sum = 0

  let maxLeft = height[0]
  let maxRight = height[height.length - 1]

  let leftPointer = 1
  let rightPointer = height.length - 2

  while (leftPointer <= rightPointer) {
      if (maxLeft <= maxRight) {
          if (maxLeft - height[leftPointer] > 0) {
              sum += maxLeft - height[leftPointer]
          }

          maxLeft = Math.max(maxLeft, height[leftPointer])
          leftPointer++
      } else {
          if (maxRight - height[rightPointer] > 0) {
              sum += maxRight - height[rightPointer]
          }

          maxRight = Math.max(maxRight, height[rightPointer])
          rightPointer--
      }
  }

  return sum
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))