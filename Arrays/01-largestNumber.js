function findLargest(arr) {
  if (arr.length === 0) return null; 

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findLargest([3, 7, 1, 8, 4])); 