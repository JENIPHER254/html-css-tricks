// selecting the slider container
let slider = document.querySelector(".slider");
// set initial counter to 0
let currentSlide = 0;
//select the length of all items and subtract 0 coz items start from 0---
let totalSlides = slider.querySelectorAll(".wrapper .left  > div").length - 1;
// controls for going up

slider.querySelector(".controls .up").addEventListener("click", function () {
  if (currentSlide == 0) {
    
    return;
   
  }
  currentSlide--;
 
  slider.querySelector(".wrapper .left div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper .right  div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
});

// controls for going down
slider.querySelector(".controls .down").addEventListener("click", function () {
  if (currentSlide == totalSlides) {
    return;
  }
  currentSlide++;
  slider.querySelector(".wrapper .left div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper .right div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
});
