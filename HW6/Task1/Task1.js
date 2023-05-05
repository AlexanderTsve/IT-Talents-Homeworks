window.addEventListener("load", function () {
  document.querySelector("button").addEventListener("click", function () {
    const arrOfPhotos = [
      "images/image1.jpg",
      "images/image2.jpg",
      "images/image3.jpg",
      "images/image4.jpg",
    ];
    let currentPhotoIndex = Math.floor(Math.random() * arrOfPhotos.length);
    return (document.getElementById("result").innerHTML =
      '<img src="' + arrOfPhotos[currentPhotoIndex] + '" />');
  });
});
