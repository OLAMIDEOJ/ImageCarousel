let sliderImages = document.querySelectorAll('.slide'),
arrowLeft = document.querySelector('#arrow-left'),
arrowRight = document.querySelector('#arrow-right'),
current = 0;

//Clear all images
function reset(){
 for(i = 0; i < sliderImages.length; i++){
sliderImages[i].style.display = 'none';
 }
}

// Initialize the slider
function startSlide(){
 reset();
 sliderImages[0].style.display = 'block';
}

// Show Previous
function slideLeft() {
 reset();
 sliderImages[current - 1].style.display = 'block';
 current--;
}

// Show Next
function slideRight(){
 reset();
 sliderImages[current + 1].style.display = 'block';
 current++;
}

//Left arrow click
arrowLeft.addEventListener('click', function(){
 if(current === 0){
  current = sliderImages.length;
 }
 slideLeft();
});

//Right arrow click
arrowRight.addEventListener('click', function(){
 if(current === sliderImages.length - 1){
  current = - 1;
 }
 slideRight();
})

startSlide();