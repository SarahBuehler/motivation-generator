function changeImage() {
    let image = document.getElementById('myImage');
    /* if (image.src.match("img/transparent.png")) {
        image.src = "img/pic01.jpg";
    } else {
        image.src = "img/pic02.jpg";
    } */
    image.src = randomArrayItem(imagesArray);
}

const imagesArray = ['img/pic01.jpg', 'img/pic02.jpg', 'img/pic03.jpg', 'img/pic04.jpg', 'img/pic05.jpg', 'img/pic06.jpg'];

function randomArrayItem(imagesArray) {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
}

console.log(randomArrayItem(imagesArray));
console.log(randomArrayItem(imagesArray));
console.log(randomArrayItem(imagesArray));
console.log(randomArrayItem(imagesArray));