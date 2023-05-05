(function () {
  const menuPage = document.getElementById("menu-page");
  const cartPage = document.getElementById("cart-page");
  const deliveryPage = document.getElementById("delivery-page");

  const newMenu = new Menu();
  const newCart = new Cart();

  DATA.forEach((product) => {
    const newProduct = new Product(
      product.image,
      product.name,
      product.weight,
      product.category,
      product.price
    );
    newMenu.addProduct(newProduct);
  });

  let handleHashChange = function (e) {
    e.preventDefault();
    let hash = location.hash.slice(1);
    switch (hash) {
      case "menupage":
        menuPage.classList.remove("hidden");
        cartPage.classList.add("hidden");
        deliveryPage.classList.add("hidden");
        printProducts(newMenu.allProducts, menuPage);
        break;
      case "cartpage":
        menuPage.classList.add("hidden");
        cartPage.classList.remove("hidden");
        deliveryPage.classList.add("hidden");
        printProducts(newCart.addedProducts, cartPage);
        break;
      default:
        menuPage.classList.remove("hidden");
        cartPage.classList.add("hidden");
        deliveryPage.classList.add("hidden");
        printProducts(newMenu.allProducts, menuPage);
        break;
    }
  };

  window.addEventListener("load", handleHashChange);
  window.addEventListener("hashchange", handleHashChange);

  function printProducts(products, container) {
    if (container === menuPage) {
      const searchSpan = document.createElement("span");
      const searchField = document.createElement("input");
      searchSpan.classList.add("search");
      searchField.setAttribute("id", "search-field");
      searchField.setAttribute("type", "text");
      searchField.setAttribute("placeholder", "Search..");

      searchSpan.append(searchField);
      container.innerHTML = "";
      container.append(searchSpan);

      products.forEach((product) => {
        const divEl = document.createElement("div");
        const imgEl = document.createElement("img");
        const namePara = document.createElement("p");
        const weightPara = document.createElement("p");
        const categoryPara = document.createElement("p");
        const qtyPara = document.createElement("p");
        const inputQty = document.createElement("input");
        const addBtn = document.createElement("button");

        imgEl.src = product.image;
        imgEl.classList.add("kebap-images");
        namePara.innerText = `Product name: ${product.name}`;
        weightPara.innerText = `Weight:  ${product.weight}`;
        categoryPara.innerText = `Category:  ${product.category}`;
        qtyPara.innerText = "Quantity: ";
        inputQty.setAttribute("type", "number");
        addBtn.setAttribute("type", "submit");
        addBtn.innerText = "Add to cart";

        addBtn.addEventListener("click", function () {
          if (inputQty.value > 0) {
            cartPage.innerText = "";
            newCart.addProduct(product, inputQty.value);
          }
        });
        divEl.append(
          imgEl,
          namePara,
          weightPara,
          categoryPara,
          qtyPara,
          inputQty,
          addBtn
        );
        divEl.classList.add("card");
        container.append(divEl);
      });
    } else if (container === cartPage) {
      products.forEach((product) => {
        const divElCart = document.createElement("div");
        const charPara = document.createElement("p");
        const removeBtn = document.createElement("button");
        const orderBtn = document.createElement("button");

        removeBtn.innerText = "X";
        removeBtn.addEventListener("click", function (e) {
          e.preventDefault();
          newCart.removeFromCart(product);
          divElCart.remove();
        });
        orderBtn.addEventListener("click", function () {
          menuPage.classList.add("hidden");
          cartPage.classList.add("hidden");
          deliveryPage.classList.remove("hidden");
        });
        orderBtn.innerText = "Order";
        charPara.innerText = `${
          newCart.addedProducts.indexOf(product) + 1
        }. Name: ${product.name} Price: ${product.price} Quantity: ${
          product.quantity
        }`;
        charPara.classList.add("cart-product");
        charPara.append(removeBtn);
        divElCart.append(charPara);
        divElCart.append(orderBtn);
        container.append(divElCart);
      });
    } else {
    }
    let search = document.getElementById("search-field");
    search.addEventListener("keyup", function (event) {
      event.preventDefault();
      let text = event.target.value;
      let filtered = newMenu.filter(text);
      if (text) {
        printProducts(filtered, menuPage);
      } else {
        printProducts(newMenu.allProducts, menuPage);
      }
    });
  }
})();
