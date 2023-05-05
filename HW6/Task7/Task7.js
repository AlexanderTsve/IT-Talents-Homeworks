window.addEventListener("load", function () {
  document.getElementById("submit-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const product = document.querySelector("#products");
    const clientList = document.querySelector(".client-list");
    const arrOfProducts = [];
    let arrOfEl = [];
    if (product.value !== "Default") {
      arrOfProducts.push(product.value);
      const currentEl = document.createElement("section");
      const removeBtn = document.createElement("button");
      const remove = document.createTextNode(`Remove ${product.value}`);
      removeBtn.appendChild(remove);
      clientList.appendChild(currentEl);
      arrOfEl = [...document.getElementsByTagName("section")];
      const currentElText = document.createTextNode(`+ ${product.value}`);
      currentEl.appendChild(currentElText);
      currentEl.appendChild(removeBtn);
      const currentSection =
        document.querySelectorAll("section")[arrOfEl.indexOf(currentEl)];
      currentSection.addEventListener("click", function (e) {
        e.preventDefault();
        currentSection.classList.toggle("list-item-decorated");
      });
      removeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        currentSection.classList.add("removed-element");
      });
      product.value = "Default";
    }
  });
});
