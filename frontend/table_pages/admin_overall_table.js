async function getAllItems() {

    const url = 'http://localhost:8080/item/admin/all';
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

async function generateAdminAllTable() {
    let result;
    result = await getAllItems();
    
    var table = document.getElementById("admin-overall");
    
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
        var cell10 = row.insertCell(10);


        cell0.innerHTML = "edit";
        cell1.innerHTML = result[x].item_no;
        cell2.innerHTML = result[x].po_no;
        cell3.innerHTML = result[x].date;
        cell4.innerHTML = result[x].supplier;
        cell5.innerHTML = result[x].department;
        cell6.innerHTML = result[x].item_id;
        cell7.innerHTML = result[x].quantity;
        cell8.innerHTML = result[x].price_per_unit;
        cell9.innerHTML = result[x].total;
        cell10.innerHTML = result[x].expiry_date;
    }
}

window.addEventListener('load', generateAdminAllTable);