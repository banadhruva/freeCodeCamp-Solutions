
let inventory = [];

function findProductIndex(productName) {
  const lowerName = productName.toLowerCase();

  return inventory.findIndex(item => item.name.toLowerCase() === lowerName);
}

function addProduct(product) {
  const index = findProductIndex(product.name);

  if (index !== -1) {

    inventory[index].quantity += product.quantity;
    console.log(`${inventory[index].name} quantity updated`);
  } else {

    const newProduct = {
      name: product.name.toLowerCase(),
      quantity: product.quantity
    };
    inventory.push(newProduct);
    console.log(`${newProduct.name} added to inventory`);
  }
}

function removeProduct(productName, quantityToRemove) {
  const index = findProductIndex(productName);

  if (index === -1) {
    console.log(`${productName.toLowerCase()} not found`);
    return;
  }

  const product = inventory[index];

  // Case: Not enough quantity
  if (product.quantity < quantityToRemove) {
    console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`);
  } else {
    // Perform subtraction
    product.quantity -= quantityToRemove;

    // Case: Exactly zero remaining
    if (product.quantity === 0) {
      console.log(`Remaining ${product.name} pieces: 0`);
      inventory.splice(index, 1); // Remove object from array
    } else {
      // Case: Successfully subtracted
      console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
    }
  }
}