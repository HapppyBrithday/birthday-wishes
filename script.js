var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("translucent-box");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 4 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

let current = 0;
let previous = 0;
const images = document.querySelectorAll('.pic img');
const totalImages = images.length;
const backgroundElement = document.querySelector('.background');

// Function to change the image and background
function changeImage() {
  images[current].classList.remove('active');
  current = (current + 1) % totalImages;
  images[current].classList.add('active');

  // Change the background image to match the previous image
  const imageUrl = images[previous].src;
  backgroundElement.style.backgroundImage = `url(${imageUrl})`;

  // Update the previous image index
  previous = current;
}

// Set the interval for changing images and background
setInterval(changeImage, 3000); // Change image and background every 3 seconds
