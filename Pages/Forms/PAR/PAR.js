document.addEventListener("DOMContentLoaded", function() {
    // Sample data array (replace this with your actual data array)
    var dataArray = [
        { quantity: "1", unit: "Each", description: "Item 1", propertyNo: "12345" },
        { quantity: "2", unit: "Pack", description: "Item 2", propertyNo: "54321" },
        // Add more data objects as needed
    ];

    // Function to generate table rows based on data array
    function generateTableRows() {
        var tbody = document.getElementById("tableBody");

        // Clear existing rows
        tbody.innerHTML = "";

        // Generate 25 rows
        for (var i = 0; i < 25; i++) {
            var row = document.createElement("tr");
            var quantityCell = document.createElement("td");
            var unitCell = document.createElement("td");
            var descriptionCell = document.createElement("td");
            var propertyNoCell = document.createElement("td");

            if (dataArray[i]) {
                // Fill cells with data from the array if available
                quantityCell.textContent = dataArray[i].quantity;
                unitCell.textContent = dataArray[i].unit;
                descriptionCell.textContent = dataArray[i].description;
                propertyNoCell.textContent = dataArray[i].propertyNo;
            }

            // Append cells to row
            row.appendChild(quantityCell);
            row.appendChild(unitCell);
            row.appendChild(descriptionCell);
            row.appendChild(propertyNoCell);

            // Append row to tbody
            tbody.appendChild(row);
        }
    }

    // Call the function to generate table rows
    generateTableRows();
});
