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

//Variabelen
let button = document.querySelectorAll(".buttonClick");

button.forEach((btn) => {
    btn.addEventListener('click', event => {
        let waarde = event.target.dataset.waarde;
        // debugger;
        addItem(waarde);
    })
});

let Cart=[];

//Add Item
function addItem(waarde){
    for(let i = 0; i < Cart.length; i++){
        if(Cart[i].id === waarde){
            //Als dit waar is staat het item al in de winkelkar
            return;
        }
    }
    Cart.push(cartItems[waarde]);
   displayShoppingCart()
}


//remove Item
function removeItem(waarde) {
    waarde = waarde * 1;
    console.log("remove Item:--" + waarde + "--");

    for (let i = 0; i < Cart.length; i++) {
        if (Cart[i].id === waarde) {
            Cart.splice(i, 1)
        }
    }
    displayShoppingCart()
}
function total() {
    let totaal = 0;
    let korting = 0;
    for(let i = 0; i < Cart.length; i++){
        totaal += Cart[i].prijs;
    }
    if (Cart.length > 1){
        korting = (totaal/10);
    }
    totalePrijs = "€" + (totaal-korting);
    document.getElementById("standaardPrijs").innerHTML = totaal;
    document.getElementById("korting").innerHTML = "-" + korting;
    document.getElementById("totaalPrijs").innerHTML = totalePrijs;
}


//Display Item
function displayShoppingCart(){

    let cart_html = document.getElementById("shoppingCart");

    if(cart_html) {
        cart_html.innerHTML = "";

        // if (Cart.length === 0) {
        //     let uitleg = document.createElement("h4")
        //     let uitlegTekst = "Er zitten nog geen items in je winkelmandje!";
        //     uitleg.innerHTML = uitlegTekst;
        //
        //     cart_html.appendChild(div_Row1);
        // }
        // else{
        for (let i = 0; i < Cart.length; i++) {

            // elements createn
            let div_Row1 = document.createElement("div");
            let div_Row1_Col1 = document.createElement("div");
            let div_Row1_Col2 = document.createElement("div");

            let product_Naam = document.createElement("h4");
            let knop = document.createElement("button");
            let kruisje = document.createElement("i");

            kruisje.dataset.waarde = Cart[i].id;

            knop.addEventListener('click', function (e) {
                removeItem(e.target.dataset.waarde);
            });

            let uitleg = document.createElement("p");
            let prijs = document.createElement("h4");

            let div_Row1_Col3 = document.createElement("div");
            let div_Row1_Col4 = document.createElement("div");

            // input van de elements
            let product_Naam_tekst = Cart[i].titel;
            let uitleg_tekst = Cart[i].text;
            let prijs_tekst = "€" + Cart[i].prijs;

            //debugger;

            // op alle elements values toevoegen
            product_Naam.innerHTML = product_Naam_tekst;
            uitleg.innerHTML = uitleg_tekst;
            prijs.innerHTML = prijs_tekst;


            // alle classes (op de elements) & events bv remove button moet id hebbe en die moet for each hebbe om door te gaan
            div_Row1.classList.add('row');

            div_Row1_Col1.classList.add('col-8');
            div_Row1_Col2.classList.add('col-4');
            div_Row1_Col2.classList.add('right');

            div_Row1_Col3.classList.add('col-8');
            div_Row1_Col4.classList.add('col-4');
            div_Row1_Col4.classList.add('right');

            kruisje.classList.add('fa-solid');
            kruisje.classList.add('fa-x');

            // alle elementen op elkaar appenden. (bv: li op de ul, ul op de div etc)
            knop.appendChild(kruisje);
            div_Row1_Col2.appendChild(knop);
            div_Row1_Col1.appendChild(product_Naam);
            div_Row1.appendChild(div_Row1_Col1);
            div_Row1.appendChild(div_Row1_Col2);

            div_Row1_Col3.appendChild(uitleg);
            div_Row1_Col4.appendChild(prijs);
            div_Row1.appendChild(div_Row1_Col3);
            div_Row1.appendChild(div_Row1_Col4);

            //Add everything
            cart_html.appendChild(div_Row1);

        }
        // }
    }
        total();
        saveCart();
}

function loadCart(){
    if(localStorage.getItem("Cart")){
        Cart = JSON.parse(localStorage.getItem("Cart"));
    }
}

function saveCart(){
    localStorage.setItem("Cart", JSON.stringify(Cart));
}

loadCart();
displayShoppingCart();