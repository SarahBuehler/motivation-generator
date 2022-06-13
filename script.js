function changeImage() {
    const image = document.getElementById('myImage');
    const bisherigesImage = image.src;

    // bisherige img zwischenspeichern
    image.src = randomArrayItem(imagesArray);

    // wenn das selbe img ausgewählt wird, dann nochmal aussuchen
    if (bisherigesImage === image.src) {
        image.src = randomArrayItem(imagesArray);
    }
}

const imagesArray = ['img/pic01.jpg', 'img/pic02.jpg', 'img/pic03.jpg', 'img/pic04.jpg', 'img/pic05.jpg', 'img/pic06.jpg'];

function randomArrayItem(imagesArray) {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];

}