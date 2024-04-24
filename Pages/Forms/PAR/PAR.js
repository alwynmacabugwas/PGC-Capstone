document.addEventListener("DOMContentLoaded", function() {
    var dataArray = [
        { quantity: "1", unit: "Each", description: "Item 1", propertyNo: "12345" },
        { quantity: "2", unit: "Pack", description: "Item 2", propertyNo: "54321" },
    ];

    function generateTableRows() {
        var tbody = document.getElementById("tableBody");

        tbody.innerHTML = "";

        for (var i = 0; i < 25; i++) {
            var row = document.createElement("tr");
            var quantityCell = document.createElement("td");
            var unitCell = document.createElement("td");
            var descriptionCell = document.createElement("td");
            var propertyNoCell = document.createElement("td");

            if (dataArray[i]) {
                quantityCell.textContent = dataArray[i].quantity;
                unitCell.textContent = dataArray[i].unit;
                descriptionCell.textContent = dataArray[i].description;
                propertyNoCell.textContent = dataArray[i].propertyNo;
            }

            row.appendChild(quantityCell);
            row.appendChild(unitCell);
            row.appendChild(descriptionCell);
            row.appendChild(propertyNoCell);

            tbody.appendChild(row);
        }
    }


    generateTableRows();
});
