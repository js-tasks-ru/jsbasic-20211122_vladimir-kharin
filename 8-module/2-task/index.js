import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {
      noNuts: false, // true/false
      vegeterianOnly: false, // true/false
      maxSpiciness: 4, // числа от 0 до 4
      category: '' // уникальный идентификатор категории товара
    };

    this.render();
    this.updateFilter(this.filters);

  }

  render() {
    this.elem = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner">
          <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        </div>
      </div>
    `)
  }

  updateFilter(filters) {
    console.log('FiltersUpdate');

    Object.assign(this.filters, filters);

    let productsGridInner = this.elem.querySelector('.products-grid__inner');
    productsGridInner.innerHTML = '';

    for (const item of this.products) {

      if (this.filters.noNuts) {if (item.nuts) continue};
      if (this.filters.vegeterianOnly) {if (!item.vegeterian) continue};
      if (item.spiciness > this.filters.maxSpiciness) continue;
      if (this.filters.category !== '') {if (this.filters.category !== item.category) continue}
      
      let productCard = new ProductCard (item);
      productsGridInner.append(productCard.elem)
      
    }
    
  }
}
