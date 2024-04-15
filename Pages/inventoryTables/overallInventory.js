document.getElementById("home").addEventListener("click", directToHome);
document.getElementById("inventory_overall").addEventListener("click", directToOverAll);
document.getElementById("inventory_supply").addEventListener("click", directToSupply);
document.getElementById("inventory_property").addEventListener("click", directToProperty);

function directToHome() {
    window.location.href = "../home/homePage.html";
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

window.addEventListener('load', generateTable);
//window.addEventListener('load', getOverallData);

async function generateTable() {
    let result = await getOverallData();
    var table = document.getElementById("overall");
    var cellLen = document.getElementById('tableHeader').cells.length;
    
    for (x in result) {
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
        var cell8 = row.insertCell(8);
        var cell9 = row.insertCell(9);
        cell0.innerHTML = result[x].date;
        cell1.innerHTML = result[x].supplier;
        cell2.innerHTML = result[x].item;
        cell3.innerHTML = result[x].item_type;
        cell4.innerHTML = result[x].unit;
        cell5.innerHTML = result[x].quantity;
        cell6.innerHTML = result[x].price_per_unit;
        cell7.innerHTML = result[x].total_price;
        cell8.innerHTML = result[x].department;
        cell9.innerHTML = result[x].expiry_date;
       
    }

}

async function getOverallData() {

    const url = 'http://localhost:8080/item';
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    };

    let result;

    try {
        const response = await fetch(url, options);
        result = await response.json();
        //console.log(result);
    } catch (error) {
        console.error(error);
    }

    return result;

}