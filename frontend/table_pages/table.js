function openAddItem() {
    document.getElementById("add-item-popout-id").style.display = "block";
  }

function closeAddItem() {
    document.getElementById("add-item-popout-id").style.display = "none";
}

document.getElementById("add-item-button").addEventListener("click", openAddItem);
document.getElementById("discard-add").addEventListener("click", closeAddItem);