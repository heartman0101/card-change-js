const CardImg = document.querySelector('.card-imgs');
const Brand = document.getElementById('brand');
const Products = document.getElementById('product');
const Price = document.getElementById('price');
const BlackWhite = document.getElementById('black-white');
const Blues = document.getElementById('blues');
const Pinks = document.getElementById('pinks');
const Reds = document.getElementById('reds');
const White = document.getElementById('whitess');
const Blacktos = document.getElementById('blackss');
const Rare = document.querySelector(".rare");

BlackWhite.addEventListener('click', () => {
    CardImg.src = 'black-white.png';
    Products.innerHTML = "รองเท้า Nike สีขาวดำ";
    Brand.style.padding = "0.5rem";
    Brand.style.backgroundColor = "white";
    Brand.style.width = "70px";
    Brand.style.display = "flex";
    Brand.style.justifyContent = "center";
    Brand.style.marginBottom = "0.5rem";
    Brand.style.borderRadius = "20px";
    Brand.style.color = "black";
    Price.innerHTML = "6,600 ₿";
    Rare.style.display = "block";
})

Blues.addEventListener('click', () => {
    CardImg.src = 'blue.png';
    Products.innerHTML = "รองเท้า Nike สีฟ้า";
    Brand.style.padding = "0.5rem";
    Brand.style.backgroundColor = "rgb(0, 195, 255)";
    Brand.style.width = "70px";
    Brand.style.display = "flex";
    Brand.style.justifyContent = "center";
    Brand.style.marginBottom = "0.5rem";
    Brand.style.borderRadius = "20px";
    Brand.style.color = "white";
    Price.innerHTML = "4,200 ₿";
    Rare.style.display = "none";
})

Pinks.addEventListener('click', () => {
    CardImg.src = 'pink.png';
    Products.innerHTML = "รองเท้า Nike สีชมพู";
    Brand.style.padding = "0.5rem";
    Brand.style.backgroundColor = "rgb(249, 134, 189)";
    Brand.style.width = "70px";
    Brand.style.display = "flex";
    Brand.style.justifyContent = "center";
    Brand.style.marginBottom = "0.5rem";
    Brand.style.borderRadius = "20px";
    Brand.style.color = "white";
    Price.innerHTML = "5,400 ₿";
    Rare.style.display = "none";
})

Reds.addEventListener('click', () => {
    CardImg.src = 'red.png';
    Products.innerHTML = "รองเท้า Nike สีแดง";
    Brand.style.padding = "0.5rem";
    Brand.style.backgroundColor = "red";
    Brand.style.width = "70px";
    Brand.style.display = "flex";
    Brand.style.justifyContent = "center";
    Brand.style.marginBottom = "0.5rem";
    Brand.style.borderRadius = "20px";
    Brand.style.color = "white";
    Price.innerHTML = "5,400 ₿";
    Rare.style.display = "none";
})

White.addEventListener('click', () => {
    CardImg.src = 'white.png';
    Products.innerHTML = "รองเท้า Nike สีขาว";
    Brand.style.padding = "0.5rem";
    Brand.style.backgroundColor = "white";
    Brand.style.width = "70px";
    Brand.style.display = "flex";
    Brand.style.justifyContent = "center";
    Brand.style.marginBottom = "0.5rem";
    Brand.style.borderRadius = "20px";
    Brand.style.color = "black";
    Price.innerHTML = "2,200 ₿";
    Rare.style.display = "none";
})

Blacktos.addEventListener('click', () => {
    CardImg.src = 'ดำ.png';
    Products.innerHTML = "รองเท้า Nike สีดำ";
    Brand.style.padding = "0.5rem";
    Brand.style.backgroundColor = "black";
    Brand.style.width = "70px";
    Brand.style.display = "flex";
    Brand.style.justifyContent = "center";
    Brand.style.marginBottom = "0.5rem";
    Brand.style.borderRadius = "20px";
    Brand.style.color = "white";
    Price.innerHTML = "7,500 ₿";
    Rare.style.display = "block";
})