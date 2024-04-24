document.addEventListener("DOMContentLoaded", function() {
    const sampleData = [
        {
            date: '2024-04-01',
            requisition: 'REQ001',
            fromWhom: 'Supplier A',
            quantityReceived: 100,
            quantityIssued: 50,
            quantityOnHand: 50,
            remarks: 'Received partial shipment'
        },
        {
            date: '2024-04-05',
            requisition: 'REQ002',
            fromWhom: 'Warehouse B',
            quantityReceived: 200,
            quantityIssued: 150,
            quantityOnHand: 100,
            remarks: 'Issued to department C'
        }
    ];

    const tableBody = document.getElementById("stock-table-body");
    const rows = 30; 

    for (let i = 0; i < rows; i++) {
        const rowData = i < sampleData.length ? sampleData[i] : {};
        row.innerHTML = `
            <td>${rowData.date || ''}</td>
            <td>${rowData.requisition || ''}</td>
            <td>${rowData.fromWhom || ''}</td>
            <td>${rowData.quantityReceived || ''}</td>
            <td>${rowData.quantityIssued || ''}</td>
            <td>${rowData.quantityOnHand || ''}</td>
            <td>${rowData.remarks || ''}</td>
        `;
        tableBody.appendChild(row);
    }
});
