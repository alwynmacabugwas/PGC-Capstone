async function setItem() {
    const po_no = document.getElementById("po_num").value;
    const date = document.getElementById("date").value;
    const supplier = document.getElementById("supplier").value;
    const department = document.getElementById("department").value;
    const item_id = document.getElementById("item-id").value;
    const quantity = document.getElementById("quantity").value;
    const price_per_unit = document.getElementById("price-per-unit").value;
    const expiry_date = document.getElementById("expiry-date").value;
    const section = localStorage.getItem('section');

    const url = 'http://localhost:8080/item/register';
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "po_no": po_no,
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

    try {
        const response = await fetch(url, options);
        result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    return result;
}

document.getElementById("confirm-add").addEventListener("click", setItem);