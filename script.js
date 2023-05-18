//eerst alles inladen, tan pas showen//
window.addEventListener("load", function() {
    var container = document.getElementById("container");
    container.style.visibility = "visible";
});

// aantal personen geholpen//
window.addEventListener("load", function() {
    var counter = 9885;
    var counterSpan = document.getElementById("counter");

    function incrementCounter() {
        counter++;
        counterSpan.textContent = counter;
    }

    setInterval(incrementCounter, 10000);
});