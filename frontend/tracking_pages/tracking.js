let item_code;

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

function addRowHandlers(tableId) {
    if(document.getElementById(tableId)!=null){
        var table = document.getElementById(tableId);
        var rows = table.getElementsByTagName('tr');
        for ( var i = 1; i < rows.length; i++) {
            var status = '';
            var issuer = '';
            var recipient = '';
            var date = '';
            rows[i].i = i;
            rows[i].onclick = function() {   
                item_code = table.rows[this.i].cells[0].innerHTML;                
                status = table.rows[this.i].cells[3].innerHTML;
                issuer = table.rows[this.i].cells[4].innerHTML;
                recipient = table.rows[this.i].cells[5].innerHTML;
                date = table.rows[this.i].cells[6].innerHTML;
                openEditItemPopout();
                document.getElementById("status").defaultValue = status;
                document.getElementById("issuer").defaultValue = issuer;
                document.getElementById("recipient").defaultValue = recipient;
                document.getElementById("date").defaultValue = date;
            };
        }
    }
}

async function getTrackedItems() {

    const url = 'http://localhost:8080/itemtracker';
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

async function generateTrackerTable() {
    let result;
    result = await getTrackedItems();
    
    var table = document.getElementById("tracker-table").getElementsByTagName('tbody')[0];
    
    for (x in result) {
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);

        cell0.innerHTML = result[x].item_code;
        cell1.innerHTML = result[x].item_id;
        cell2.innerHTML = result[x].item_no;
        cell3.innerHTML = result[x].status;
        cell4.innerHTML = result[x].issuer;
        cell5.innerHTML = result[x].recipient;
        cell6.innerHTML = result[x].date;
    }
    addRowHandlers('tracker-table');
}

async function setItemId() {

    const status = document.getElementById("status").value;
    const issuer = document.getElementById("issuer").value;
    const recipient = document.getElementById("recipient").value;
    const date = document.getElementById("date").value;
    

    const url = 'http://localhost:8080/itemtracker/edit';
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "status": status,
            "issuer": issuer,
            "recipient": recipient,
            "date": date,
            "item_code": item_code
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
    closeEditItemPopout();
    return result;
}


window.addEventListener('load', generateTrackerTable);
document.getElementById("discard-edit").addEventListener("click", closeEditItemPopout);
document.getElementById("confirm-edit").addEventListener("click", setItemId);
