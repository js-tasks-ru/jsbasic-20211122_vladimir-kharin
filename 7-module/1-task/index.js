import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    const Ribbon = createElement(`<div class="ribbon"></div>`);    
    const BtnLeft = createElement(`
      <button class="ribbon__arrow ribbon__arrow_left ">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);
    const RibbonInner = createElement(`<nav class="ribbon__inner"></nav>`)
    const BtnRight = createElement(`
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);
    let BtnsCatgories = [];

    Ribbon.appendChild(BtnLeft);
    Ribbon.appendChild(RibbonInner);
    Ribbon.appendChild(BtnRight);

    this.categories.map(category=>{
     
      const Tail = ' ribbon__item_active';
      let classHere = 'ribbon__item';
      let idHere = category.id;
      if (category === categories[0]) classHere += Tail;
      if (category === categories[categories.length - 1]) idHere += Tail;
      const elem = createElement(`<a href="#" class="${classHere}" data-id="${idHere}">${category.name}</a>`);
      BtnsCatgories.push(elem);
      RibbonInner.appendChild(elem);
    })

    this.elem = Ribbon;

    BtnLeft.addEventListener('click' , ()=> {
      RibbonInner.scrollBy(-350,0)
    });

    BtnRight.addEventListener('click' , ()=> {
      RibbonInner.scrollBy(350,0) 
    });

    function checkSides () {

      const scrollWidth = RibbonInner.scrollWidth;
      const scrollLeft = RibbonInner.scrollLeft;
      const clientWidth = RibbonInner.clientWidth;
      const scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollRight === 0) BtnRight.classList.remove('ribbon__arrow_visible')
      else BtnRight.classList.add('ribbon__arrow_visible');

      if (scrollLeft < 1) BtnLeft.classList.remove('ribbon__arrow_visible')
      else BtnLeft.classList.add('ribbon__arrow_visible');      
    }

    RibbonInner.addEventListener('scroll' , (e) => {
      checkSides()
    })
    
    RibbonInner.addEventListener('click', (e)=> {

      if (e.target.className == 'ribbon__item') {
        e.preventDefault();

        BtnsCatgories.map((elem)=> {
          if (elem.dataset.id === e.target.dataset.id) {
            elem.classList.add('ribbon__item_active') 
          } else {
            elem.classList.remove('ribbon__item_active') 
          }
        })

        e.target.dispatchEvent(
          new CustomEvent('ribbon-select', {
              detail: e.target.dataset.id,
              bubbles: true
          })
        )
      }

    })

    this.elem.addEventListener('ribbon-select', (e)=> console.log('BOOM', e.detail))

  }
}
