function uniteUnique(...arrays) {

  const combined = arrays.flat();
  return [...new Set(combined)];
}