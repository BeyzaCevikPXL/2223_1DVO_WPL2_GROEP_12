window.addEventListener("load", function() {
    var modal = document.getElementById("myModal");
    var openModalBtn = document.getElementById("openModalBtn");
    var closeModalBtn = document.getElementById("closeModal");

    function openModal(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        window.location.href = "supplementen.html";
    }

    openModalBtn.addEventListener("click", openModal);

    closeModalBtn.addEventListener("click", closeModal);
});
