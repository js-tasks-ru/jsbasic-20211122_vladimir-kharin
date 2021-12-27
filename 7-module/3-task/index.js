import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {

  constructor({ steps, value = 0 }) {

    this.steps = steps;
    this.value = value;
    this.gaps = steps - 1;

    this.render();

    this.elem.addEventListener('click', (event) =>{
      
      console.log('moveThis = ',this,this.elem)

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let approximateValue = leftRelative * this.gaps;
      let value = Math.round(approximateValue);
      this.value = value;
      
      this.elem.querySelector('.slider__value').innerHTML = value;

      let valuePercents = value / this.gaps * 100;
      this.changePosSlider(valuePercents);

      let steps = this.elem.querySelector('.slider__steps').childNodes;
      for (let i=0; i < steps.length; i++) {
        if (i === value) steps[i].classList.add('slider__step-active');
        else steps[i].classList.remove('slider__step-active');
      }

    });

    // document.addEventListener('slider-change', (e)=>{
    //   console.log(e.detail)
    // })

  }

  changePosSlider(valuePercents) {

    this.elem.querySelector('.slider__thumb').style.left = `${valuePercents}%`;
    this.elem.querySelector('.slider__progress').style.width = `${valuePercents}%`;

    this.elem.dispatchEvent( new CustomEvent('slider-change', { 
      detail: this.value, 
      bubbles: true
    })
    );
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

    this.changePosSlider(0);

  }

}
