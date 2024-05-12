function openEditItemPopout() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("edit-item-popout-id").style.display = "block";
    document.getElementById("confirm-edit").style.display = "block";
    document.getElementById("discard-edit").style.display = "block";
    document.querySelector(".third-table").style.display = "block";
    document.querySelector(".edit-item-popout h1").style.display = "block";
}

function closeEditItemPopout() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("edit-item-popout-id").style.display = "none";
    document.getElementById("confirm-edit").style.display = "none";
    document.getElementById("discard-edit").style.display = "none";
    document.querySelector(".third-table").style.display = "none";
    document.querySelector(".edit-item-popout h1").style.display = "none";
}

document.getElementById("edit-link").addEventListener("click", openEditItemPopout);
document.getElementById("discard-edit").addEventListener("click", closeEditItemPopout);