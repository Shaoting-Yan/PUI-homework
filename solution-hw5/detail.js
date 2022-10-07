let finalprice = document.querySelector('#price');

function updateprice(){
    const option = document.querySelector('#Glazing');
    const size = document.querySelector('#Packsize');
    let glazingPrice = parseFloat(option.value);
    let packSize = parseFloat(size.value);
    finalprice.textContent = "$" + (((getPrice(rollType) + glazingPrice)*packSize).toFixed(2)).toString();
}

const options = [
    {
        name: "Keep original",
        price: 0,
    },
    {
        name: "Sugar milk",
        price: 0,
    },
    {
        name: "Vanilla milk",
        price: 0.5,
    },
    {
        name: "Double chocolate",
        price: 1.5,
    },
];

const pack = [
    {
        size: "1",
        price: 1,
    },
    {
        size: "3",
        price: 3,
    },
    {
        size: "6",
        price: 5,
    },
    {
        size: "12",
        price: 10,
    },
];

let Glazing = document.querySelector('#Glazing');
let Packsize = document.querySelector('#Packsize');
let addtoCartbtn = document.querySelector('.button');

for (const option of options){
    const bar = document.createElement('option');
    bar.text = option.name;
    bar.value = option.price;
    Glazing.add(bar);
}

for (const size of pack){
    const bar = document.createElement('option');
    bar.text = size.size;
    bar.value = size.price;
    Packsize.add(bar);
}

Glazing.addEventListener('change',updateprice);
Packsize.addEventListener('change',updateprice);
addtoCartbtn.addEventListener('click',addtoCart);

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

function getName(key){
    let imageName = rolls[key]["imageFile"];
    imageName = imageName.replace(/.jpg/g, "");
    return result = imageName.replace(/-/g, " ");
}

function getSrc(key){
    let src = rolls[key]["imageFile"];
    return "asset/"+src;
}

function getPrice(key){
    let price = rolls[key]["basePrice"];
    return price;
}

let cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
let heading = document.querySelector("#headerinfo h1");
heading.textContent = getName(rollType);

let img = document.querySelector("main img");
img.setAttribute("src", getSrc(rollType));

finalprice.textContent = "$"+getPrice(rollType).toString();

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addtoCart(){
    const option = document.querySelector('#Glazing');
    const size = document.querySelector('#Packsize');
    let glazingPrice = parseFloat(option.value);
    let packSize = parseFloat(size.value);
    cart.push(new Roll(rollType, glazingPrice, packSize, getPrice(rollType)));
    console.log(cart);
}
