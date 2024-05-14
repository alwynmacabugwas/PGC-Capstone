async function setItemId() {
    const itemIdInput = document.getElementById("item-id");
    const itemId = document.getElementById("item-id").value;
    const item = document.getElementById("item").value;
    const unit = document.getElementById("unit").value;
    const type = document.getElementById("item-type").value;

    const url = 'http://localhost:8080/itemId/register/expendable';
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "itemId": itemId,
            "item": item,
            "unit": unit,
            "type": type
        }),
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

async function getItemId() {
    const itemId = document.getElementById("item-id").value;
    const item = document.getElementById("item").value;
    const unit = document.getElementById("unit").value;
    const type = document.getElementById("item-type").value;

    const url = 'http://localhost:8080/itemId/list/expandable';
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
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    return result;
}

async function generateConfigTable() {
    let result;
    result = await getItemId();
    
    var table = document.getElementById("item-configuration-table");
    
    for (x in result) {
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);

        cell0.innerHTML = "edit";
        cell1.innerHTML = result[x].itemId;
        cell2.innerHTML = result[x].type;
        cell3.innerHTML = result[x].item;
        cell4.innerHTML = result[x].unit;
    }
}

window.addEventListener('load', generateConfigTable);
document.getElementById("confirm-add").addEventListener("click", setItemId);