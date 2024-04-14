document.getElementById("home").addEventListener("click", directToHome);
document.getElementById("inventory_overall").addEventListener("click", directToOverAll);
document.getElementById("inventory_supply").addEventListener("click", directToSupply);
document.getElementById("inventory_property").addEventListener("click", directToProperty);

function directToHome() {
    window.location.href = "homePage.html";
}

function directToOverAll() {
    window.location.href = "../inventoryTables/overallInventory.html";
}

function directToSupply() {
    window.location.href = "../inventoryTables/supplyInventory.html";
}

function directToProperty() {
    window.location.href = "../inventoryTables/propertyInventory.html";
}