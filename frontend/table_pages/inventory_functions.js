let tableId = document.getElementsByClassName("table");

async function setItem() {
    const item_no = document.getElementById("item_num").value;
    const po_no = document.getElementById("po_num").value;
    const date = document.getElementById("date").value;
    const supplier = document.getElementById("supplier").value;
    const department = document.getElementById("department-dropdown").value;
    const item_id = document.getElementById("item-id").value;
    const quantity = document.getElementById("quantity").value;
    const price_per_unit = document.getElementById("price-per-unit").value;
    const expiry_date = document.getElementById("expiry-date").value;
    const section = localStorage.getItem('section');

    console.log("pressed1");
    const url = 'http://localhost:8080/item/register';
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "item_no": item_no,
            "po_num": po_no,
            "date": date,
            "supplier": supplier,
            "department": department,
            "item_id": item_id,
            "quantity": quantity,
            "price_per_unit": price_per_unit,
            "expiry_date": expiry_date,
            "section": section
        }),
    };
    let result;
    console.log("pressed2");
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
        for ( let i = 0; i < rows.length; i++) {
            var date = '';
            var supplier = '';
            var department='';
            var item_id = '';
            var quantity = '';
            var price_per_unit = '';
            var expiry_date = '';


            rows[i].i = i;
            rows[i].onclick = function() {   
                date = table.rows[this.i].cells[3].innerHTML;
                supplier = table.rows[this.i].cells[3].innerHTML;
                item_id = table.rows[this.i].cells[4].innerHTML;
                quantity = table.rows[this.i].cells[4].innerHTML;
                price_per_unit = table.rows[this.i].cells[4].innerHTML;
                department = table.rows[this.i].cells[4].innerHTML;
                expiry_date = table.rows[this.i].cells[4].innerHTML;
                openEditItemPopout();
                document.getElementById("edit-item-id").value = itemId;
                document.getElementById("edit-type").value = type;
                document.getElementById("edit-name").value = item;
                document.getElementById("edit-units").value = unit;
            };
        }
    }
}

document.getElementById("confirm-add").addEventListener("click", setItem);