function dropElements(arr, func) {
 
   const index = arr.findIndex(func);

  return index === -1 ? [] : arr.slice(index);
}

console.log(dropElements([1, 2, 3, 4], n => n >= 3)); // [3, 4]
console.log(dropElements([0, 1, 0, 1], n => n === 1)); // [1, 0, 1]
console.log(dropElements([1, 2, 3, 9, 2], n => n > 2)); // [3, 9, 2]