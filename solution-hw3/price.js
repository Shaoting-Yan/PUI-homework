let finalprice = document.querySelector('#price');

function updateprice(){
    const option = document.querySelector('#Glazing');
    const size = document.querySelector('#Packsize');
    let glazingPrice = parseFloat(option.value);
    let packPrice = parseFloat(size.value);
    finalprice.textContent = "$" + (((2.49 + glazingPrice)*packPrice).toFixed(2)).toString();
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