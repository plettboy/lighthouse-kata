const sumLargestNumbers = function(data) {
  // Put your solution here
  let firstLargest = 0
  let secondLargest = 0
  for(const num of data) {
    if (num > firstLargest) {
      num = firstLargest;
    }
  }
  for(const num of data) {
    if (num <= firstLargest) {
      num = secondLargest
    }
  }
  const sum = firstLargest + secondLargest;
  return sum;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));