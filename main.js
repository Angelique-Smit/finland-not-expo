document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let slides = document.getElementsByClassName("mySlides");

      if (slides.length === 0) {
          console.error("No elements with class 'mySlides' found in the DOM.");
          return;
      } else {
          console.log(`${slides.length} slides found. Initializing slideshow.`);
      }

      // Hide all slides initially
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      // Show the current slide
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].style.display = "block";

      // Set a timer to move to the next slide
      setTimeout(showSlides, 5000);
  }
});
