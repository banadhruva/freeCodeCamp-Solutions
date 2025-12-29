const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

const MAX_CHARS = 50;

textInput.addEventListener('input', () => {
  let currentText = textInput.value;

  if (currentText.length > MAX_CHARS) {
    currentText = currentText.substring(0, MAX_CHARS);
    textInput.value = currentText;
  }

  const length = currentText.length;
  charCount.textContent = `Character Count: ${length}/${MAX_CHARS}`;

  if (length === MAX_CHARS) {
    charCount.style.colcor = 'red';
  } else {
    charCount.style.color = 'black'; // Or your default color
  }
});