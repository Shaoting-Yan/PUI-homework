const glazingPrice = {"Keep original": 0,
                "Sugar milk": 0,
                "Vanilla milk": 0.5,
                "Double chocolate": 1.5,}

const packSizePrice = {1:1, 3:3, 6:5, 12:10}

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

function getPrice(key){
    let price = rolls[key]["basePrice"];
    return price;
}

function getName(key){
    let imageName = rolls[key]["imageFile"];
    imageName = imageName.replace(/.jpg/g, "");
    return result = imageName.replace(/-/g, " ");
}

function getTotal(){
    let total = 0;
    for (const item of cart){
        let curr = item.totalPrice();
        total += curr;
    }
    return total;
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
    totalPrice(){
        let glazing = glazingPrice[this.glazing];
        let size = packSizePrice[this.size];
        return ((getPrice(this.type) + glazing)*size);
    }
}

cart = [];

cart.push(new Roll("Original", "Sugar milk", 1, getPrice("Original")));
cart.push(new Roll("Walnut", "Vanilla milk", 12, getPrice("Walnut")));
cart.push(new Roll("Raisin", "Sugar milk", 3, getPrice("Raisin")));
cart.push(new Roll("Apple", "Keep original", 3, getPrice("Apple")));

function removeFromCart(event){
    let name = event.target.name;
    for( let i = 0; i < cart.length; i++){ 
        if ( cart[i].type === name){ 
            cart.splice(i, 1); 
        }
    }
    let mainDiv = document.querySelector("main div");
    mainDiv.innerHTML = '';
    displayItemInCart();
};

function displayItemInCart(){
    let chart = document.querySelector("main div")
    for (const item of cart){
        let type = item.type;
        let itemRow = document.createElement('div');
        itemRow.classList.add("itemrow");
        let img = document.createElement('img');
        img.setAttribute("src", "asset/" + rolls[type].imageFile);
        itemRow.appendChild(img);
        let div = document.createElement('div');
        let p = document.createElement('p');
        let h1 = document.createElement('h1');
        let text = getName(type) + "\nGlazing: " + item.glazing + "\nPackSize: " + item.size;
        p.textContent = text;
        div.appendChild(p);
        h1.textContent = "$"+item.totalPrice().toFixed(2);
        div.appendChild(h1);
        itemRow.appendChild(div);
        chart.appendChild(itemRow);
        let remove = document.createElement('p');
        remove.textContent = "remove";
        remove.classList.add("remove");
        remove.name=item.type;
        chart.appendChild(remove);
        remove.addEventListener('click',removeFromCart);
    }
    let hr = document.createElement("hr");
    hr.setAttribute("style", "height:5px; border:none; color:#000; background-color:#000;");
    chart.appendChild(hr);
    //update total price
    let totalPrice = document.querySelector("#total");
    totalPrice.textContent = "$" + getTotal().toFixed(2);
}

displayItemInCart();
