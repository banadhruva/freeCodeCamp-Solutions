function pairElement(str) {
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  return str.split("").map(base => {
    return [base, pairs[base]];
  });
}

console.log(pairElement("ATCGA")); 
