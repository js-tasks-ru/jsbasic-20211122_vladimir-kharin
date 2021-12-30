export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {

    if (product) {
      let cartItem = this.cartItems.find(item => item.id == product.id)
      if (cartItem) cartItem.count++;
      else {
        cartItem = {product, count: 1};
        this.cartItems.push(cartItem);
      }
      this.onProductUpdate(cartItem);
    }
  }

  updateProductCount(productId, amount) {

    let cartItem = this.cartItems.find(item => item.product.id == productId);
    cartItem.count += amount;
    if (cartItem.count == 0) this.cartItems.splice(this.cartItems.indexOf(cartItem),1);
    this.onProductUpdate(cartItem);
  }

  isEmpty() {

    if (this.cartItems.length == 0) return true
    else return false;
  }

  getTotalCount() {

    let result = 0;
    for (const item of this.cartItems) {
      result += item.count
    };
    return result
  } 

  getTotalPrice() {

    let result = 0;
    for (const item of this.cartItems) {
      result += item.count * item.product.price
    };
    return result
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

