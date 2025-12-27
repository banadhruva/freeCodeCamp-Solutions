function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;

  while (currNumber <= num) {
    
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    
    let nextNumber = prevNumber + currNumber;
    prevNumber = currNumber;
    currNumber = nextNumber;
  }

  return result;
}

console.log(sumFibs(4));   // 5 (1 + 1 + 3)
console.log(sumFibs(10));  // 10 (1 + 1 + 3 + 5)
console.log(sumFibs(1000));// 1785