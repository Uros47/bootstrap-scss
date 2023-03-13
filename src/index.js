let modal = document.getElementById("modal-container");
let closeBtn = document.getElementById("closeBtn");

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
