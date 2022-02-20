const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList = "background";
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

// bgImage 를  body에 추가
document.body.appendChild(bgImage);
