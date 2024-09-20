async function setItemId() {

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
            "item_id": itemId,
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

async function editItemId() {
    const itemId = document.getElementById("edit-item-id").value;
    const item = document.getElementById("edit-name").value;
    const unit = document.getElementById("edit-units").value;
    const type = document.getElementById("edit-type").value;
    
    const url = 'http://localhost:8080/itemId/update';
    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "item_id": itemId,
            "item": item,
            "unit": unit,
            "type": type
        }),
    };
    let result;

    try {
        const response = await fetch(url, options);
        result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}

async function deleteItemId() {
    var confirmation = confirm("Are you sure you want to delete this item data?");
    if (confirmation) {
        const url = 'http://localhost:8080/itemId/delete';
    const itemId = document.getElementById("edit-item-id").value;
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
        console.log(itemId);
    } catch (error) {
        console.error(error);
    }
    window.location.href = "item_configuration.html";

    } else {
        console.log("user cancelled");
    }
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

function addRowHandlers(tableId) {
    if(document.getElementById(tableId)!=null){
        var table = document.getElementById(tableId);
        var rows = table.getElementsByTagName('tr');
        for ( var i = 0; i < rows.length; i++) {
            var itemId = '';
            var type = '';
            var item = '';
            var unit = '';
            rows[i].i = i;
            rows[i].onclick = function() {   
                itemId = table.rows[this.i].cells[1].innerHTML;                
                type = table.rows[this.i].cells[2].innerHTML;
                item = table.rows[this.i].cells[3].innerHTML;
                unit = table.rows[this.i].cells[4].innerHTML;
                console.log(table.rows[this.i].cells[3].innerHTML)
                openEditItemPopout();
                document.getElementById("edit-item-id").defaultValue = itemId;
                document.getElementById("edit-type").defaultValue = type;
                document.getElementById("edit-name").defaultValue = item;
                document.getElementById("edit-units").defaultValue = unit;
            };
        }
    }
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
    addRowHandlers('item-configuration-table');
}

function openEditItemPopout() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("edit-item-popout-id").style.display = "block";
    document.getElementById("confirm-edit").style.display = "block";
    document.getElementById("discard-edit").style.display = "block";
    document.querySelector(".third-table").style.display = "block";
    document.querySelector(".edit-item-popout h1").style.display = "block";
}

window.addEventListener('load', generateConfigTable);
document.getElementById("confirm-add").addEventListener("click", setItemId);
document.getElementById("confirm-edit").addEventListener("click", editItemId);
document.getElementById('delete-link').addEventListener("click", deleteItemId);