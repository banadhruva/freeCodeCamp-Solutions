// Select all buttons
const buttons = document.querySelectorAll('.favorite-icon');

// Add a click listener to each button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // 8. If the button contains the class 'filled'
    if (this.classList.contains('filled')) {
      this.classList.remove('filled');
      this.innerHTML = '&#9825;'; // Change to empty heart
    } 
    // 9. If the button does NOT contain the class 'filled'
    else {
      this.classList.add('filled');
      this.innerHTML = '&#10084;'; // Change to filled heart
    }
  });
});