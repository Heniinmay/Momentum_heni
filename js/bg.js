const body = document.body;
const images = [
    "0.jpg","1.jpg","2.jpg","3.jpg",'4.jpg'
];
const randomImg = images[Math.floor(Math.random() * images.length)];
// console.log(randomImg); == 2.jpg

const bgImg = document.createElement("img");

// console.log(bgImg); == <img>

// bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);

body.style.backgroundImage = `url(img/${randomImg})`;
body.style.backgroundSize = "cover";