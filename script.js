let nummer = 9885;

function verhoogNummer() {
    nummer += 10;
    document.getElementById("cijfer").innerHTML = nummer;
}

// Roep de functie elke 2 weken aan (in milliseconden)
setInterval(verhoogNummer, 1000 * 60 * 60 * 24 * 7 * 2);
