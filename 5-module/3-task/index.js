function initCarousel() {
  // ваш код...

  let shift = 0;

  const leftBtn = document.getElementsByClassName('carousel__arrow_left')[0];
  const rightBtn = document.getElementsByClassName('carousel__arrow_right')[0];
  const Slider = document.getElementsByClassName('carousel__inner')[0];
  const Width = Slider.children[1].offsetWidth;
  const RightLimit = -(Slider.children.length-1)*Width;

  arrowsCheck();

  leftBtn.addEventListener('click' , (e)=> {
    shift += Width;
    arrowsCheck();
    moveSlider(shift);
  });

  rightBtn.addEventListener('click' , (e)=> {
    shift -= Width;
    arrowsCheck();
    moveSlider(shift)
  });

  function arrowsCheck () {
    shift === 0 ? leftBtn.style.display = 'none' : leftBtn.style.display = '';
    shift === RightLimit ? rightBtn.style.display = 'none' : rightBtn.style.display = '';
  };

  function moveSlider (num) {
    Slider.style.transform = `translateX(${num}px)`
  }

}
