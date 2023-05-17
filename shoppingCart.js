//mogelijke pakketten voor in de shoppingcart.
let cartItems = [
    {
        id: 0,
        titel: "Starter",
        text: "10 vacatures, 50 matches, weergave op de website",
        prijs: 10
    },
    {
        id: 1,
        titel: "Uitgebreid",
        text: "15 vacatures, 100 matches, weergave op de website, persoonlijk gesprek met een matcher",
        prijs: 22
    },
    {
        id: 2,
        titel: "Professioneel",
        text: "15 vacatures, 100 matches, weergave op de website, persoonlijk gesprek met een matcher, Partner (logo op banner)",
        prijs: 35
    }
];

// Elke button selecteren met de zelfde klasse (ButtonClick). Deze allemaal samen oproepen. Na oproepen: foreach over buttons.
// Voor elke button in de for each een event listener. event on click. event.target.dataset.waarde. addItem(waarde);

//Variabelen
let button = document.querySelectorAll(".buttonClick");

button.forEach((btn) => {
    btn.addEventListener('click', event => {
        let waarde = event.target.dataset.waarde;
        addItem(waarde);
    })
});

//LOCAL STORAGE!!
// addItem RemoveIten en display Item

// if button.waarde == id -> voeg item toe aan winkelwagen

let Cart=[];

//Add Item
function addItem(waarde){
    for(let i = 0; i < shoppingCart.length; i++){
        if(Cart.id[i] === waarde){
            //Als dit waar is staat het item al in de winkel kar
            return;
        }
    }
    Cart.push(cartItems[waarde]);
    shoppingCart()
}


//remove Item
function removeItem(){

}

function total() {

}


//Display Item
function shoppingCart(){
    // elements createn
    let div_Row1 = document.createElement("div");
    let div_Row1_Col1 = document.createElement("div");
    let div_Row1_Col2 = document.createElement("div");

    let product_Naam = document.createElement("h4");
    let knop = document.createElement("button");
    let kruisje = document.createElement("i");

    let uitleg = document.createElement("p");
    let prijs = document.createElement("h4");

    let div_Row2 = document.createElement("div");
    let div_Row2_Col1 = document.createElement("div");
    let div_Row2_Col2 = document.createElement("div");

    // input van de elements
    let product_Naam_tekst = cartItems.titel[waarde];
    let uitleg_tekst = cartItems.text[waarde];
    let prijs_tekst = cartItems.prijs[waarde];

    // op alle elements values toevoegen
    product_Naam.appendChild(product_Naam_tekst);
    uitleg.appendChild(uitleg_tekst);
    prijs.appendChild(prijs_tekst);

    // alle classes (op de elements) & events bv remove button moet id hebbe en die moet for each hebbe om door te gaan
    div_Row1.classList.add('row');
    div_Row2.classList.add('row');

    div_Row1_Col1.classList.add('col-8');
    div_Row1_Col2.classList.add('col-4');
    div_Row1_Col2.classList.add('right');

    div_Row2_Col1.classList.add('col-8');
    div_Row2_Col2.classList.add('col-4');
    div_Row2_Col2.classList.add('right');

    kruisje.classList('fa-solid');
    kruisje.classList('fa-x');

    // alle elementen op elkaar appenden. (bv: li op de ul, ul op de div etc)
    knop.appendChild('kruisje');
    div_Row1_Col2.appendChild('knop');
    div_Row1_Col1.appendChild('product_Naam');
    div_Row1.appendChild('div_Row1_Col1');
    div_Row1.appendChild('div_Row1_Col2');

    div_Row2_Col1.appendChild('uitleg');
    div_Row2_Col2.appendChild('prijs');
    div_Row2.appendChild('div_Row2_Col1');
    div_Row2.appendChild('div_Row2_Col2');

}