var dataArray = [
    {
        receiptDate: '2024-04-01',
        receiptReference: 'REF001',
        receiptSupplier: 'Supplier A',
        receiptQty: 10,
        issuanceDate: '2024-04-05',
        issuanceRecipient: 'Recipient X',
        issuanceQty: 3,
        balanceQty: 7
    },
];

var tbody = document.querySelector('#bin-card-table tbody');

var numRows = 30;

function generateEmptyRows() {
    for (var i = 0; i < numRows; i++) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        `;
        tbody.appendChild(row);
    }
}

function populateTable() {
    for (var i = dataArray.length - 1; i >= 0; i--) {
        var data = dataArray[i];
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.receiptDate}</td>
            <td>${data.receiptReference}</td>
            <td>${data.receiptSupplier}</td>
            <td>${data.receiptQty}</td>
            <td>${data.issuanceDate}</td>
            <td>${data.issuanceRecipient}</td>
            <td>${data.issuanceQty}</td>
            <td>${data.balanceQty}</td>
        `;

        tbody.insertBefore(row, tbody.firstChild);
    }
}

generateEmptyRows();

populateTable();
