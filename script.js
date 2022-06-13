function changeImage() {
    let image = document.getElementById('myImage');
    if (image.src.match("img/weiß400x400.png")) {
        image.src = "img/pic01.jpg";
    } else {
        image.src = "img/pic02.jpg";
    }
}