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

let cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
let heading = document.querySelector("#headerinfo h1");
heading.textContent = getName(rollType);

let image = document.querySelector("main img");
image.setAttribute("src", getSrc(rollType));