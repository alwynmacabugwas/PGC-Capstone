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
            "item_Id": itemId,
            "item": item,
            "unit": unit,
            "type": type
        }),
    };
    let result;

    try {
        const response = await fetch(url, options);
        result = await response.json();
        location.reload();
        //console.log(result);
    } catch (error) {
        console.error(error);
    }

}

async function deleteItemId(itemId) {
    const url = 'http://localhost:8080/itemId/delete';
    const options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "item_Id": itemId
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
    location.reload();
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

        cell0.addEventListener('click',openEditItemPopout);
        openEditItemPopout(result[x]);
        //  cell0.addEventListener('click',editItemId(result[x]));
    }
}

function openEditItemPopout(itemId) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("edit-item-popout-id").style.display = "block";
    document.getElementById("confirm-edit").style.display = "block";
    document.getElementById("discard-edit").style.display = "block";
    document.querySelector(".third-table").style.display = "block";
    document.querySelector(".edit-item-popout h1").style.display = "block";

    document.getElementById("edit-item-id").defaultValue = itemId.itemId;
    document.getElementById("edit-type").defaultValue = itemId.type;
    document.getElementById("edit-name").defaultValue = itemId.item;
    document.getElementById("edit-units").defaultValue = itemId.unit;
    console.log(itemId);
}

function editItemId(itemId) {
    document.getElementById("edit-item-id").defaultValue = itemId.itemId;
    document.getElementById("edit-type").defaultValue = itemId.type;
    document.getElementById("edit-name").defaultValue = itemId.item;
    document.getElementById("edit-units").defaultValue = itemId.unit;
    console.log(itemId);
}

window.addEventListener('load', generateConfigTable);
document.getElementById("confirm-add").addEventListener("click", setItemId);
document.getElementById("confirm-edit").addEventListener("click", setItemId);