import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let slideNum = 0;

    // document.addEventListener("DOMContentLoaded", () => {

      // });

    const Carousel = createElement(`
      <div class="carousel">
      </div>
    `);

    const LeftBtn = createElement(`
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `);

    LeftBtn.style.display = 'none';

    const RightBtn = createElement(`
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
    `)

    const CarouselInner = createElement(`
      <div class="carousel__inner">
      </div>
    `);

    Carousel.appendChild(CarouselInner);
    Carousel.appendChild(LeftBtn);
    Carousel.appendChild(RightBtn);
    
    LeftBtn.addEventListener('click' , (e)=> {
      slideNum--;
      arrowsCheck();
      moveCarouselInner(slideNum);
    });
  
    RightBtn.addEventListener('click' , (e)=> {
      slideNum++;
      arrowsCheck();
      moveCarouselInner(slideNum)
    });

    this.slides.map(slide=>{
      const elem = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);

      const Event = new CustomEvent("product-add", {
        detail: slide.id,
        bubbles: true
      });

      elem.addEventListener('product-add', (e)=> {
        console.log(e.detail)
      })
     
      elem.addEventListener('click', (e) => {
        if (e.target.closest('BUTTON.carousel__button')) e.target.dispatchEvent(Event)
      });

      CarouselInner.appendChild(elem);

    })

    
    Carousel.appendChild(CarouselInner);
    let slideLast = CarouselInner.children.length - 1;;

    function arrowsCheck () {
      slideNum === 0 ? LeftBtn.style.display = 'none' : LeftBtn.style.display = '';
      slideNum === slideLast ? RightBtn.style.display = 'none' : RightBtn.style.display = '';
    };

    function moveCarouselInner (slideNum) {
      const width = CarouselInner.children[slideNum].offsetWidth;
      CarouselInner.style.transform = `translateX(${-slideNum*width}px)`
    }

    this.elem = Carousel;
    
  };

}
