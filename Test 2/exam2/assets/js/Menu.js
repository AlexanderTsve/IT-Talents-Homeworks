class Menu {
  constructor() {
    this.allProducts = [];
  }
  addProduct(product) {
    if (!this.allProducts.includes(product)) {
      this.allProducts.push(product);
    }
  }

  filter(text) {
    if (typeof text === "string" && text.trim().length > 0) {
      let filtered = [];
      text = text.toLowerCase();
      this.allProducts.forEach((product) => {
        if (product.name.toLowerCase().includes(text)) {
          filtered.push(product);
        }
      });
      return filtered;
    }
  }
}
