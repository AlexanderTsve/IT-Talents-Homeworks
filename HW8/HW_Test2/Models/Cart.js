class Cart {
  constructor() {
    this.addedProducts = [];
  }

  addProductToCart(product, quantity) {
    if (this.addedProducts.every((el) => el.name !== product.name)) {
      this.addedProducts.push(product);
      product.quantity = Number(quantity);
    } else {
      product.quantity += Number(quantity);
    }
  }

  removeFromCart(product) {
    if (this.addedProducts.includes(product)) {
      const index = this.addedProducts.indexOf(product);
      return this.addedProducts.splice(index, 1);
    }
  }

  calculateTotal() {
    let total = 0;
    this.addedProducts.forEach((product) => {
      total += product.price * Number(product.quantity);
    });
    return total.toFixed(2);
  }
}
