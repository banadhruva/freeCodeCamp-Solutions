const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// Tests 14 & 15: Open Lightbox and set full-size image
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const thumbSrc = item.src;
    // Removing '-thumbnail' from the string
    const fullSizeSrc = thumbSrc.replace('-thumbnail', '');
    
    lightboxImage.src = fullSizeSrc;
    lightbox.style.display = 'flex';
  });
});

// Test 16: Close via Button
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Test 17: Close via clicking the .lightbox element itself
lightbox.addEventListener('click', (e) => {
  // If the user clicks the dark background (the lightbox div)
  // rather than the image itself, it closes.
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});