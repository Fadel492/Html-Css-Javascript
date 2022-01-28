function changePosition() {
    let images = document.querySelectorAll("img");

    let a = images[0].src;
    images[0].src = images[1].src;
    images[1].src = images[2].src;
    images[2].src = a;
}