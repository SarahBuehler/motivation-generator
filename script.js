function changeImage() {
    let image = document.getElementById('myImage');
    // console.log('image.src: ' + image.src); // bisheriger imgage.src
    const bisherigesImage = image.src;
    // console.log('bisherigesImate ' + bisherigesImage);

    image.src = randomArrayItem(imagesArray);
    // console.log('image.src neu: ' + image.src);
    if (bisherigesImage === image.src) {
        image.src = randomArrayItem(imagesArray);
    }

    /*     const newImage = randomArrayItem(imagesArray);
        console.log('newImage: ' + newImage); // neuer imgage.src */


}

const imagesArray = ['img/pic01.jpg', 'img/pic02.jpg', 'img/pic03.jpg', 'img/pic04.jpg', 'img/pic05.jpg', 'img/pic06.jpg'];

function randomArrayItem(imagesArray) {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];

}