document.addEventListener("DOMContentLoaded", function() {
    // Sample data array
    const dataArray = [
        { article: "Item 1", description: "Description 1", oldPropertyNo: "123", newPropertyNo: "456", unitOfMeasure: "Unit 1", unitValue: "10", balancePerCard: "5", onHandPerCount: "7", shortageOverageQuantity: "2", shortageOverageValue: "20", remarks: "Remark 1" },
        // Add more data as needed
    ];

    const tableBody = document.getElementById("table-body");
    const rows = 30; // Total number of rows

    // Loop through all rows and populate the table with sample data or empty cells
    for (let i = 0; i < rows; i++) {
        const data = dataArray[i] || {}; // If data doesn't exist, use empty object
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.article || ''}</td>
            <td>${data.description || ''}</td>
            <td>${data.oldPropertyNo || ''}</td>
            <td>${data.newPropertyNo || ''}</td>
            <td>${data.unitOfMeasure || ''}</td>
            <td>${data.unitValue || ''}</td>
            <td>${data.balancePerCard || ''}</td>
            <td>${data.onHandPerCount || ''}</td>
            <td>${data.shortageOverageQuantity || ''}</td>
            <td>${data.shortageOverageValue || ''}</td>
            <td>${data.remarks || ''}</td>
        `;
        tableBody.appendChild(row);
    }

    // Add empty rows if there's not enough data
    for (let i = dataArray.length; i < rows; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        `;
        tableBody.appendChild(row);
    }
});
