function sumAll(arr) {

  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  
  let totalSum = 0;

  for (let i = min; i <= max; i++) {
    totalSum += i;
  }

  return totalSum;
}
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10