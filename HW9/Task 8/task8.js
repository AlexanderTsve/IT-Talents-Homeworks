(function () {
  const initialNumber = document.querySelector(".active").textContent;

  window.addEventListener("load", printTable(initialNumber));

  const numbersEl = document.querySelectorAll(".num");

  const leftArrow = document.getElementById("arrow-left");
  const rightArrow = document.getElementById("arrow-right");
  numbersEl.forEach((el) => {
    el.addEventListener("click", function (e) {
      deactivatePages(numbersEl);
      activatePagination(e.target);
    });
  });

  leftArrow.addEventListener("click", function () {
    const numbersArr = [...numbersEl];
    const activeElInd = numbersArr.indexOf(
      numbersArr.find((el) => el.classList.contains("active"))
    );
    deactivatePages(numbersEl);
    if (activeElInd === 0) {
      const lastElInd = numbersArr.indexOf(numbersArr[numbersArr.length - 1]);
      activatePagination(numbersEl[lastElInd]);
    } else {
      activatePagination(numbersEl[activeElInd - 1]);
    }
  });

  rightArrow.addEventListener("click", function () {
    const numbersArr = [...numbersEl];
    const activeElInd = numbersArr.indexOf(
      numbersArr.find((el) => el.classList.contains("active"))
    );
    deactivatePages(numbersEl);
    if (activeElInd === numbersArr.indexOf(numbersArr[numbersArr.length - 1])) {
      const el = numbersEl[0];
      activatePagination(el);
    } else {
      const el = numbersEl[activeElInd + 1];
      activatePagination(el);
    }
  });

  function deactivatePages(nodeList) {
    nodeList.forEach((num) => num.classList.remove("active"));
  }

  function activatePagination(el) {
    el.classList.add("active");
    printTable(el.textContent);
  }

  function printTable(el) {
    const number = Number(el);
    const container = document.querySelector("tbody");
    container.innerHTML = "";
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${number}&page=10&order=Desc`,
      {
        headers: {
          "x-api-key":
            "live_zWC21NGcyrq73TJeIAEqkGhldkKAiZXTARgALf1lDjcoptDesVy4WrV12zsF8Nv0",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        data.forEach((e) => {
          const tr = document.createElement("tr");
          const colId = document.createElement("td");
          const colImg = document.createElement("td");
          const imgLink = document.createElement("a");
          const img = document.createElement("img");
          const colImgWidth = document.createElement("td");
          const colImgHeight = document.createElement("td");

          imgLink.href = e.url;
          colId.textContent = e.id;
          img.src = e.url;
          colImgWidth.textContent = e.width;
          colImgHeight.textContent = e.height;

          colImg.append(imgLink);
          imgLink.append(img);
          tr.append(colId, colImg, colImgWidth, colImgHeight);
          container.append(tr);
        });
      })
      .catch(() => {
        const errorEl = document.createElement("p");
        errorEl.innerText = "Something went wrong...";
        document.body.append(errorEl);
      });
  }
})();
