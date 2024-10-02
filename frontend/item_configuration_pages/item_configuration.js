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
    } catch (error) {
        console.error(error);
        alert(error);
        window.location.href = "item_configuration.html";
    }
    location.reload();
}

async function editItemId() {
    const itemId = document.getElementById("edit-item-id").value;
    const item = document.getElementById("edit-name").value;
    const unit = document.getElementById("edit-units").value;
    const type = document.getElementById("edit-type").value;
    
    const url = 'http://localhost:8080/itemId/update';
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
            "itemId": itemId
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

// function addRowHandlers(tableId) {
//     if (document.getElementById(tableId) != null) {
//         var table = document.getElementById(tableId);
//         var rows = table.getElementsByTagName('tr');

//         for (var i = 0; i < rows.length; i++) {
//             var itemId = '';
//             var type = '';
//             var item = '';
//             var unit = '';
            
//             rows[i].i = i;
//             var editLink = rows[i].getElementsByClassName('edit-link')[0]; // Target the Edit link

//             if (editLink) {
//                 editLink.addEventListener('click', function (e) {
//                     // Prevent the default action of the anchor and stop event propagation
//                     e.preventDefault();
//                     e.stopPropagation();
                    
//                     // Fetch data from the row
//                     itemId = table.rows[this.parentNode.parentNode.i].cells[1].innerHTML;
//                     type = table.rows[this.parentNode.parentNode.i].cells[2].innerHTML;
//                     item = table.rows[this.parentNode.parentNode.i].cells[3].innerHTML;
//                     unit = table.rows[this.parentNode.parentNode.i].cells[4].innerHTML;
                    
//                     console.log(table.rows[this.parentNode.parentNode.i].cells[3].innerHTML);

//                     // Open the pop-up and populate the fields with row data
//                     openEditItemPopout();
//                     document.getElementById("edit-item-id").value = itemId;
//                     document.getElementById("edit-type").placeholder = "Enter Type";;
//                     document.getElementById("edit-name").placeholder = "Enter Name";;
//                     document.getElementById("edit-units").placeholder = "Enter Units";;
//                 });
//             }
//         }
//     }
// }

function addRowHandlers(tableId) {
    if(document.getElementById(tableId)!=null){
        var table = document.getElementById(tableId);
        var rows = table.getElementsByTagName('tr');
        for ( let i = 0; i < rows.length; i++) {
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
                openEditItemPopout();
                document.getElementById("edit-item-id").value = itemId;
                document.getElementById("edit-type").value = type;
                document.getElementById("edit-name").value = item;
                document.getElementById("edit-units").value = unit;
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
        cell0.classList.add('edit-link');
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

function closeEditItemPopout() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("edit-item-popout-id").style.display = "none";
    document.getElementById("confirm-edit").style.display = "none";
    document.getElementById("discard-edit").style.display = "none";
    document.querySelector(".third-table").style.display = "none";
    document.querySelector(".edit-item-popout h1").style.display = "none";
}


window.addEventListener('load', generateConfigTable);
document.getElementById("confirm-add").addEventListener("click", setItemId);
document.getElementById("confirm-edit").addEventListener("click", editItemId);
document.getElementById('delete-link').addEventListener("click", deleteItemId);
document.getElementById("discard-edit").addEventListener("click", closeEditItemPopout);