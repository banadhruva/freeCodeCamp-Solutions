function convertHTML(str) {
  
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

console.log(convertHTML("Dolce & Gabbana"));

console.log(convertHTML("Hamburgers < Pizza"));

console.log(convertHTML('Six "6"'));