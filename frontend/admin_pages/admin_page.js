async function generateAccountsTable() {
    let result;
    result = await getUserAccounts();
    
    var table = document.getElementById("accounts-table");
    
    for (x in result) {
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);

        cell0.innerHTML = "edit";
        cell1.innerHTML = result[x].username;
        cell2.innerHTML = result[x].name;
        cell3.innerHTML = result[x].department;
        cell4.innerHTML = result[x].password;
    }
    addRowHandlers('accounts-table');
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

async function getUserAccounts() {

    const url = 'http://localhost:8080/account/list';
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

async function editAccount() {
    const username = document.getElementById("edit-username").value;
    const name = document.getElementById("edit-name").value;
    const department = document.getElementById("edit-section").value;
    const password = document.getElementById("edit-password").value;
    
    const url = 'http://localhost:8080/account/update';
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "name": name,
            "department": department,
            "password": password
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
    location.reload();
}

async function deleteAccount() {
    const username = document.getElementById("edit-username").value;
    
    const url = 'http://localhost:8080/account/delete';
    const options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username
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

    location.reload();
}

function addRowHandlers(tableId) {
    if(document.getElementById(tableId)!=null){
        var table = document.getElementById(tableId);
        var rows = table.getElementsByTagName('tr');
        for ( let i = 0; i < rows.length; i++) {
            var username = '';
            var name = '';
            var section = '';
            var password = '';
            rows[i].i = i;
            rows[i].onclick = function() {   
                username = table.rows[this.i].cells[1].innerHTML;                
                name = table.rows[this.i].cells[2].innerHTML;
                section = table.rows[this.i].cells[3].innerHTML;
                password = table.rows[this.i].cells[4].innerHTML;
                openEditItemPopout();
                document.getElementById("edit-username").value = username;
                document.getElementById("edit-name").value = name;
                document.getElementById("edit-section").value = section;
                document.getElementById("edit-password").value = password;
            };
        }
    }
}

window.addEventListener('load', generateAccountsTable);
document.getElementById("edit-link").addEventListener("click", openEditItemPopout);
document.getElementById("discard-edit").addEventListener("click", closeEditItemPopout);
document.getElementById("confirm-edit").addEventListener("click", editAccount);
document.getElementById("delete-link").addEventListener("click", deleteAccount);