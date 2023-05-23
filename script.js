/*//eerst alles inladen, dan pas showen//
window.addEventListener("load", function() {
    var container = document.getElementById("container");
    container.style.visibility = "visible";
    var container_fluid = document.getElementById("container-fluid");
    container_fluid.style.visibility = "visible";

});*/

// aantal personen geholpen//
window.addEventListener("load", function() {
    let counter = 9885;
    let counterSpan = document.getElementById("counter");

    function incrementCounter() {
        counter++;
        counterSpan.textContent = counter;
    }

    setInterval(incrementCounter, 10000);
});