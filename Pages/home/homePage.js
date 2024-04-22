let role = localStorage.getItem('section');

document.getElementById("home").addEventListener("click", directToHome);
document.getElementById("inventory_overall").addEventListener("click", directToOverAll);
document.getElementById("inventory_supply").addEventListener("click", directToSupply);
document.getElementById("inventory_property").addEventListener("click", directToProperty);

function directToHome() {
    window.location.href = "../home/homePage.html";
}

function directToOverAll() {
    window.location.href = "../inventoryTables/overallInventory.html";
    localStorage.setItem('page','overall');
}

function directToSupply() {
    window.location.href = "../inventoryTables/supplyInventory.html";
    localStorage.setItem('page','Supplies');
}

function directToProperty() {
    window.location.href = "../inventoryTables/propertyInventory.html";
    localStorage.setItem('page','Properties');
}

window.addEventListener('load', hideTabs);

function hideTabs() {
    if (role != "Admin") {
        document.getElementById("inventory_overall").style.visibility = "hidden";
    }

    if (role == "Supplies") {
        document.getElementById("inventory_property").style.visibility = "hidden";
    }
    if (role == "Properties") {
        document.getElementById("inventory_supply").style.visibility = "hidden";
    }
    
}