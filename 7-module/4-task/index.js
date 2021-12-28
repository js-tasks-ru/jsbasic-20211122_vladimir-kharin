import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {

  constructor({ steps, value = 0 }) {

    this.steps = steps;
    this.value = value;

    this.render();
    this.moveSlider(0);

    const thumb = this.elem.querySelector('.slider__thumb');
    thumb.ondragstart = () => false;

    this._clickEventListener = (event) => this.onClick(event);
    this.elem.addEventListener('click' , this._clickEventListener);

    this._pointermoveEventListener = (event) => this.onPointerMove(event);
    this._pointerdownEventListener = (event) => this.onPointerDown(event);
    this._pointerupEventListener = (event) => this.onPointerUp(event);

    this.elem.addEventListener('pointerdown' , this._pointerdownEventListener);
    document.addEventListener('pointerup' , this._pointerupEventListener);

  }

  onClick (event) {
    if( event.target.className !== 'slider__thumb') this.findPosSlider(event); 
  };
  
  onPointerDown (event) {
    event.preventDefault();
    if( event.target.className == 'slider__thumb') document.addEventListener('pointermove' , this._pointermoveEventListener);
  };

  onPointerMove (event) {

    event.preventDefault();
    this.elem.classList.add('slider_dragging');
    this.findPosSlider(event)
    
  }

  onPointerUp (event) {
    if(this.elem.classList.contains('slider_dragging')) {

      this.elem.classList.remove('slider_dragging');
      document.removeEventListener('pointermove' , this._pointermoveEventListener);
      this.findPosSlider(event)

    }
  }

  findPosSlider(event) {

    let shift;
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    
    if (leftRelative < 0) {
      leftRelative = 0;
    };
    
    if (leftRelative > 1) {
      leftRelative = 1;
    };
    
    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    this.value = value;

    if (this.elem.classList.contains('slider_dragging')) {
      shift = leftRelative * 100;
    } else {
      shift  = value / segments * 100;
    }

    this.moveSlider(shift);

    if (!this.elem.classList.contains('slider_dragging')){
      this.elem.dispatchEvent( new CustomEvent('slider-change', { 
        detail: this.value, 
        bubbles: true
      }));
    };

    let steps = this.elem.querySelector('.slider__steps').childNodes;
    for (let i=0; i < steps.length; i++) {
      if (i === this.value) steps[i].classList.add('slider__step-active');
      else steps[i].classList.remove('slider__step-active');
    }

  }

  moveSlider (shift) {
    this.elem.querySelector('.slider__value').innerHTML = this.value;
    this.elem.querySelector('.slider__thumb').style.left = `${shift}%`;
    this.elem.querySelector('.slider__progress').style.width = `${shift}%`;
  }

  render() {

    this.elem = createElement(`
      <div class="slider">
        <div class="slider__thumb" style="left: 50%;">
          <span class="slider__value">${this.value}</span>
        </div>
        <div class="slider__progress" style="width: 50%;"></div>
        <div class="slider__steps"></div>
      </div>
    `);


    for (let i = 0; i < this.steps; i++) {
      const span = createElement(`<span></span>`);
      if (i === this.value) span.classList.add('slider__step-active');
      this.elem.querySelector('.slider__steps').append(span);
    };

  }

}
