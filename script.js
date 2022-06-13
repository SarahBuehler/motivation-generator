function changeImage() {
    let image = document.getElementById('myImage');
    // console.log('image.src: ' + image.src); // bisheriger imgage.src
    const bisherigesImage = image.src;
    // console.log('bisherigesImate ' + bisherigesImage);

    // bisherige img zwischenspeichern
    image.src = randomArrayItem(imagesArray);
    // console.log('image.src neu: ' + image.src);

    // wenn das selbe img ausgewählt wird, dann nochmal aussuchen
    if (bisherigesImage === image.src) {
        image.src = randomArrayItem(imagesArray);
    }
    // if ()
}

const imagesArray = ['img/pic01.jpg', 'img/pic02.jpg', 'img/pic03.jpg', 'img/pic04.jpg', 'img/pic05.jpg', 'img/pic06.jpg', 'img/pic07.jpg', 'img/pic08.jpg', 'img/pic09.jpg'];
const //adjectives = ['awsome', 'great', 'remarkable', 'successful', 'unique', 'amazing', 'strong'];

function randomArrayItem(imagesArray) {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];

}