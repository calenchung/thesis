// var myImage = document.getElementById("mainImage");
//
// var imageArray = [
//   "../assets/imgs/S001-01-t10_01.jpg",
//   "../assets/imgs/S001-02-t10_01.jpg",
//   "../assets/imgs/S001-03-t10_01.jpg",
//   "../assets/imgs/S001-04-t10_01.jpg"
// ]
//
// var imageIndex = 1;
//
// function changeImage() {
//   myImage.setAttribute("src",imageArray[imageIndex]);
//   imageIndex++;
//   if (imageIndex >= imageArray.length) {
//     imageIndex = 1;
//   }
// }
//
// setInterval(changeImage,500);

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("mainImage").src = images[x];
}

var images = [], x = -1;
images[0] = "../assets/imgs/S002-01-t10_01.jpg";
images[1] = "../assets/imgs/S003-01-t10_01.jpg";
images[2] = "../assets/imgs/S004-01-t10_01.jpg";

setInterval(displayNextImage,500);
