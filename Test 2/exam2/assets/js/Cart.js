class Cart {
  constructor(quantity) {
    this.addedProducts = [];
    this.quantity = quantity;
  }

  addProduct(product, quantity) {
    this.addedProducts.push(product);
    this.quantity = quantity;
  }

  removeFromCart(product) {
    if (this.addedProducts.includes(product)) {
      const index = this.addedProducts.indexOf(product);
      return this.addedProducts.splice(index, 1);
    }
  }
}
