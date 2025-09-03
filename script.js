//your JS code here. If required.
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', function() {
    lightboxImage.src = this.src; 
  });
});
