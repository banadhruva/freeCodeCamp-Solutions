function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    return sourceKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

const collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];

const source = { last: "Capulet" };

console.log(whatIsInAName(collection, source)); 
