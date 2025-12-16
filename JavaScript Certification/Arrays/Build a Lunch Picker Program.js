// Create lunches array
let lunches = [];

// Add lunch to the end
function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

// Add lunch to the start
function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

// Remove last lunch
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removedLunch = arr.pop();
  console.log(`${removedLunch} removed from the end of the lunch menu.`);
  return arr;
}

// Remove first lunch
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removedLunch = arr.shift();
  console.log(`${removedLunch} removed from the start of the lunch menu.`);
  return arr;
}

// Get random lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return arr;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomLunch = arr[randomIndex];
  console.log(`Randomly selected lunch: ${randomLunch}`);
  return arr;
}
  function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + arr.join(", "));
  }
}
