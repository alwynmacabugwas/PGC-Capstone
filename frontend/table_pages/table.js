function openAddItem() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("add-item-popout-id").style.display = "block";
    document.getElementById("confirm-add").style.display = "block";
    document.getElementById("discard-add").style.display = "block";
    document.querySelector(".second-table").style.display = "block";
    document.querySelector(".add-item-popout h1").style.display = "block";
  }

function closeAddItem() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("add-item-popout-id").style.display = "none";
    document.getElementById("confirm-add").style.display = "none";
    document.getElementById("discard-add").style.display = "none";
    document.querySelector(".second-table").style.display = "none";
    document.querySelector(".add-item-popout h1").style.display = "none";
}

document.getElementById("add-item-button").addEventListener("click", openAddItem);
document.getElementById("discard-add").addEventListener("click", closeAddItem);

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

document.getElementById("edit-link").addEventListener("click", openEditItemPopout);
document.getElementById("discard-edit").addEventListener("click", closeEditItemPopout);



var rowsPerPage = 10; // Adjust as needed
var currentPage = 1;
function updateTableDisplay() {
  var rows = document.querySelectorAll(".table tbody tr");
  var totalPages = Math.ceil(rows.length / rowsPerPage);

  // Hide all rows
  rows.forEach(function(row) {
      row.style.display = "none";
  });

  // Calculate start and end indices for the current page
  var startIndex = (currentPage - 1) * rowsPerPage;
  var endIndex = startIndex + rowsPerPage;

  // Display rows for the current page
  for (var i = startIndex; i < endIndex && i < rows.length; i++) {
      rows[i].style.display = "";
  }

  // Generate page number buttons
  var pageNavigator = document.getElementById("page-navigator");
  pageNavigator.innerHTML = "";
  for (var i = 1; i <= totalPages; i++) {
      var button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", function() {
          currentPage = parseInt(this.textContent);
          updateTableDisplay();
      });
      pageNavigator.appendChild(button);
  }
}



//Function when delete table is pressed
var deleteLink = document.getElementById('delete-link');
// Add click event listener
deleteLink.addEventListener('click', function() {
    // Show confirmation pop-up
    var confirmation = confirm("Are you sure you want to delete this item data?");
    // If user confirms deletion
    if (confirmation) {
        // Perform delete action here, like removing the row from the table
        // For example, you can use this.parentElement.parentElement.remove() to remove the entire row
    } else {
        // If user cancels deletion, do nothing
    }
});
