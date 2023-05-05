(function () {
  const menuPage = document.getElementById("menu-page");
  const cartPage = document.getElementById("cart-page");
  const deliveryPage = document.getElementById("delivery-page");
  const loginPage = document.getElementById("login-page");
  const registerPage = document.getElementById("registration-page");

  let search = document.getElementById("search-field");

  const menuListItem = document.getElementById("menu-element");
  const cartIcon = document.getElementById("cart-icon");
  const registrationLoginEl = document.getElementById(
    "registration-login-element"
  );

  const newMenu = new Menu();
  const newCart = new Cart();
  const newDeliveryManager = new DeliveryManager();
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
    search.classList.add("hidden");
    let hash = location.hash.slice(1);
    switch (hash) {
      case "login-page":
        loginPage.classList.remove("hidden");
        registerPage.classList.add("hidden");
        menuPage.classList.add("hidden");
        cartPage.classList.add("hidden");
        deliveryPage.classList.add("hidden");
        menuListItem.classList.add("hidden");
        cartIcon.classList.add("hidden");
        registrationLoginEl.classList.remove("hidden");
        break;
      case "registration-page":
        loginPage.classList.add("hidden");
        registerPage.classList.remove("hidden");
        menuPage.classList.add("hidden");
        cartPage.classList.add("hidden");
        deliveryPage.classList.add("hidden");
        menuListItem.classList.add("hidden");
        cartIcon.classList.add("hidden");
        registrationLoginEl.classList.remove("hidden");
        break;
      case "menu-page":
        menuPage.innerHTML = "";
        loginPage.classList.add("hidden");
        registerPage.classList.add("hidden");
        menuPage.classList.remove("hidden");
        cartPage.classList.add("hidden");
        deliveryPage.classList.add("hidden");
        search.classList.remove("hidden");
        menuListItem.classList.remove("hidden");
        cartIcon.classList.remove("hidden");
        registrationLoginEl.classList.add("hidden");
        printProducts(newMenu.allProducts, menuPage);
        break;
      case "cart-page":
        cartPage.innerHTML = "";
        loginPage.classList.add("hidden");
        registerPage.classList.add("hidden");
        menuPage.classList.add("hidden");
        cartPage.classList.remove("hidden");
        deliveryPage.classList.add("hidden");
        menuListItem.classList.remove("hidden");
        cartIcon.classList.remove("hidden");
        registrationLoginEl.classList.add("hidden");
        printProducts(newCart.addedProducts, cartPage);
        printDeliveryHistory(newDeliveryManager.historyOfDeliveries, cartPage);
        break;
      case "delivery-page":
        loginPage.classList.add("hidden");
        registerPage.classList.add("hidden");
        menuPage.classList.add("hidden");
        cartPage.classList.add("hidden");
        deliveryPage.classList.remove("hidden");
        menuListItem.classList.remove("hidden");
        cartIcon.classList.remove("hidden");
        registrationLoginEl.classList.add("hidden");
        break;
      default:
        loginPage.classList.remove("hidden");
        registerPage.classList.add("hidden");
        menuPage.classList.add("hidden");
        cartPage.classList.add("hidden");
        deliveryPage.classList.add("hidden");
        menuListItem.classList.add("hidden");
        cartIcon.classList.add("hidden");
        registrationLoginEl.classList.remove("hidden");
        break;
    }
  };

  window.addEventListener("load", handleHashChange);
  window.addEventListener("hashchange", handleHashChange);

  function removeAllFromEmptyCart(cart) {
    if (cart.addedProducts.length === 0) {
      cartPage.innerHTML = "Нямате продукти в количката!";
    }
  }
  function printProducts(products, container) {
    if (container === menuPage) {
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
        namePara.innerText = "Име на продукт: " + "\n" + product.name;
        weightPara.innerText = `Грамаж:  ${product.weight}`;
        categoryPara.innerText = `Категория:  ${product.category}`;
        qtyPara.innerText = "Количество: ";
        inputQty.setAttribute("type", "number");
        addBtn.setAttribute("type", "submit");
        addBtn.innerText = "Добави в количка";
        addBtn.addEventListener("click", function () {
          if (inputQty.value > 0) {
            newCart.addProductToCart(product, inputQty.value);
            showProductsInCart(newCart.addedProducts);
            inputQty.value = "";
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
      removeAllFromEmptyCart(newCart);
      if (newCart.addedProducts.length > 0) {
        const tableWithOrders = document.createElement("table");
        const headerRow = document.createElement("tr");
        const countHeading = document.createElement("th");
        const nameHeading = document.createElement("th");
        const priceHeading = document.createElement("th");
        const qtyHeading = document.createElement("th");
        const removeHeading = document.createElement("th");
        countHeading.innerText = "No.";
        nameHeading.innerText = "Име";
        priceHeading.innerText = "Цена";
        qtyHeading.innerText = "Количество";
        removeHeading.innerText = "Премахни";
        headerRow.append(
          countHeading,
          nameHeading,
          priceHeading,
          qtyHeading,
          removeHeading
        );
        tableWithOrders.append(headerRow);
        const orderBtn = document.createElement("button");
        const orderTotal = document.createElement("span");
        orderBtn.addEventListener("click", function () {
          menuPage.classList.add("hidden");
          cartPage.classList.add("hidden");
          deliveryPage.classList.remove("hidden");
          search.classList.add("hidden");
          location.hash = "#delivery-page";
        });
        orderBtn.innerText = "Поръчай";
        orderBtn.classList.add("order-btn");
        orderTotal.innerText = `Общо: ${newCart.calculateTotal()} лв.`;
        orderTotal.classList.add("order-total");
        products.forEach((product) => {
          const elRow = document.createElement("tr");
          const colNum = document.createElement("td");
          const colName = document.createElement("td");
          const colPrice = document.createElement("td");
          const colQty = document.createElement("td");
          const colRemove = document.createElement("td");
          const removeBtn = document.createElement("button");
          removeBtn.innerText = "X";
          removeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            newCart.removeFromCart(product);
            elRow.remove();
            removeAllFromEmptyCart(newCart);
            orderTotal.innerText = `Общо: ${newCart.calculateTotal()} лв.`;
            showProductsInCart(newCart.addedProducts);
            cartPage.innerHTML = "";
            printProducts(newCart.addedProducts, cartPage);
          });
          colNum.innerText = newCart.addedProducts.indexOf(product) + 1;
          colName.innerText = product.name;
          colPrice.innerText = `${product.price.toFixed(2)}лв. X ${
            product.quantity
          } бр. = ${(product.price * product.quantity).toFixed(2)} лв.`;
          colQty.innerText = `${product.quantity} бр.`;
          colRemove.append(removeBtn);
          elRow.append(colNum, colName, colPrice, colQty, colRemove);
          tableWithOrders.append(elRow);
        });
        container.append(tableWithOrders);
        container.append(orderBtn);
        container.append(orderTotal);
      }
    }
  }
  function showProductsInCart(arrOfProducts) {
    const cart = document.querySelectorAll(".cart")[1];
    let tooltipTitle = cart.getAttribute("title");
    tooltipTitle = "";
    cart.setAttribute("title", tooltipTitle);
    arrOfProducts.forEach((product) => {
      tooltipTitle +=
        "\n" + `${product.name} :` + "\n" + `${product.quantity} бр.`;
    });
    cart.setAttribute("title", tooltipTitle);
  }

  let searching = function (event) {
    event.preventDefault();
    menuPage.innerHTML = "";
    let text = event.target.value;
    let filtered = newMenu.filter(text);
    if (text) {
      printProducts(filtered, menuPage);
    } else {
      printProducts(newMenu.allProducts, menuPage);
    }
  };
  search.addEventListener("input", searching);
  const deliveryBtn = document.getElementById("delivery-btn");
  deliveryBtn.addEventListener("click", createNewDelivery);
  function createNewDelivery(e) {
    e.preventDefault();
    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let addressInput = document.getElementById("address");
    const price = document
      .querySelector(".order-total")
      .textContent.slice(5, -4);
    if (
      nameInput.value &&
      phoneInput.value.length === 10 &&
      addressInput.value
    ) {
      const newDelivery = new Delivery(
        new Date().toLocaleDateString(),
        new Date().toLocaleTimeString(),
        price,
        addressInput.value
      );
      newDelivery.deliveredProducts.push(newCart.addedProducts);
      newDeliveryManager.addToHistory(newDelivery);
      newCart.addedProducts = [];
      showProductsInCart(newCart.addedProducts);
      nameInput.value = "";
      phoneInput.value = "";
      addressInput.value = "";
    }
  }
  function printDeliveryHistory(arrayOfDel, container) {
    if (arrayOfDel.length > 0) {
      const historyTable = document.createElement("table");
      const historyHeading = document.createElement("tr");
      const dateHeading = document.createElement("th");
      const addressHeading = document.createElement("th");
      const productsDelHeading = document.createElement("th");
      const totalPriceHeading = document.createElement("th");
      dateHeading.innerText = "Дата на поръчката";
      addressHeading.innerText = "Адрес за поръчката";
      productsDelHeading.innerText = "Поръчани продукти - бройки";
      totalPriceHeading.innerText = "Обща стойност на поръчката";
      historyHeading.append(
        dateHeading,
        addressHeading,
        productsDelHeading,
        totalPriceHeading
      );
      historyTable.append(historyHeading);
      historyTable.classList.add("history-table");
      arrayOfDel.forEach((delivery) => {
        const date = delivery.date;
        const time = delivery.time;
        const addressOfDel = delivery.address;
        const priceOfDel = delivery.totalPrice;
        const tableRow = document.createElement("tr");
        const dateData = document.createElement("td");
        const addressData = document.createElement("td");
        const productsData = document.createElement("td");
        const priceData = document.createElement("td");
        dateData.innerText = `${date}, ${time}`;
        addressData.innerText = `${addressOfDel}`;
        delivery.deliveredProducts.forEach((arrOfProducts) => {
          arrOfProducts.forEach((product) => {
            const name = product.name;
            const count = product.quantity;
            productsData.innerText += "\n" + `${name} - ${count} бр.`;
          });
        });
        priceData.innerText = `${priceOfDel}`;
        tableRow.append(dateData, addressData, productsData, priceData);
        historyTable.append(tableRow);
      });
      container.append(historyTable);
    }
  }
})();
