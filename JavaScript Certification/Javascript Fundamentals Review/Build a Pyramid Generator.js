function pyramid(char, count, isReversed) {
  let rows = [];

  for (let i = 1; i <= count; i++) {
    
    const row = " ".repeat(count - i) + char.repeat(2 * i - 1);
    
    if (isReversed) {
    
      rows.unshift(row);
    } else {
    
      rows.push(row);
    }
  }

  
  return "\n" + rows.join("\n") + "\n";
}

// Examples:
console.log(pyramid("*", 3, false)); // Standard
console.log(pyramid("#", 3, true));  // Inverted